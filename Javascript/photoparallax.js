$(document).ready(function(){
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     var $scroll = $(this);
                     
      $(window).scroll(function() {                            
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // Background
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      });
   });  
}); 