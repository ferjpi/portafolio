window.addEventListener("DOMContentLoaded", () => {
  if (window.navigator.appCodeName.includes("Safari")) {
    let artist = document.querySelector(".image--artista")
    artist.style.backgroundImage = "url('./img/artista.jpg')"
    let blog = document.querySelector(".image--blog")
    blog.style.backgroundImage = "url('../img/blog.jpg')"
    let cinema = document.querySelector(".image--cinema")
    cinema.style.backgroundImage = "url('../img/cinema.png')"
    let gelatos = document.querySelector(".image--gelatos")
    gelatos.style.backgroundImage = "url('../img/Gelato.png')"
    let pacho = document.querySelector(".image--pacho")
    pacho.style.backgroundImage = "url('../img/pacho.png')"
    let store = document.querySelector(".image--store")
    store.style.backgroundImage = "url('../img/store.png')"
  }
  console.log(window.navigator.appCodeName.includes("Safari"))
})
