$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.hide-socials').stop().animate({opacity: 0}, 200);
    } else {
        $('.hide-socials').stop().animate({opacity: 1}, 200);
    }
});

$(document).ready(function() {
  
    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $(".loader .counter h1").html(c + "%");
        $(".loader .counter hr").css("width", c + "%");

      counter++;
      c++;
        
      if(counter == 101) {
          clearInterval(i);
          $('body').addClass('loaded');
          $('.loader').fadeOut();
      }
    }, 10);
  });
