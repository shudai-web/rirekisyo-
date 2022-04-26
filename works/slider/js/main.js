$(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      fade: true,
      autoplay: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    $('.item').click(function(){
      var imgSrc = $(this).children().attr('src');
      $('.item-modal').children().attr('src',imgSrc);
      $('.item-modal-wrapper').fadeIn();
      $('body,html').css('overflow-y','hidden');
    });

    $('.item-bg-close').click(function(){
      $('.item-modal-wrapper').fadeOut();
      $('body,html').css('overflow-y','visible');
    });


    $('#scroll1').click(function(){
      let about = $('#about').offset().top;
      $('html,body').animate({scrollTop:about},'swing');
    });

    $('#scroll2').click(function(){
      let sightseeing = $('#sightseeing').offset().top;
      $('html,body').animate({scrollTop:sightseeing},'swing');
    });

    $('#scroll3').click(function(){
      let food = $('#food').offset().top;
      $('html,body').animate({scrollTop:food},'swing');
    });

    $('#scroll4').click(function(){
      let acces = $('#acces').offset().top;
      $('html,body').animate({scrollTop:acces},'swing');
    });

    var fadeIn = $('.fade-in');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
  });