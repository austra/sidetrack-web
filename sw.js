const CACHE = 'sidetrack-v10';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(['./', './index.html'])));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((hit) => {
      return (
        hit ||
        fetch(event.request)
          .then((res) => {
            const copy = res.clone();
            if (res.ok && new URL(event.request.url).origin === self.location.origin) {
              caches.open(CACHE).then((cache) => cache.put(event.request, copy));
            }
            return res;
          })
          .catch(() => caches.match('./index.html'))
      );
    }),
  );
});
