$(function(){
    $('#container').click(function(){
        $('.icon').toggleClass('close');

        if($('.icon').hasClass('close')){
            $('.modal-wrapper').fadeIn();
        }else{
            $('.modal-wrapper').fadeOut();
        }
    })

    $('.modal-bg-close').click(function(){
        $('.modal-wrapper').fadeOut();
        $('.icon').toggleClass('close');
    })
});