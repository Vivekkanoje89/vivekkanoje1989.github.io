const cacheName = 'v1';
// Add install event listner
self.addEventListener('install', (e)=> {
    console.log('Service worker: Installed');
})

// Add activate event listner
self.addEventListener('activate', (e)=> {
    console.log('Service worker: Activated');
    e.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName){
                        console.log('Service worker clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

//cache fech event
self.addEventListener('fetch', (e) => {
    console.log('Service worker: Fetching');
    // e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    e.respondWith(
        fetch(e.request)
            .then(res => {
                //clone response
                const respClone = res.clone();
                //open cache
                caches.open(cacheName)
                    .then(cache => {
                        // add response to cache
                        cache.put(e.request, respClone);
                    });
                return res;
            }).catch(err => caches.match(e.request).then(res => res))
    )
});