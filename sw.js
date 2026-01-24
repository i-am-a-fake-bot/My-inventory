const CACHE_NAME = 'inventory-v2'; // Changed version to force update
const ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3081/3081913.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // IGNORE GITHUB API CALLS - Always go to network
  if (e.request.url.includes('api.github.com')) {
    return e.respondWith(fetch(e.request));
  }

  // For other files, try Network first, fall back to Cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
