importScripts('serviceworker-cache-polyfill.js');

console.log('sw');

// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/styles/main.css',
//   '/script/main.js'
// ];

// this.addEventListener('install', function(event) {
  
//   console.log('install');
//   インストール処理
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// example usage:
self.addEventListener('install', function(event) {
  console.log('install');
  event.waitUntil(
    caches.open('demo-cache').then(function(cache) {
      return cache.put('/', new Response("From the cache!"));
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch');
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});