
//=============================
// Navbar show/hide > 550px
//=============================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.content__navbar');
  const arrow = document.querySelector('.content__header-arrow');
  if (this.window.pageYOffset > 550) { //Ilość pikseli po których pojawi się navbar
    navbar.classList.remove('content__navbar--hide');
    
  } else {
    navbar.classList.add('content__navbar--hide');
  }

  if (this.window.pageYOffset > 350) {
    arrow.classList.add('arrowHide');
  } else {
    arrow.classList.remove('arrowHide');
  }

});

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
});

setTimeout(() => {
  if (!clicked) {
    body.classList.add("loaded");
    pageLoader.classList.add("page__loader--animate");
    circleAnimate.classList.add("loader__circle--animate");
    body.style.overflow = "auto";
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
  particlesJS("header__particles", {
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

