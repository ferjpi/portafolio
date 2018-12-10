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

// llamado para el boton de menu mobile
const btn = document.querySelector('#btn')
// Llamado al menu mobile
const mb = document.querySelector('#menu-mobile')
// Llamado a las lineas que conforman el boton
const btnMenu = document.querySelectorAll('.btn-menu')

btn.addEventListener('click', () => {
  // layout.classList.add('layout--active')
  mb.style.display = 'flex'
  const sm = btn.classList.toggle('btn--close')
  if (sm) {
    ShowMenu()
    // Las lineas abajo cambian el color a blanco
    for (let i = 0; i<btnMenu.length; i++) {
      btnMenu[i].style.border = '2px solid #fff'
    }
  } else {
    closeMenu()
  }
})



function ShowMenu() {
  mb.style.animation = 'menuIn .4s ease-in-out forwards'
}

function closeMenu() {
  mb.style.animation = 'menuOut .4s ease-in-out forwards'
  // La lineas abajo restauran el color del boton a negro
  for (let i = 0; i<btnMenu.length; i++) {
  btnMenu[i].style.border = '2px solid #000'
  }
  setTimeout(()=>{
    btn.classList.remove('btn--close')
  },500)
  
}

// // Funcion para cerrar el menu mobile
// var subitemArray = Array.from(subitem)
// // subitemArray.forEach(el => {
// //   console.log(el)
// //   el.addEventListener('click', (e) => {
// //     e.preventDefault()
// //     console.log('click')
// //   })
// // })
// for (let i = 0; i<subitemArray.length; i++) {
//   let item = subitemArray[i]
//   item.addEventListener('click', (e) => {
//   return (closeMenu())    
//   })
// }