// Service worker de Oliva PDF: guarda la app en el navegador para que funcione sin conexión una vez instalada.
// Al publicar una versión nueva, cambia VERSION para que los usuarios reciban los archivos actualizados.
const VERSION = 'oliva-pdf-1.2.0';
const APP = [
  './', 'index.html', 'manifest.webmanifest',
  'vendor/pdf.min.js', 'vendor/pdf.worker.min.js', 'vendor/pdf-lib.min.js', 'vendor/fontkit.umd.min.js',
  'icons/app-192.png', 'icons/app-512.png', 'icons/app-maskable-192.png', 'icons/app-maskable-512.png', 'icons/documento-256.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Archivos propios: primero la copia guardada (rápido y sin conexión) y se actualiza en segundo plano.
// Otros orígenes (fuentes, OCR, ZIP) van directo a la red.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request).then(res => {
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    }).catch(() => null);
    return cached || (await network) || cache.match('index.html');
  }));
});
