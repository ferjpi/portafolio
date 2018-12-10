window.onload = function () {
  const easeInCubic = function (t) { return t * t * t }
  const scrollElems = document.getElementsByClassName('menu__subitem')

  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = stamp - start
    let progress = runtime / duration
    const ease = easeInCubic(progress)

    progress = Math.min(progress, 1)

    // const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease)
    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease))

    if (runtime < duration) {
      requestAnimationFrame(() => {
        const stamp = new Date().getTime()
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset)
      })
    }
  }

  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i]

    elem.addEventListener('click', function (e) {
      e.preventDefault()
      const scrollElemId = e.target.href.split('#')[1]

      const scrollEndElem = document.getElementById(scrollElemId)

      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime()
        const duration = 1200
        const start = stamp

        const startScrollOffset = window.pageYOffset

        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top

        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset)
      })

      // Cerrar el menu mobile si se encuentra activo
      if (window.screen.width <= 760) {
        closeMenu()
      }
    })
  }
}
