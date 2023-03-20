  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 400) {
      $('.content__navbar').removeClass('content__navbar--hide');
    } else {
      $('.content__navbar').addClass('content__navbar--hide');
    }
  });


document.addEventListener("DOMContentLoaded", function() {
  var pr = document.querySelector('.arrows__arrow--left');
  var pl = document.querySelector('.arrows__arrow--right');

  if (pr) {
    pr.onclick = slide.bind(this, -1);
  }

  if (pl) {
    pl.onclick = slide.bind(this, 1);
  }

  var index = 0, total = 3; //liczba stron

  function slide(offset) {
    index = Math.min(Math.max(index + offset, 0), total -1);

    document.querySelectorAll('.arrows__counter').innerHTML = (index + 1) + '/' + total;

    if (pr) {
      pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
    }

    if (pl) {
      pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
    }
  }

  slide(0);
});