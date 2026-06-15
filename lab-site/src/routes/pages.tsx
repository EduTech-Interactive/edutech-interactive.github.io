import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Homepage from '../components/homepage/homepage'
import Partners from '../components/partners/partners'
import Resources from '../components/resources/resources'
import ResearchProjects from '../components/research-projects/research-approach'
import { About } from '../components/about/about'
import GenAiApps from '../components/gen-ai-apps/gen-ai-apps'
import Blog from '../components/blog/blog'
import Podcasts from '../components/podcasts/podcasts'
import Publications from '../components/publications/publications'
import GamesAndSimulations from '../components/games-and-simulations/games-and-simulations'
import Arcana from '../components/games-and-simulations/games/arcana'

export const PATHS = 
{
  HOME: '/',
  RESEARCH_PROJECTS: '/research-projects',
  GAMES_AND_SIMULATIONS: '/games-and-simulations',
  GEN_AI_APPS: '/gen-ai-apps',
  RESOURCES: '/resources',
  BLOG: '/blog',
  PODCAST: '/podcast',
  PUBLICATIONS: '/publications',
  PARTNERS: '/partners',
  ABOUT: '/about',
} as const;

export const GAME_PATHS = 
{
  BIOBOT: "/biobot",
  CM_SIM: "/cm-sim",
  DIVIDE_AND_CONQUER: "/divide-and-conquer",
  ARCANA: "/arcana",
  GENE_DOOM: "/gene-doom",
  EARTH_CODEX: "/earth-codex",
  MICRO_MEDICS: "/micro-medics",
  VECTOR_SHOCK: "/vector-shock",
  CRISPR_SIM: "/crispr-sim",
} as const;


export const routeDefinitions = [

  //homepage
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.HOME,
    component: Homepage
  }),

  //research projects
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.RESEARCH_PROJECTS,
    component: ResearchProjects,
  }),

  //games and simulations
  //====================
  //base path
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.GAMES_AND_SIMULATIONS,
    component: GamesAndSimulations,
  }),

  //arcana game
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.GAMES_AND_SIMULATIONS + GAME_PATHS.ARCANA,
    component: Arcana,
  }),
  //===================

  //genai apps
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.GEN_AI_APPS,
    component: GenAiApps,
  }),

  //resources
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.RESOURCES,
    component: Resources,
  }),

  //blog
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.BLOG,
    component: Blog,
  }),

  //podcast
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.PODCAST,
    component: Podcasts,
  }),

  //podcast
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.PUBLICATIONS,
    component: Publications,
  }),

  //collab
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.PARTNERS,
    component: Partners,
  }),

  //what we do
  createRoute({
    getParentRoute: () => rootRoute,
    path: PATHS.ABOUT,
    component: About,
  }),

];