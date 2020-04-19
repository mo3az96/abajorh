$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    $('.cats-btn').click(function () {
        $(".cats-dispaly").slideToggle("500");
        $(".cats-btn").toggleClass("open");
        $(".mo-overlay").fadeToggle(500);
        $('body').toggleClass("overflow");
        if ($(window).width() <= 767) {
            $(".mo-overlay").hide();
            $('body').addClass("overflow");
        }
    });
    $('.mo-overlay').click(function () {
        $(".cats-dispaly").slideUp("500");
        $(".cats-btn").removeClass("open");
        $(".mo-overlay").fadeOut(500);
        $('body').removeClass("overflow");
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],

    });
    /////////cats Slider/////////
    $('.cats-slider').owlCarousel({
        items: 7,
        margin: 26,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            }
        }
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        autoplay: false,
        margin: 33,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    if ($(window).width() <= 767) {
        $(".level-2-link").addClass("mo-accordion");
        $(".sub-cat").addClass("mo-panel");
        /////////////////////////////////////////////////
        $('.mo-search-icon').click(function () {
            $(".search-cont").addClass("search-in");
            $(".mo-overlay").fadeIn(300);
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.mo-overlay').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("search-in");
            $(".mo-overlay").fadeOut(300);
        });
        /////////////////////////////////////////////////////
        $('.mo-menu-icon').click(function () {
            $(".nav-cont").fadeIn(400);
            $("nav").addClass("nav-in");
            $("body").addClass("overflow");
            $('.lang').addClass("lang-in");
        });

        $('.nav-cont').click(function () {
            $(".nav-cont").fadeOut(400);
            $("nav").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('nav').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".nav-cont").fadeOut(400);
            $("nav").removeClass("nav-in");
            $("body").removeClass("overflow");
            $(".lang").removeClass("lang-in");
        });
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
        } else {
            $(this).siblings().css('max-height', '0');
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
    });


    $("nav").scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".lang").hide();
        } else {
            $(".lang").show();
        }
    });
});