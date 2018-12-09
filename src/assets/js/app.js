window.onscroll = function () { scrolling() }
const menu = document.querySelector('#menu')
const sticky = menu.offsetTop
const subitem = menu.querySelectorAll('.menu__subitem')
const items = menu.querySelectorAll('.menu__item')

for (let i = 0; i < subitem.length; i++) {
  subitem[i].addEventListener('mouseover', (e) => {
    return (
      items[i].classList.add('vibration')
    )
  })
  subitem[i].addEventListener('mouseleave', (e) => {
    return (
      items[i].classList.remove('vibration')
    )
  })
}

function scrolling () {
  if (window.pageYOffset >= sticky) {
    menu.classList.add('menu--sticky')
  } else {
    menu.classList.remove('menu--sticky')
  }
}


const btn = document.querySelector('#btn')
const layout = document.querySelector('#layout')
const mb = document.querySelector('#menu-mobile')
const btnMenu = document.querySelectorAll('.btn-menu')

btn.addEventListener('click', () => {
  // layout.classList.add('layout--active')
  mb.style.display = 'flex'
  const sm = btn.classList.toggle('btn--close')
  if (sm) {
    ShowMenu()
    for (let i = 0; i<btnMenu.length; i++) {
      btnMenu[i].style.border = '2px solid #fff'
    }
  } else {
    closeMenu()
  }
})

for (let i = 0; i<subitem.length; i++) {
  subitem[i].addEventListener('click', () => {
    setTimeout(() => {
      closeMenu()
    },1000) 
  })
}

function ShowMenu() {
  mb.style.animation = 'menuIn .4s ease-in-out forwards'
}

function closeMenu() {
  mb.style.animation = 'menuOut .4s ease-in-out forwards'
  for (let i = 0; i<btnMenu.length; i++) {
    btnMenu[i].style.border = '2px solid #000'
  }
}