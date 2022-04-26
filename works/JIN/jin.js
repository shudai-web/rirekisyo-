$(function(){

    $('.menu-item').hover(
        function(){
            $(this).animate({
                'top':'-5px'
            },200);
        },
        function(){
            $(this).animate({
                'top':'0'
            },200);
        }
    );

    $('.number').hover(
        function(){
            $(this).animate({
                'top':'-3px'
            },200);
        },
        function(){
            $(this).animate({
                'top':'0'
            },200);
        }
    );

    $('.category-list-item').hover(
        function(){
            $(this).animate({
                'margin-left':'5px'
            },200);
        },
        function(){
            $(this).animate({
                'margin-left':'0'
            },200);
        }
    );


    $('.menu-img').addClass('col-12');
    $('.menu-text').addClass('col-12');

    $('.icon').hover(
        function(){
            $('.fa-angle-up').animate({
                'top':'-5px'
            },200);
        },
        function(){
            $('.fa-angle-up').animate({
                'top':'0'
            },200);
        }
    );

    $('.icon').click(function(){
        $('html,body').animate({
            'scrollTop':'0'
        },'slow');
    });

    $(window).scroll(function(){
        var elempos=$('#scroll').offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
            if(scroll>elempos-windowHeight+100){
                $('.icon').fadeIn(1000);
            }else{
                $('.icon').fadeOut(1000);
            }
    });

    $('head').append(
        '<style>header, .main, footer, .nav, .icon{display:none;}'
        );
        $(window).on("load", function() {
        $('header,.main,footer, .nav').delay(600).fadeIn("slow");
            
        });


    
});