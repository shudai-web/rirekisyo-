
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
$('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    $('.work-list').children().addClass('bgextend bgLRextendTrigger')
    $('.work-item').children().addClass('bgappear')
    $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
        }else{
            $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
        }
    });	
    $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
        }else{
            $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
        }
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });
});

      

