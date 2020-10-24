(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Menu Trigger
        $('.menu-trigger').on('click', function () {
            $('.mobile-menu').slideToggle();
        });

        $('.play-video').magnificPopup({
            type: 'iframe'
        });

        // Cookie 
        $(".cookie .btn-dark").on("click", function (e) {
            e.preventDefault();
            $(".cookie").addClass("d-none");
        });

        // Owl Carousel

        $('.transform-engineer-carousel').owlCarousel({
            items: 3,
            margin: 30,
            loop: false,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }

            }
        });
        $('.feature-carousel1').owlCarousel({
            items: 1,
            loop: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: true,
            animateOut: "fadeOut"
        });
        $('.feature-carousel1 .bordered-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel1');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.feature-carousel1 .boxed-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel1');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel');
        });

        $('.feature-carousel2').owlCarousel({
            items: 1,
            loop: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            animateOut: "fadeOut"
        });
        $('.feature-carousel2 .bordered-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel2');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.feature-carousel2 .boxed-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel2');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel');
        });
        $('.feature-carousel3').owlCarousel({
            items: 1,
            loop: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            animateOut: "fadeOut"
        });
        $('.feature-carousel3 .bordered-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel3');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.feature-carousel3 .boxed-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel3');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel');
        });
        $('.feature-carousel4').owlCarousel({
            items: 1,
            loop: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            animateOut: "fadeOut"
        });
        $('.feature-carousel4 .bordered-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel4');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.feature-carousel4 .boxed-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel4');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel');
        });
        $('.feature-carousel5').owlCarousel({
            items: 1,
            loop: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            animateOut: "fadeOut"
        });
        $('.feature-carousel5 .bordered-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel5');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.feature-carousel5 .boxed-btn').click(function (e) {
            e.preventDefault();
            var owl = $('.feature-carousel5');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel');
        });


    });


    jQuery(window).on("load", function () {

    });

})(jQuery);