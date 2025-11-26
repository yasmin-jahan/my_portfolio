$(document).ready(function () {

  if ($(".typing").length) {
    var typed = new Typed(".typing", {
      strings: ["Frontend Developer", "Web Developer", "Wordpress Developer"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true
    });
  }

  // Counter
  $('.inner-counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.inner-counter').addClass('animated fadeInDownBig');
  $('.counter_content h3').addClass('animated fadeIn');

  //  MatchHeight
  function MatchHeight() {
    $('.portfolio_text p').matchHeight();
    $('.portfolio_text h3').matchHeight();
  }
  MatchHeight();

  //  Hamburger menu toggle
  $(".toggle_btn").click(function () {
    $(".sidebar").addClass('mobile');
    $(".overlay").fadeIn();
  });

  $(".cross, .overlay").click(function () {
    $(".sidebar").removeClass('mobile');
    $(".overlay").fadeOut();
  });

  // scroll
 let btn = $('.button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  // function MatchHeight() {
  //   $('.portfolio_text h3').matchHeight({});
  // }
  // MatchHeight(); 

});
