self.onfetch = function(event) {
  
  console.log('fetch');

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});
