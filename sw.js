const CACHE_NAME = 'inventory-v3'; // Changed version to force update
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

  // Always go online for GitHub
  if (e.request.url.includes('api.github.com')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // App files: network → cache → offline page
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
      .then(res => res || caches.match('./offline.html'))
  );
});
