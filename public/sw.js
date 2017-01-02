// cache app shell
self.addEventListener('install', function(e){
  console.log("Service Worker : installing...");
  e.waitUntil(
    caches.open('mycache').then(function(cache) {
      console.log("Service Worker : cache all");
      return cache.addAll([
        '/',
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
});
