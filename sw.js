<<<<<<< HEAD
console.log('sw');


=======
>>>>>>> 7b404138d5590aa76edf998e3d8869821bc9f224
self.onfetch = function(event) {
  
  console.log('fetch');

<<<<<<< HEAD
};
=======
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});
>>>>>>> 7b404138d5590aa76edf998e3d8869821bc9f224
