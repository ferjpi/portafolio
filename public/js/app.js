"use strict";

window.onscroll = function () {
  scrolling();
};

var menu = document.querySelector('#menu');
var sticky = menu.offsetTop;
var subitem = menu.querySelectorAll('.menu__subitem');
var items = menu.querySelectorAll('.menu__item');

var _loop = function _loop(i) {
  subitem[i].addEventListener('mouseover', function (e) {
    return items[i].classList.add('vibration');
  });
  subitem[i].addEventListener('mouseleave', function (e) {
    return items[i].classList.remove('vibration');
  });
};

for (var i = 0; i < subitem.length; i++) {
  _loop(i);
}

function scrolling() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add('menu--sticky');
  } else {
    menu.classList.remove('menu--sticky');
  }
} // llamado para el boton de menu mobile


var btn = document.querySelector('#btn'); // Llamado al menu mobile

var mb = document.querySelector('#menu-mobile'); // Llamado a las lineas que conforman el boton

var btnMenu = document.querySelectorAll('.btn-menu');
btn.addEventListener('click', function () {
  // layout.classList.add('layout--active')
  mb.style.display = 'flex';
  var sm = btn.classList.toggle('btn--close');

  if (sm) {
    ShowMenu(); // Las lineas abajo cambian el color a blanco

    for (var i = 0; i < btnMenu.length; i++) {
      btnMenu[i].style.border = '2px solid #fff';
    }
  } else {
    closeMenu();
  }
});

function ShowMenu() {
  mb.style.animation = 'menuIn .4s ease-in-out forwards';
}

function closeMenu() {
  mb.style.animation = 'menuOut .4s ease-in-out forwards'; // La lineas abajo restauran el color del boton a negro

  for (var i = 0; i < btnMenu.length; i++) {
    btnMenu[i].style.border = '2px solid #000';
  }

  setTimeout(function () {
    btn.classList.remove('btn--close');
  }, 500);
} // // Funcion para cerrar el menu mobile
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
"use strict";

window.addEventListener("DOMContentLoaded", function () {
  if (window.navigator.appCodeName.includes("Safari")) {
    var artist = document.querySelector(".image--artista");
    artist.style.backgroundImage = "url('./img/artista.jpg')";
    var blog = document.querySelector(".image--blog");
    blog.style.backgroundImage = "url('../img/blog.jpg')";
    var cinema = document.querySelector(".image--cinema");
    cinema.style.backgroundImage = "url('../img/cinema.png')";
    var gelatos = document.querySelector(".image--gelatos");
    gelatos.style.backgroundImage = "url('../img/Gelato.png')";
    var pacho = document.querySelector(".image--pacho");
    pacho.style.backgroundImage = "url('../img/pacho.png')";
    var store = document.querySelector(".image--store");
    store.style.backgroundImage = "url('../img/store.png')";
  }

  if (window.navigator.userAgent.includes("Safari")) {
    var _artist = document.querySelector(".image--artista");

    _artist.style.backgroundImage = "url('./img/artista.jpg')";

    var _blog = document.querySelector(".image--blog");

    _blog.style.backgroundImage = "url('../img/blog.jpg')";

    var _cinema = document.querySelector(".image--cinema");

    _cinema.style.backgroundImage = "url('../img/cinema.png')";

    var _gelatos = document.querySelector(".image--gelatos");

    _gelatos.style.backgroundImage = "url('../img/Gelato.png')";

    var _pacho = document.querySelector(".image--pacho");

    _pacho.style.backgroundImage = "url('../img/pacho.png')";

    var _store = document.querySelector(".image--store");

    _store.style.backgroundImage = "url('../img/store.png')";
  }

  if (window.navigator.platform !== "Win32") {
    var presupuesto = document.querySelector(".image--presupuesto");
    presupuesto.style.backgroundImage = "url('./img/money.jpg')";
    var despegando = document.querySelector(".image--despegando");
    despegando.style.backgroundImage = "url('./img/plane.jpg')";

    var _artist2 = document.querySelector(".image--artista");

    _artist2.style.backgroundImage = "url('./img/artista.jpg')";

    var _blog2 = document.querySelector(".image--blog");

    _blog2.style.backgroundImage = "url('../img/blog.jpg')";

    var _cinema2 = document.querySelector(".image--cinema");

    _cinema2.style.backgroundImage = "url('../img/cinema.png')";

    var _gelatos2 = document.querySelector(".image--gelatos");

    _gelatos2.style.backgroundImage = "url('../img/Gelato.png')";

    var _pacho2 = document.querySelector(".image--pacho");

    _pacho2.style.backgroundImage = "url('../img/pacho.png')";

    var _store2 = document.querySelector(".image--store");

    _store2.style.backgroundImage = "url('../img/store.png')";
  }
});
"use strict";

var heart = document.querySelector('#heart');
var cuadro = document.querySelectorAll('.c');
heart.addEventListener('mouseover', function () {
  for (var i = 0; i < cuadro.length; i++) {
    cuadro[i].classList.add('desvanecer');
    cuadro[i].classList.remove('aparecer');
  }
});
heart.addEventListener('mouseout', function () {
  for (var i = 0; i < cuadro.length; i++) {
    cuadro[i].classList.remove('desvanecer');
    cuadro[i].classList.add('aparecer');
  }
});
"use strict";

window.onload = function () {
  var easeInCubic = function easeInCubic(t) {
    return t * t * t;
  };

  var scrollElems = document.getElementsByClassName('menu__subitem');

  var scrollToElem = function scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
    var runtime = stamp - start;
    var progress = runtime / duration;
    var ease = easeInCubic(progress);
    progress = Math.min(progress, 1); // const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease)

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);

    if (runtime < duration) {
      requestAnimationFrame(function () {
        var stamp = new Date().getTime();
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  };

  for (var i = 0; i < scrollElems.length; i++) {
    var elem = scrollElems[i];
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var scrollElemId = e.target.href.split('#')[1];
      var scrollEndElem = document.getElementById(scrollElemId);
      var anim = requestAnimationFrame(function () {
        var stamp = new Date().getTime();
        var duration = 1200;
        var start = stamp;
        var startScrollOffset = window.pageYOffset;
        var scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      }); // Cerrar el menu mobile si se encuentra activo

      if (window.screen.width <= 760) {
        closeMenu();
      }
    });
  }
};