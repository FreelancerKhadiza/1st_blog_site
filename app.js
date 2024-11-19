(function ($) {
    'use strict';



    $(document).ready(function () {

        $(".third-menu a").click(function () {

            $(".fore-menu ul").slideToggle();

        })

    })

    $(document).ready(function () {

        $(".fast-menu a").click(function () {

            $(".second-menu ul li").slideToggle();

        })

    })


    $('.to-top a').click(function () {
        $('html, body').animate({ 'scrollTop': 0 }, 1000);

        return false;

    })


    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.to-top a').fadeIn(1000);
        }else{
            $('.to-top a').fadeOut(1000);
        };
    
    }); 


    // // Sticky Menu
    // $(window).scroll(function () {
    //     if ($('.navigation').offset().top > 100) {
    //         $('.navigation').addClass('nav-bg');
    //     } else {
    //         $('.navigation').removeClass('nav-bg');
    //     }
    // });



})(jQuery);
