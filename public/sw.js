const CACHE = 'stoomtrein-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((namen) =>
      Promise.all(namen.filter((n) => n !== CACHE).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  const isBeeld = /\.(png|jpg|jpeg|svg|webp|mp3|ico)$/i.test(url.pathname);

  if (isBeeld) {
    // Beeld en geluid: eerst uit de cache
    e.respondWith(
      caches.match(req).then((hit) =>
        hit || fetch(req).then((res) => {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put(req, kopie));
          return res;
        })
      )
    );
    return;
  }

  // Pagina's: eerst het netwerk, cache als terugval
  e.respondWith(
    fetch(req)
      .then((res) => {
        const kopie = res.clone();
        caches.open(CACHE).then((c) => c.put(req, kopie));
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('/')))
  );
});
