// Make service worker supported
if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../../sw_cache_site.js')
            .then(() => console.log('Service worker registered...'))
            .catch(err => console.log(`The service worker Error: ${err}`));
    });
}