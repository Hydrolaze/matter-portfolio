//"h2 ribbons" are the ribbons on the right which go above the hidden subsections.
var h2Arr = $('.h2-ribbon');

//"opens" is a class of div which contains an h2 ribbon and covers a subsection. They are named this because they open to reveal the subsection.
var sectArr = $('.opens');

//"subsections" are the hidden divs that are revealed when their corresponding h2 ribbons are clicked.
var subArr = $('.subSection');

var ribbonArr = [];

$(document).ready(function () {

    //This for loop gathers the subsection related elements together into ribbon objects. The ribbon constructor needs to be rewritten to not require each element to be passed to it explicitly.
    for (h = 0; h < h2Arr.length; h++) {

        var h2 = $(h2Arr[h]);
        var sect = $(sectArr[h]);
        var sub = $(subArr[h]);

        ribbonArr[h] = new ribbon(h2, sect, sub, h);

        openEvent(ribbonArr[h]);

    };

});

function ribbon(h2, sect, sub, i) {

    this.h2 = h2;
    this.sect = sect;
    this.sub = sub;

    this.i = i;
    this.isOpen = false;
    this.button = h2;

    this.sub.css({
        'height': sub.height() + 'px'
    });
    this.sub.css({
        'margin-bottom': sub.height() * -1 + 'px'
    });
    $('.section').css({
        'z-index': '1'
    });
    $('.h2-ribbon *').css({
        'z-index': '3'
    });

};

function openEvent(obj) {

    obj.button.click(function () {

        var margin;

        if (obj.isOpen) { //Determine the margin that will be needed to open or close the hidden section.
            margin = obj.sub.height() * -1;
            obj.isOpen = false;
        } else {
            margin = 0;
            obj.isOpen = true;
        };

        obj.sub.animate({ //Animate the hidden section to the new margin value...
            'margin-bottom': margin + 'px'
        }, 400);

        var $shadows = obj.sub.find('.relative div');
        if (obj.isOpen) { //...then reveal the hidden section's shadows if it is opening... 
            $shadows.animate({
                'opacity': 1
            }, 400);
        } else { //...or hide them if it's closing.
            $shadows.animate({
                'opacity': 0
            }, 400);
        };


        //obj.h2.animate({'top': margin}, 400);

    });

};

//Clear Contact Form
$(".subBtn").click(function() {
  $("input[placeholder],textarea[placeholder]").val('').placeholder();
});


//new Clipboard('.clipBtn');
var clipboard = new Clipboard('.clipBtn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    showTooltip('Copied', e.trigger);
    $(e.trigger).attr('title', 'Copied').tooltip('fixTitle').tooltip('show');

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
