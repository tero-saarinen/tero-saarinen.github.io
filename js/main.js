$(document).ready(function(){

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    setTimeout(function() { hideCurtain() }, 1000);

});

function hideCurtain() {
    $('.top-curtain').animate({ left: '100vw' }, 400, 'swing');
    $('.bottom-curtain').animate({ left: '-100vw' }, 
        { 
            duration: 400,
            easing: 'swing',
            complete: function() {
                $('.loading').css('display','none');
                $('html, body').css({
                    overflow: 'auto',
                    height: 'auto'
                });
            }
        });
}   


// Click event to scroll to top
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

$('.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -58
    }, 500);
    return false;
});

$('.overlay').click(function(){
  // action goes here!!
  //alert('yooooo');
  $('body').css('overflow', 'hidden');
});

$('.scroll-on').click(function(){
  // action goes here!!
  // alert('SCROLL ONNNNN');
  $('body').css('overflow', 'auto');
});