
var typed = new Typed(".typing",{
    strings:[ "Frontend Developer" , "Web Developer" , "Wordpress Developer"],
    typeSpeed:100,
    backSpeed:40,
    loop:true
});
$(document).ready (function (){

// counter
$('.inner-counter').counterUp({
  delay: 10,
  time: 2000
});
$('.inner-counter').addClass('animated fadeInDownBig');
$('.counter_content h3').addClass('animated fadeIn');


  // Apply matchHeight to elements with class "work_text"
  function MatchHeight() {
    $('.portfolio_text p').matchHeight();
  }

  // Call the function
  MatchHeight();



  $(".c-theme-switch").on("click", () => {
  $("body").toggleClass("ui-light-theme");
});



// scroll
 $(document).ready(function() {
  let header = $('.hamburger_menu_section ');
  let lastScrollTop = 0;

  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();
    
    if (scrollTop > 50) {
      header.css('top', '0'); // Show header
    } else {
      header.css('top', '-70px'); // Hide header
    }
  });
});

// menu 
 



  $(".toggle_btn").click(function() {
    $(".sidebar").addClass('mobile_active');
    $(".overlay").fadeIn();  
  });
  
  $(".cross").click(function() {
    $(".sidebar").removeClass('mobile_active' );
    $(".overlay").fadeOut();
  
  });
  $(".overlay").click(function () {
  $(".sidebar").removeClass('mobile_active');
  $(".overlay").fadeOut();
  });





});


