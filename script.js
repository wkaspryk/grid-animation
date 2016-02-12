
$(document).ready(function() {
    $('.small').click(function() {
        $('.block').width(163).height(163);
        $('.controls p').css('padding-top', '0%');
    });
    $('.medium').click(function() {
        $('.block').width(256).height(256);
        $('.controls p').css('padding-top', '3%');
    });
    $('.large').click(function() {
        $('.block').width(356).height(356);
        $('.controls p').css('padding-top', '4.5%');
    });
    $('.full').click(function() {
        $('.block').width(1130).height(1130);
        $('.controls p').css('padding-top', '1.2%', 'font-size', '7.5rem');
    });
    $('button').click(function() {
        $(this).addClass("active").siblings().removeClass('active');
    });
});

$(window).on('load', function() {
    $('img').addClass(function() {
        if (this.height > this.width) {
            return 'portrait';
        }
    });
});

$(document).ready(function() {
    $('.controls p:last-child').click(function() {
        $(this).parent().next('.counter').css('display', 'block');
        // $('.counter span').text( Number($('.counter span').text()) + 5 );
        // var num = $('.counter span').text( parseInt($('.counter span').text()) + 2 );
    });
    $('.controls p:first-child').click(function() {
        $(this).parent().next('.counter').css('display', 'none');
    });
});