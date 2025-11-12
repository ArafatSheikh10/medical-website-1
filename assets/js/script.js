$(document).ready(function(){

  $(".header_menu_cross").click(function(){
    $(".header_main_menu").removeClass("active")
  })
  $(".menu_trigger").click(function(){
    $(".header_main_menu").addClass("active");
  })

  $('.header_main_menu li a').click(function(){
    $('.header_main_menu li a').removeClass("active");
    $(this).addClass("active");
  });

  $('.view_all').click(function() {
    $('#hidden-options').slideToggle(400); 
  });

  $('select').niceSelect();

  $('.doctor_profile-card_wraper').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    dotsEach:true,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    edgeFriction: 0.05,
    infinite: true, 
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
  });

  // news_area-wraper - Only initialize on tablet/desktop (not mobile)
  function initNewsCarousel() {
    if ($(window).width() > 767) {
      if (!$('.news_area-wraper').hasClass('owl-loaded')) {
        $('.news_area-wraper').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          dots: true,
          dotsEach:true,
          autoplay:true,
          autoplayTimeout:2000,
          responsive:{
              768:{
                  items:2
              },
              992:{
                  items:2
              }
          }
        });
      }
    } else {
      // Destroy carousel on mobile
      if ($('.news_area-wraper').hasClass('owl-loaded')) {
        $('.news_area-wraper').trigger('destroy.owl.carousel');
        $('.news_area-wraper').removeClass('owl-carousel owl-loaded');
        $('.news_area-wraper').find('.owl-stage-outer').children().unwrap();
        $('.news_area-wraper').find('.owl-stage').children().unwrap();
      }
    }
  }
  
  // Initialize on page load
  initNewsCarousel();
  
  // Handle window resize
  $(window).on('resize', function() {
    initNewsCarousel();
  });

  // Testiomonial Area Start

  $('.testiomonial_wraper').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
    }
  });


});


const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      accordionButtons.forEach(b => {
        const icon = b.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        }
      });

      const icon = btn.querySelector('i');
      setTimeout(() => {
        if (!btn.classList.contains('collapsed')) {
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
        }
      }, 200); 
    });
});

