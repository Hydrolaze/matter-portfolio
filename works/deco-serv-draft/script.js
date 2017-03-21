var h2Arr = $('.h2-ribbon');
var sectArr = $('.opens');
var subArr = $('.subSection');

var ribbonArr = [];

$(document).ready( function() {
    
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
    
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
    this.button = h2.find('.top');
    
    this.sub.css({'height': sub.height()});
    this.sect.css({'margin-bottom': sub.height() * -1});
    $('.section').css({'z-index': '1'});
    $('.h2-ribbon *').css({'z-index': '3'});
    
};

function openEvent(obj) {
    
    obj.button.click(function() {
        
        console.log("button " + obj.i + " clicked");
        
        var margin;
        
        if (obj.isOpen) {
            margin = obj.sub.height() * -1;
            obj.isOpen = false;
        } else {
            margin = 0;
            obj.isOpen = true;
        };
        
        obj.sect.animate({'margin-bottom': margin + 'px'}, 400);
        
        if (obj.isOpen) {
            obj.sub.find('.relative div').css({'display': 'block'});
        } else {
            obj.sub.find('.relative div').css({'display': 'none'});
        };
        
        //obj.h2.animate({'top': margin}, 400);
        
    });
    
};