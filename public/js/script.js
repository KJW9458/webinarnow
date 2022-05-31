$(document).ready(function () {
    // header scroll
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50) {
                $(".main_header").addClass("header_fixed");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".main_header").removeClass("header_fixed");
            }
        });
    });


    // aside 메뉴
    $('.ham').on('click', function () {
        $('aside').show();
        $('aside').show().animate({
            right: 0
        });
    });

    $('.w_ham').on('click', function () {
        $('aside').show();
        $('aside').show().animate({
            right: 0
        });
    });
    
    $('aside button').on('click', function () {
        $('aside').hide();
        $('aside').animate({
            right: '-' + 100 + '%'
        }, function () {
            $('aside').hide();
        });
    });

    
    // 서브 슬라이드
    var swiper = new Swiper("#sub_wrap .mySwiper", {
        pagination: {
            el: '#sub_wrap .swiper-pagination',
            clickable: true,
          },
        loop: true,
        autoplay : {  
            delay : 3000, 
            disableOnInteraction : false, 
        },
        navigation: {
            nextEl: "#sub_wrap .swiper-button-next",
            prevEl: "#sub_wrap .swiper-button-prev",
        },
    });

    
})