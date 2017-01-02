self.addEventListener('install', function(e){
  console.log("Service Worker : installing...");
  e.waitUntil(
    caches.open('mycache').then(function(cache) {
      console.log("Service Worker : cache app shell");
      return cache.addAll([
        '/',
        '/manifest.json',
        '/index.html',
        '/bootstrap-theme.min.css',
        '/bootstrap.min.css',
        '/favicon.ico',
        '/static/js/bundle.js',
        '/static/media/footer.f2d9fcde.jpg'
      ])
      .then(() => {
        console.log("Service Worker : installed");
        self.skipWaiting();
      });
   })
 );
});

// intercepts all requests
self.addEventListener('fetch', function(event){
  console.log(event.request.url);
  event.respondWith(
    // look in the cache for a ressource that matches
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => {
      console.log('Service Worker : fetch error ' + err);
    })
  );
});
