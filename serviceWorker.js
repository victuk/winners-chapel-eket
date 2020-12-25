const staticDevCoffee = "dev-coffee-site-v1";

const assets = [
    "/",
    "/index.html",
    "announcements.html",
    "house-fellowship-list.html",
    "css",
    "js",
    "images",
    "/css/style.css"
  ]
  
  self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })