$(document).ready(function () {
    $('#ctaBar').hide();
});

$(window).scroll(function () {
    if (!$('#productCta').length) { return; }

    if ($(this).scrollTop() > $('#productCta').offset().top) {
        $('#ctaBar').slideDown();
        var ctaBarHeight = $('#ctaBar').height();
        $('#footer').css("margin-bottom", ctaBarHeight + 'px');
    } else {
        $('#ctaBar').slideUp();
    }
});

function reachedEnd() {
    return ($(window).innerHeight() - window.innerHeight) <= window.scrollY;
}