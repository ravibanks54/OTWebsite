$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover( //Finds the caption and hovers into picture
        function(){
            $(this).find('.caption').fadeIn(100); 
        },
        function(){
            $(this).find('.caption').fadeOut(100);
        }
    ); 
});