const cacheName = "EduQlasse-CrisprSim-0.1";
const contentToCache = [
    "Build/c0294dc43876dfd76e7456267e934ef7.loader.js",
    "Build/eb14af9693ea5d01ed136c9187534110.framework.js",
    "Build/6a6ffe8771d1ba652b7792c3d1f1ef64.data",
    "Build/c3e361bf1d49b41ee30ae33aed20bcda.wasm",
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
