  // $(window).on('scroll', function() {
  //   if ($(this).scrollTop() > 400) {
  //     $('.content__navbar').removeClass('content__navbar--hide');
  //   } else {
  //     $('.content__navbar').addClass('content__navbar--hide');
  //   }
  // });


//Loader strony
const button = document.querySelector('.page__loader--button');
const body = document.querySelector('body');
const pageLoader = document.querySelector('.page__loader');
const circleAnimate = document.querySelector('.page__loader--background')

button.addEventListener("click", () => {
  body.classList.add("loaded");
  pageLoader.classList.add("page__loader--animate");
  circleAnimate.classList.add("loader__circle--animate")

});
