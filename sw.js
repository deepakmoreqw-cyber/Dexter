/* Service worker: lets the app open offline after the first visit (PWA) */
const CACHE = "elnino-mitra-v1";
const FILES = ["./", "index.html", "css/style.css", "js/data.js", "js/app.js",
  "images/hero.jpg", "images/pond.jpg", "images/drip.jpg", "images/icon-192.png", "manifest.json"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
