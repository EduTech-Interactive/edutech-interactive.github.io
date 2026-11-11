const cacheName = "EduQlasse-CrisprSim-1.0";
const contentToCache = [
    "Build/59e85ee323f05263fd7675dcff2b78cf.loader.js",
    "Build/eb14af9693ea5d01ed136c9187534110.framework.js",
    "Build/2169fda0c3b597034b1ea066422d9a42.data",
    "Build/d7adcd495564af4c6286e569661b8583.wasm",
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
