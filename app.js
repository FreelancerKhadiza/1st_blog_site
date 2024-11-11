<script id="script" type="text/Javascript" >

   (function($){
      $(document).ready(function(){
          
      $(".fast-menu a").click(function(){
             
     $(".second-menu ul li").slideToggle();
             
         })
      })
       
   })(jQuery)    
    


   (function($){
        $(document).ready(function(){
          
            $(".third-menu a").click(function(){
                
            $(".fore-menu ul").slideToggle();
             
        })
    })
       
   })(jQuery)    
    



  (function($){ 
      
      $('.to-top a').click(function(){
      $('html, body').animate({'scrollTop':0},1000);
       
      return false;  
          
      });
        
      $(window).scroll(function(){
          if($(window).scrollTop() > 600){
              $('.to-top a').fadeIn(1000);
          }else{
              $('.to-top a').fadeOut(1000);
          };
  
       });
      
       
   })(jQuery);  
    
</script>
