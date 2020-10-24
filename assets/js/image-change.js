;(function ($) {
    jQuery(document).ready(function ($) {
        $(".black-image1").on("click", function () {
            $(this).addClass("d-none");
            $(".black-image2").removeClass("d-none");
            $(".black-box-image p").addClass("d-none");

        });
        $(".black-image2").click(function () {
            $(".black-image2").removeClass("d-block").addClass("d-none");
            $(".black-image3").addClass("d-block").removeClass("d-none");
            $(".black-box-image p").addClass("d-none");
        });
        $(".black-image3").click(function () {
            $(".black-image3").removeClass("d-block").addClass("d-none");
            $(".black-image2").addClass("d-block").removeClass("d-none");
            $(".black-box-image p").addClass("d-none");
        });

        $(".black-box-image a").on("click", function (e) {
            e.preventDefault();
            $(".black-box-image p").addClass("d-none");

            $(".black-image1").addClass("d-none").removeClass("d-block");
            $(".black-image2").addClass("d-block").removeClass("d-none");

        });

    });
})(jQuery);