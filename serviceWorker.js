const staticPlayas = "playas-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/playa-1.jpg",
    "/images/playa-2.jpg",
    "/images/playa-3.jpg",
    "/images/playa-4.jpg",
    "/images/playa-5.jpg",
    "/images/playa-6.jpg",
    "/images/playa-7.jpg",
    "/images/playa-8.jpg",
    "/images/playa-9.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPlayas).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
})