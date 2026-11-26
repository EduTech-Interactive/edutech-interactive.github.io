#!/usr/bin/env node
// GitHub Projects v2 ("Website Project") -> Google Sheet, one way.
//
//   node sheet-sync/sync.mjs reconcile          send every board item (batched)
//   node sheet-sync/sync.mjs item <node_id>     send one issue/PR (event-driven)
//   node sheet-sync/sync.mjs cancel <node_id>   set a PR's board Status to Cancelled
//   node sheet-sync/sync.mjs inspect            print board fields, status options, assignees
//
// Env: GH_TOKEN (PAT/App token with org Projects access), SHEET_WEBAPP_URL,
//      SHEET_SYNC_SECRET.
// Node 20+ (built-in fetch). No dependencies.

import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const cfg = JSON.parse(await readFile(new URL('./config.json', import.meta.url), 'utf8'));
const { GH_TOKEN, SHEET_WEBAPP_URL, SHEET_SYNC_SECRET } = process.env;

const warn = (msg) => console.log(`::warning::${msg}`);
const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

// ---------------------------------------------------------------- GitHub ----

async function gql(query, variables = {}) {
  if (!GH_TOKEN) throw new Error('GH_TOKEN is not set');
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'web-tasks-sheet-sync',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.errors) throw new Error(`GraphQL ${res.status}: ${JSON.stringify(json.errors ?? json)}`);
  return json.data;
}

const ITEM_FIELDS = `
  id
  isArchived
  project { id }
  status: fieldValueByName(name: ${JSON.stringify(cfg.statusField)}) {
    ... on ProjectV2ItemFieldSingleSelectValue { name }
  }
  priority: fieldValueByName(name: ${JSON.stringify(cfg.priorityField)}) {
    ... on ProjectV2ItemFieldSingleSelectValue { name }
    ... on ProjectV2ItemFieldTextValue { text }
  }
  content {
    __typename
    ... on Issue       { title body url assignees(first: 5) { nodes { login } } }
    ... on PullRequest { title body url assignees(first: 5) { nodes { login } } }
    ... on DraftIssue  { title body       assignees(first: 5) { nodes { login } } }
  }`;

async function getProject() {
  const data = await gql(
    `query($org: String!, $q: String!) {
      organization(login: $org) {
        projectsV2(first: 20, query: $q) {
          nodes {
            id number title
            fields(first: 50) {
              nodes {
                ... on ProjectV2FieldCommon { id name dataType }
                ... on ProjectV2SingleSelectField { options { id name } }
              }
            }
          }
        }
      }
    }`,
    { org: cfg.org, q: cfg.projectTitle },
  );
  const project = data.organization?.projectsV2.nodes.find((p) => p.title === cfg.projectTitle);
  if (!project) {
    throw new Error(`Project "${cfg.projectTitle}" not found in ${cfg.org}. Does the token have org Projects read access?`);
  }
  return project;
}

async function* allItems(projectId) {
  let after = null;
  do {
    const data = await gql(
      `query($id: ID!, $after: String) {
        node(id: $id) {
          ... on ProjectV2 {
            items(first: 100, after: $after) {
              pageInfo { hasNextPage endCursor }
              nodes { ${ITEM_FIELDS} }
            }
          }
        }
      }`,
      { id: projectId, after },
    );
    const page = data.node.items;
    yield* page.nodes;
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);
}

/** The board item for an issue/PR node id, or null if it isn't on the board. */
async function itemForContent(contentId, projectId) {
  const data = await gql(
    `query($id: ID!) {
      node(id: $id) {
        ... on Issue       { projectItems(first: 20) { nodes { ${ITEM_FIELDS} } } }
        ... on PullRequest { projectItems(first: 20) { nodes { ${ITEM_FIELDS} } } }
      }
    }`,
    { id: contentId },
  );
  return data.node?.projectItems?.nodes.find((i) => i.project.id === projectId) ?? null;
}

// --------------------------------------------------------------- mapping ----

/**
 * Split an issue body into Description and Notes at a heading named
 * "Notes" (any level, e.g. "### Notes", as the issue form produces).
 * Text before it is Description; a leading "### Description" heading is dropped.
 */
export function splitBody(raw) {
  const text = (raw || '').replace(/\r\n?/g, '\n');
  const heading = /^#{1,6}[ \t]*(description|notes)[ \t]*:?[ \t]*$/gim;
  const parts = { description: [], notes: [] };
  let current = 'description';
  let last = 0;
  let m;
  while ((m = heading.exec(text))) {
    parts[current].push(text.slice(last, m.index));
    current = m[1].toLowerCase();
    last = heading.lastIndex;
  }
  parts[current].push(text.slice(last));
  const clean = (chunks) => {
    let s = chunks.join('\n').trim();
    if (/^_no response_$/i.test(s)) s = ''; // issue-form placeholder for empty fields
    if (s.length > cfg.cellMaxChars) s = s.slice(0, cfg.cellMaxChars - 1) + '…';
    return s;
  };
  return { description: clean(parts.description), notes: clean(parts.notes) };
}

export function toPayload(item) {
  const c = item.content;
  const key = c.url || `draft:${item.id}`;
  const title = (c.title || '').trim();
  const { description, notes } = splitBody(c.body);

  const boardStatus = item.status?.name ?? null;
  let status = cfg.noStatus;
  if (boardStatus != null) {
    status = cfg.statusMap[boardStatus];
    if (status == null) {
      warn(`Board status "${boardStatus}" is not in statusMap; sending it unchanged (${key})`);
      status = boardStatus;
    }
  }

  const login = c.assignees?.nodes?.[0]?.login ?? null;
  let owner = '';
  if (login) {
    owner = cfg.ownerMap[login] ?? '';
    if (!owner) warn(`Assignee "${login}" is not in ownerMap; row goes to New Tasks (${key})`);
  }

  const priority = item.priority?.name ?? item.priority?.text ?? '';
  return { key, title, description, notes, status, owner, priority };
}

function syncable(item) {
  if (item.isArchived) return false;
  if (!item.content) {
    warn(`Item ${item.id} has no readable content (no access to its repo?); skipped`);
    return false;
  }
  return true;
}

// ----------------------------------------------------------------- sheet ----

async function postToSheet(items) {
  if (!SHEET_WEBAPP_URL || !SHEET_SYNC_SECRET) throw new Error('SHEET_WEBAPP_URL / SHEET_SYNC_SECRET not set');

  let failed = 0;
  for (let i = 0; i < items.length; i += cfg.batchSize) {
    const batch = items.slice(i, i + cfg.batchSize);
    const result = await postBatch(batch);
    for (const r of result.results ?? []) {
      if (r.ok) console.log(`${r.action.padEnd(16)} ${r.tab.padEnd(15)} ${r.key}`);
      else { failed++; console.log(`::error::${r.key}: ${r.error}`); }
    }
    if (!result.ok && !result.results) throw new Error(`Web app error: ${result.error}`);
  }
  if (failed) throw new Error(`${failed} item(s) failed`);
}

async function postBatch(batch, attempt = 1) {
  // Apps Script replies 302 -> script.googleusercontent.com; fetch follows it
  // with a GET, which is what `curl -L` does too.
  const res = await fetch(SHEET_WEBAPP_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ secret: SHEET_SYNC_SECRET, items: batch }),
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = null;
  }
  if (json && json.error !== 'busy') return json;
  if (attempt < 3) {
    await sleep(10 * attempt);
    return postBatch(batch, attempt + 1);
  }
  throw new Error(
    json
      ? 'Web app stayed busy (lock held) after 3 attempts'
      : `Web app did not return JSON (HTTP ${res.status}). Is the deployment's access set to "Anyone"? First 200 chars: ${text.slice(0, 200)}`,
  );
}

// -------------------------------------------------------------- commands ----

async function reconcile() {
  const project = await getProject();
  const payloads = [];
  for await (const item of allItems(project.id)) if (syncable(item)) payloads.push(toPayload(item));
  console.log(`Board has ${payloads.length} active item(s)`);
  await postToSheet(payloads);
}

async function syncOne(contentId) {
  // Give built-in project workflows (Item closed, PR merged, ...) time to
  // update Status before we read it. The hourly reconcile covers any miss.
  await sleep(cfg.eventDelaySeconds);
  const project = await getProject();
  const item = await itemForContent(contentId, project.id);
  if (!item) return console.log('Not on the board; nothing to sync');
  if (!syncable(item)) return console.log('Archived on the board; skipped');
  await postToSheet([toPayload(item)]);
}

async function cancel(contentId) {
  const project = await getProject();
  const field = project.fields.nodes.find((f) => f.name === cfg.statusField);
  const option = field?.options?.find((o) => o.name === cfg.cancelledOption);
  if (!option) throw new Error(`Status option "${cfg.cancelledOption}" not found on the board. Add it to the Status field.`);

  const item = await itemForContent(contentId, project.id);
  if (!item) return console.log('PR is not on the board; nothing to cancel');

  await gql(
    `mutation($p: ID!, $i: ID!, $f: ID!, $o: String!) {
      updateProjectV2ItemFieldValue(input: { projectId: $p, itemId: $i, fieldId: $f, value: { singleSelectOptionId: $o } }) {
        projectV2Item { id }
      }
    }`,
    { p: project.id, i: item.id, f: field.id, o: option.id },
  );
  console.log(`Set Status -> ${option.name} for ${item.content?.url ?? item.id}`);
}

async function inspect() {
  const project = await getProject();
  console.log(`Project #${project.number}: ${project.title}\n\nFields:`);
  for (const f of project.fields.nodes) {
    if (!f.name) continue;
    const opts = f.options ? `  [${f.options.map((o) => o.name).join(', ')}]` : '';
    console.log(`  ${f.name} (${f.dataType})${opts}`);
  }
  const logins = new Set();
  for await (const item of allItems(project.id)) {
    for (const a of item.content?.assignees?.nodes ?? []) logins.add(a.login);
  }
  console.log(`\nAssignees on the board: ${[...logins].sort().join(', ') || '(none)'}`);
  const unmapped = [...logins].filter((l) => !(l in cfg.ownerMap));
  if (unmapped.length) console.log(`Not in ownerMap: ${unmapped.join(', ')}`);
  const statusOpts = project.fields.nodes.find((f) => f.name === cfg.statusField)?.options ?? [];
  const missing = statusOpts.map((o) => o.name).filter((n) => !(n in cfg.statusMap));
  if (missing.length) console.log(`Status options not in statusMap: ${missing.join(', ')}`);
}

async function main() {
  const [cmd, arg] = process.argv.slice(2);
  const commands = { reconcile, item: syncOne, cancel, inspect };
  if (!commands[cmd] || ((cmd === 'item' || cmd === 'cancel') && !arg)) {
    console.error('Usage: sync.mjs reconcile | inspect | item <node_id> | cancel <node_id>');
    process.exit(2);
  }
  try {
    await commands[cmd](arg);
  } catch (err) {
    console.log(`::error::${err.message}`);
    process.exit(1);
  }
}

// Run only when executed directly, so tests can import splitBody/toPayload.
if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) await main();
