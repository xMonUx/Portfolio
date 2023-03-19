$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.hide-socials').stop().animate({opacity: 0}, 200);
    } else {
        $('.hide-socials').stop().animate({opacity: 1}, 200);
    }
});

// $(document).ready(function() {
  
//     var counter = 0;
//     var c = 0;
//     var i = setInterval(function(){
//         $(".loader .counter h1").html(c + "%");
//         $(".loader .counter hr").css("width", c + "%");

//       counter++;
//       c++;
        
//       if(counter == 101) {
//           clearInterval(i);
//           $(".loader").fadeOut("slow");
//           setTimeout(function() {
//               $("body").addClass("loaded");
//           }, 500);
//       }
//     }, 10);
//   });


window.console = window.console || function(t) {};
  
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
  
  (function($) {
    "use strict";
  
    var $navbar = $(".navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 350) {
          $navbar.addClass("fixed");
        } else {
          $navbar.removeClass("fixed");  
        }
    });

})(jQuery, undefined);

$(".menu").click(function(){
  $("#nav").toggleClass("open");
});


