
//=============================
// Navbar || socials show/hide > 550px
//=============================

let timer;
let isIdle = false;
const idleTime = 2000; //czas bezczynności, po którym funkcja zostanie wykonana

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.content__navbar');
  const arrow = document.querySelector('.content__hero-arrow');
  const socials = document.querySelector('.content__social-links');

  if (this.window.pageYOffset > 350) {
    navbar.classList.remove('content__navbar--hide');
  } else {
    navbar.classList.add('content__navbar--hide');
  }

  if (this.window.pageYOffset > 350) {
    arrow.classList.add('arrowHide');
  } else {
    arrow.classList.remove('arrowHide');
  }

  if (this.window.pageYOffset > 400) {
    socials.classList.remove('content__social-links--hide');
  } else {
    socials.classList.add('content__social-links--hide');
  }

  clearTimeout(timer);
  if (!isIdle) {
    timer = setTimeout(function() {
      navbar.classList.add('content__navbar--hide');
      isIdle = true;
    }, idleTime);
  }
});

//restart timera gdy użytkownik jest aktywny
window.addEventListener('mousemove', function() {
  const navbar = document.querySelector('.content__navbar');

  if (isIdle) {
    navbar.classList.remove('content__navbar--hide');
    isIdle = false;
    clearTimeout(timer);
    timer = setTimeout(function() {
      navbar.classList.add('content__navbar--hide');
      isIdle = true;
    }, idleTime);
  }
});

// =============================
// Refresh page scroll on top
// =============================
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

//=============================
// Page Loader
//=============================
const button = document.querySelector('.page__loader--button');
const body = document.querySelector('body');
const pageLoader = document.querySelector('.page__loader');
const circleAnimate = document.querySelector('.page__loader--background');

let clicked = false;

button.addEventListener("click", () => {
  clicked = true;
  body.classList.add("loaded");
  pageLoader.classList.add("page__loader--animate");
  circleAnimate.classList.add("loader__circle--animate");
  body.style.overflow = "auto";

  setTimeout(() => {
  pageLoader.style.display = "none";
    }, 1000);
});

setTimeout(() => {
  if (!clicked) {
    body.classList.add("loaded");
    pageLoader.classList.add("page__loader--animate");
    circleAnimate.classList.add("loader__circle--animate");
    body.style.overflow = "auto";

    setTimeout(() => {
        pageLoader.style.display = "none";
    }, 1000);
  }
}, 2000);

//=============================
// Navbar hamburger menu toggle
//=============================
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.content__navbar--collapse');
  const hamburgerActive = document.querySelector('.content__navbar--collapsed')  

  let isHamburgerActive = false;

  hamburger.addEventListener("click", function() {
    if (!isHamburgerActive) {
      hamburgerActive.classList.add('active');
      hamburgerActive.classList.remove('hidding');
      isHamburgerActive = true;
    } else {
      hamburgerActive.classList.add('hidding');
      isHamburgerActive = false;
      setTimeout(function() {
        hamburgerActive.classList.remove('active');
      }, 500);
    }
  });
});

//=============================
// Particles
//=============================
  particlesJS("hero__particles", {
    "particles": {
      "number": {
          "value": 110,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#8A2387"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#8A2387"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.6000850120433731,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 1,
          "random": true
      },
      "line_linked": {
          "enable": true,
          "distance": 220,
          "color": "#6a87d6",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 8,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 260,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 180,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
  });

// SCROLLREVEAL
window.sr = ScrollReveal({ reset: true });

sr.reveal('.content__about', { 
  viewFactor: 0.5,
  duration: 1000
});

sr.reveal('.content__projects', { 
  viewFactor: 0.5,
  duration: 1000
});

sr.reveal('.content__skills', { 
  viewFactor: 0.5,
  duration: 1000
});

// MixItUp
var projectList = document.querySelector('.content__projects--cards');

var mixer = mixitup(projectList, {
  selectors: {
    target: '.projects__card--item'
  },
  animation: {
    easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
    duration: 600
  }
});


var filterButtons = document.querySelectorAll('.projects__filters--item');
filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    var filterValue = this.getAttribute('data-filter');
    mixer.filter(filterValue);
    
    filterButtons.forEach(function(button) {
      button.classList.remove('active-filter');
    });
    this.classList.add('active-filter');
  });
});