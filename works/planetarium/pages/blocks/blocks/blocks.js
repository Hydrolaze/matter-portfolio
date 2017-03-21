var parentsOpen = false,
    supportersOpen = false;

var pageWidth = $(window).innerWidth();
var initNavWidth = parseFloat($('#block-container').css('font-size')) * 27;
console.log(parseFloat($('#block-container').css('font-size')));

$(document).ready(function () {

    $('.block-label').css('opacity', '0');
    $('.block').css({
        'width': '15%',
        'margin-top': '-35%'
    });
    $('.block-menu li').css({
        'margin-left': '-1em',
        'margin-right': '1em',
        'opacity': '0'
    });

    inflate();

    $('.block').hover(function () {

        $(this).children('img').animate({
            'width': '120%',
            'margin-left': '-10%',
            'margin-top': '-10%'
        }, 300);

    }, function () {

        $(this).children('img').animate({
            'width': '100%',
            'margin-left': '0',
            'margin-top': '0'
        }, 300);

    });

    $('#parents').click(function () {
        
        if (supportersOpen) {
            blockMenuOut($('#supporters-menu'));
            supportersOpen = false;
        }
        
        if (parentsOpen) {
            blockMenuOut($('#parents-menu'));
            parentsOpen = false;
        } else {
            blockMenuIn($('#parents-menu'));
            parentsOpen = true;
        }
    });

    $('#supporters').click(function () {
        
        if (parentsOpen) {
            blockMenuOut($('#parents-menu'));
            parentsOpen = false;
        }
        
        if (supportersOpen) {
            blockMenuOut($('#supporters-menu'));
            supportersOpen = false;
        } else {
            blockMenuIn($('#supporters-menu'));
            supportersOpen = true;
        }
    });

});

    //perform tasks on page load
    onResize();

    //perform tasks on page resize
    $(window).resize(onResize);

function blockMenuIn($elem) {
    $elem.children('li').each(function (i) {
        var $li = $(this);
        setTimeout(function () {
            $li.animate({
                'margin-left': '0',
                'margin-right': '0',
                'opacity': '1'
            }, {
                duration: 300,
                queue: true
            });
        }, 250 * i);
    });

}

function blockMenuOut($elem) {
    $elem.children('li').each(function (i) {
        var $li = $(this);
        setTimeout(function () {
            $li.animate({
                'margin-left': '-1em',
                'margin-right': '1em',
                'opacity': '0'
            }, {
                duration: 300,
                queue: true
            });
        }, 250 * i);
    });
}

function inflate() {

    $('.block').each(function (i) {

        var elem = $(this);

        setTimeout(function () {
            elem.animate({
                'width': '25%',
                'margin-top': '0'
            }, {
                duration: 1000
            });

        }, 250 * i);
    });

    setTimeout(function () {

        $('.block-label').animate({
            'opacity': '1'
        }, {
            duration: 500
        });

    }, 1500);

}

function onResize() {
    //tasks to perform to resize content, because I do not want to fool around with media queries!

    pageWidth = $(window).innerWidth();
    
    if (pageWidth < initNavWidth * 1.25) {
        
        var fontSize = pageWidth * 0.8 / 27;
        
        $('#block-container').css({
            'font-size': fontSize + 'px'
        });
        
    } else {
        
        $('#block-container').css({
            'font-size': '16px'
        });
        
    }

};

