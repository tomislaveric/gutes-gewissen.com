$(document).ready(function () {
    $('#cta-bar').hide();
    handleVisibility()
});
$(window).scroll(function () {
    handleVisibility()
});

function handleVisibility() {
    if (!$('#productCta').length) { return; }
    if ($(this).scrollTop() > $('#productCta').offset().top) {
        $('#cta-bar').slideDown();
    } else {
        $('#cta-bar').slideUp();
    }
}