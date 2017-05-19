$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').fadeIn(100); //.fadeIn(250) .slideDown
        },
        function(){
            $(this).find('.caption').fadeOut(100); //.fadeOut(205) .slideUp
        }
    ); 
});