const CACHE_NAME = "idiomas-app-v23";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./curriculum-a1-it.js",
  "./curriculum-a1-en.js",
  "./curriculum-a1-pt.js",
  "./curriculum-a1-es.js",
  "./curriculum-a1-fr.js",
  "./curriculum-a1-de.js",
  "./curriculum-a1-zh.js",
  "./curriculum-a1-ja.js",
  "./curriculum-a1-ar.js",
  "./curriculum-a1-hi.js",
  "./curriculum-a2-it.js",
  "./curriculum-a2-other.js",
  "./curriculum-b1.js",
  "./curriculum-b2-c2.js",
  "./learning-resources.js",
  "./script.js",
  "./manifest.json",
  "./logo-sp-idiomas-192.png",
  "./logo-sp-idiomas-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("idiomas-app-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match(request).then((cachedPage) =>
        cachedPage || caches.match("./index.html").then((appShell) => appShell || fetch(request))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedAsset) => cachedAsset || fetch(request))
  );
});
