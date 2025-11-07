$(document).ready(function(){

  $(".header_menu_cross").click(function(){
    $(".header_main_menu").removeClass("active")
  })
  $(".menu_trigger").click(function(){
    $(".header_main_menu").addClass("active");
  })

  $('.header_main_right ul li a').click(function(){
    $('.header_main_right ul li a').removeClass("active");
    $(this).addClass("active");
  });

  $('.treatment_area_card_wraper').owlCarousel({
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
        567:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })

  // client_reviews_content_wraper
  $('.client_reviews_content_wraper').owlCarousel({
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
  })

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

