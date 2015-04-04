console.log('sw');
// example usage:
self.oninstall = function(event) {
  
  console.log('install');
  
  event.waitUntil(
    caches.open('demo-cache').then(function(cache) {
    console.log('install');
      return cache.put('/', new Response("From the cache!"));
    })
  );
});

self.onfetch = function(event) {
  
  console.log('fetch');

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});