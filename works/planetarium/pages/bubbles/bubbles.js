var parentsOpen = false,
    supportersOpen = false,
    contactOpen = false;

$(document).ready(function () {

    $('.bubble').css('margin-right', '-132px');
    $('.bubble img').css({
        'height': '24px',
        'margin-top': '54px'
    });

    inflate();

    $('.bubble').hover(function () {

        $(this).children('img').animate({
            'height': '153px',
            'margin-top': '-10px'
        }, 300);

    }, function () {

        $(this).children('img').animate({
            'height': '133px',
            'margin-top': '0'
        }, 300);

    });

    $('#parents').click(function () {
        if (parentsOpen) {
            $('#parents-menu').animate({
                'right': '-200px'
            }, 300);
            parentsOpen = false;
        } else {
            $('#parents-menu').animate({
                'right': '200px'
            }, 300);
            parentsOpen = true;
        }
    });
    
    $('#supporters').click(function () {
        if (supportersOpen) {
            $('#supporters-menu').animate({
                'right': '-200px'
            }, 300);
            supportersOpen = false;
        } else {
            $('#supporters-menu').animate({
                'right': '200px'
            }, 300);
            supportersOpen = true;
        }
    });
});

function inflate() {

    $('.bubble').each(function (i) {

        var elem = $(this);

        setTimeout(function () {
            elem.animate({
                'margin-right': '0'
            }, {
                duration: 1000
            });

            elem.children('img').animate({
                'height': '133px',
                'margin-top': '0px'
            }, {
                duration: 1000
            });
        }, 250 * i)
    });

}