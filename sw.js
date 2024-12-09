const CACHE_NAME = "site-cache-v1";
const ASSETS = [
  "/", // Página inicial
  "/index.html", // Adicione os principais arquivos do seu site
  "/styles.css", // Exemplo de CSS
  "./src/js/index.js", // Exemplo de JavaScript
];

// Instalar o cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Arquivos adicionados ao cache");
      return cache.addAll(ASSETS);
    })
  );
});

// Ativar o service worker e limpar caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cache antigo removido:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptar solicitações de rede
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
