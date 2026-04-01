const CACHE_NAME = "my-cache-v1";
const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});