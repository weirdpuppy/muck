$(function () {
    $('img').bind('contextmenu', function (e) {
        return false;
    });
});

$(document).ready(function () {

    $(".nav-btn").click(function (event) {
        $("#nav").animate({
            "right": "0px"
        }, "slow").addClass('visible');

    });

    $(".nav-close").click(function (event) {
        $("#nav").animate({
            "right": "-9999px"
        }, "slow").removeClass('visible');

    });

    $(".panel").click(function (event) {
        $(this).toggleClass('fullsize');
        $(this).toggleClass('modal');
        $("body").toggleClass('modal-open');
    });

});
