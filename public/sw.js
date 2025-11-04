// Service Worker to prevent image caching in development
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Don't cache images from /images/collections/
  if (event.request.url.includes('/images/collections/')) {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store',
      })
    );
  }
});

