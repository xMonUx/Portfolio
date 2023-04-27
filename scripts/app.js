
//=============================
// Navbar || socials show/hide > 550px
//=============================

window.addEventListener('scroll', function() {
  const arrow = document.querySelector('.content__hero-arrow');
  const socials = document.querySelector('.content__social-links');

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

});

// let timer;
// let isIdle = false;
// const idleTime = 2000; //czas bezczynności, po którym funkcja zostanie wykonana

// window.addEventListener('scroll', function() {
//   const navbar = document.querySelector('.content__navbar');
//   const arrow = document.querySelector('.content__hero-arrow');
//   const socials = document.querySelector('.content__social-links');

//   if (this.window.pageYOffset > 350) {
//     navbar.classList.remove('content__navbar--hide');
//   } else {
//     navbar.classList.add('content__navbar--hide');
//   }

//   if (this.window.pageYOffset > 350) {
//     arrow.classList.add('arrowHide');
//   } else {
//     arrow.classList.remove('arrowHide');
//   }

//   if (this.window.pageYOffset > 400) {
//     socials.classList.remove('content__social-links--hide');
//   } else {
//     socials.classList.add('content__social-links--hide');
//   }

//   clearTimeout(timer);
//   if (!isIdle) {
//     timer = setTimeout(function() {
//       navbar.classList.add('content__navbar--hide');
//       isIdle = true;
//     }, idleTime);
//   }
// });

// //restart timera gdy użytkownik jest aktywny
// window.addEventListener('mousemove', function() {
//   const navbar = document.querySelector('.content__navbar');

//   if (isIdle) {
//     navbar.classList.remove('content__navbar--hide');
//     isIdle = false;
//     clearTimeout(timer);
//     timer = setTimeout(function() {
//       navbar.classList.add('content__navbar--hide');
//       isIdle = true;
//     }, idleTime);
//   }
// });

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
// const button = document.querySelector('.page__loader--button');
// const body = document.querySelector('body');
// const pageLoader = document.querySelector('.page__loader');
// const circleAnimate = document.querySelector('.page__loader--background');

// let clicked = false;

// button.addEventListener("click", () => {
//   clicked = true;
//   body.classList.add("loaded");
//   pageLoader.classList.add("page__loader--animate");
//   circleAnimate.classList.add("loader__circle--animate");
//   body.style.overflow = "auto";

//   setTimeout(() => {
//   pageLoader.style.display = "none";
//     }, 1000);
// });

// setTimeout(() => {
//   if (!clicked) {
//     body.classList.add("loaded");
//     pageLoader.classList.add("page__loader--animate");
//     circleAnimate.classList.add("loader__circle--animate");
//     body.style.overflow = "auto";

//     setTimeout(() => {
//         pageLoader.style.display = "none";
//     }, 1000);
//   }
// }, 2000);


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

//=============================
// ScrollReveal
//=============================
window.sr = ScrollReveal({ reset: true });

sr.reveal('.content__about', { 
  viewFactor: 0.7,
  duration: 1000
});

sr.reveal('.content__hero', { 
  viewFactor: 0.7,
  duration: 1000
});

//=============================
// MixItUp
//=============================
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


//=============================
// ProgressBar.js
//=============================
function createProgressBar(skill) {
  return new ProgressBar.Circle(skill, {
    color: '#f6f3ed',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: { autoStyleContainer: false },
    from: { color: 'rgb(0,255,0)', width: 1 },
    to: { color: 'rgb(255,0,255)', width: 2 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      circle.setText(value === 0 ? '' : value + '%');
    },
  });
}

var bar1 = createProgressBar(skill12);
var bar2 = createProgressBar(skill13);
var bar3 = createProgressBar(skill14);
var bar4 = createProgressBar(skill15);
var bar5 = createProgressBar(skill16);
var bar6 = createProgressBar(skill17);

//=============================
// Zdog
//=============================

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
  onDragEnd: function() {
    isSpinning = true;
  },
});

let anchor = new Zdog.Anchor({
  addTo: illo,
  // uniform scale, will be okay
  scale: 2,
});

new Zdog.Shape({
  addTo: illo,
  path: [ // triangle
    { x:   -40, y: 40 },
    { x:  0, y:  -40 },
    { x: 40, y:  40 },
    
  ],
  closed: false,
  stroke: 10,
  color: '#8A2387'
});

new Zdog.Shape({
  addTo: illo,
  path: [ // triangle
    { x:   55, y: 35 },
    { x:  100, y:  -40 },
    { x: 15, y:  -40 },
    
  ],
  closed: false,
  stroke: 10,
  color: '#c94b4b'
});

function animate() {
  illo.rotate.y += isSpinning ? 0.02 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


//=============================
// Waypoints
//=============================

var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function(direction) {
    bar1.animate(0.94)
    bar2.animate(0.87)
    bar3.animate(0.64)
    bar4.animate(0.69)
    bar5.animate(0.57)
    bar6.animate(0.82)
  }
})

