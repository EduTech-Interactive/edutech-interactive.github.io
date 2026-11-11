const cacheName = "EduQlasse-CrisprSim-1.0";
const contentToCache = [
    "Build/904e333a684870dd78143cd2ba72d432.loader.js",
    "Build/eb14af9693ea5d01ed136c9187534110.framework.js",
    "Build/ab709518693eecc0e1b59a1368cae7fb.data",
    "Build/f3a2ee4a6673f58de63bf388e91461bb.wasm",
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
