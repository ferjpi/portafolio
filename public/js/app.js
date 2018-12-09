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
}

var btn = document.querySelector('#btn');
var layout = document.querySelector('#layout');
var mb = document.querySelector('#menu-mobile');
var btnMenu = document.querySelectorAll('.btn-menu');
btn.addEventListener('click', function () {
  // layout.classList.add('layout--active')
  mb.style.display = 'flex';
  var sm = btn.classList.toggle('btn--close');

  if (sm) {
    ShowMenu();

    for (var i = 0; i < btnMenu.length; i++) {
      btnMenu[i].style.border = '2px solid #fff';
    }
  } else {
    closeMenu();
  }
});

for (var i = 0; i < subitem.length; i++) {
  subitem[i].addEventListener('click', function () {
    setTimeout(function () {
      closeMenu();
    }, 1000);
  });
}

function ShowMenu() {
  mb.style.animation = 'menuIn .4s ease-in-out forwards';
}

function closeMenu() {
  mb.style.animation = 'menuOut .4s ease-in-out forwards';

  for (var _i = 0; _i < btnMenu.length; _i++) {
    btnMenu[_i].style.border = '2px solid #000';
  }
}
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
      });
    });
  }
};