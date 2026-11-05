const cacheName = "EduQlasse-CrisprSim-0.1";
const contentToCache = [
    "Build/25e41472654e1a664fd85c1a1b5e39d8.loader.js",
    "Build/eb14af9693ea5d01ed136c9187534110.framework.js",
    "Build/acc4b64fe8c20179a1e2a67684b56c40.data",
    "Build/6dadae26aa8e418ef0e3c2fc15c5496b.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
