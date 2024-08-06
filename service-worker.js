self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});