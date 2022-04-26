$(function(){
    
    

    $(document).on('click',function(e) {
        if(!$(e.target).closest('.serch-box').length) {
            $('#input').animate({
                'width':'0'
            });

            $('.serch-box').css('border','none');
        } else {
            $('#input').animate({
                'width':'180px'
            },500);
    
            $('.serch-box').css('border','solid 1px #666');
        }
     });

     $('.toggle-icon').click(function(){
         var push=$('#nav-container');
         var modal=$('.nav-modal-wrapper');
        push.toggleClass('pushed');
        if(push.hasClass('pushed')){
            modal.fadeIn();
        }else{
            modal.fadeOut();
        }
     });


});