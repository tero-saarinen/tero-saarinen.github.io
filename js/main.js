//Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},400);
    return false;
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        if (!$('.navbar').hasClass('expand')) {
            $('.navbar').addClass('expand');
        }
    } else {
        if ($('.navbar').hasClass('expand')) {
            $('.navbar').removeClass('expand');
        }
    }
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -58
    }, 500);
    return false;
});