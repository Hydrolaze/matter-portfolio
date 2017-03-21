var parentsOpen = false,
    supportersOpen = false,
    contactOpen = false;

$(document).ready(function () {

    $('.bubble').css('margin-right', '-132px');
    $('.bubble img').css({
        'height': '24px',
        'margin-top': '54px'
    });
    $('.bubble-menu li').css({
        'margin-left': '-20px',
        'margin-right': '20px',
        'opacity': '0'
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
            bubbleMenuOut($('#parents-menu'));
            parentsOpen = false;
        } else {
            bubbleMenuIn($('#parents-menu'));
            parentsOpen = true;
        }
    });

    $('#supporters').click(function () {
        if (supportersOpen) {
            bubbleMenuOut($('#supporters-menu'));
            supportersOpen = false;
        } else {
            bubbleMenuIn($('#supporters-menu'));
            supportersOpen = true;
        }
    });

});

function bubbleMenuIn($elem) {
    $elem.children('li').each(function (i) {
        var $li = $(this);
        setTimeout(function () {
            $li.animate({
                'margin-left': '0px',
                'margin-right': '0px',
                'opacity': '1'
            }, {
                duration: 300,
                easing: 'easeOutCubic',
                queue: true
            });
        }, 250 * i);
    });

}

function bubbleMenuOut($elem) {
    $elem.children('li').each(function (i) {
        var $li = $(this);
        setTimeout(function () {
            $li.animate({
                'margin-left': '-20px',
                'margin-right': '20px',
                'opacity': '0'
            }, {
                duration: 300,
                easing: 'easeInCubic',
                queue: true
            });
        }, 250 * i);
    });
}

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
        }, 250 * i);
    });

}