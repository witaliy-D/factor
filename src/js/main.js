/* eslint-env jquery*/
$(function () {
  const expertSlider = $('#expert').owlCarousel({
    loop: true,
    items: 1
  });

  $('.services__expert-prev').on('click', function () {
    expertSlider.trigger('prev.owl.carousel');
  });

  $('.services__expert-next').on('click', function () {
    expertSlider.trigger('next.owl.carousel');
  });

  const preparationSlider = $('#preparation').owlCarousel({
    loop: true,
    items: 1
  });

  $('.services__preparation-prev').on('click', function () {
    preparationSlider.trigger('prev.owl.carousel');
  });

  $('.services__preparation-next').on('click', function () {
    preparationSlider.trigger('next.owl.carousel');
  });



  $('.accordion-item-header').on('click', function () {
    $(this).toggleClass('open');
    // $(this).closest('.accordion-item').toggleClass('active');
    $(this).siblings('.accordion-item-content').slideToggle();
  });
});




