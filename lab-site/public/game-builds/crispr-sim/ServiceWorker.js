const cacheName = "EduQlasse-CrisprSim-1.0";
const contentToCache = [
    "Build/32c2e5b0d29df35763e5da5002c5906c.loader.js",
    "Build/eb14af9693ea5d01ed136c9187534110.framework.js",
    "Build/74aa4d754bdb6dcf154052f11b89173f.data",
    "Build/7763c926e3108fac9c0582d87779485b.wasm",
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
