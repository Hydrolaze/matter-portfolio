/*
     0
    000  ===================
   00000  SUNYHAKAS SOFTWARE
  000 000  March 2016
 000   000  
000     000  HAKAS-GALLERY.JS
 000   000  A plugin that provides a horizontally scrolling
  000 000  gallery of images.
   00000  
    000  ===================
     0
*/

// GLOBAL VARIABLES
var galleryArr = [];
var main;

$(document).ready(function () {

    galleryInit(clickInit);

});

function galleryInit(callback) {

    $('.gallery').each(function (g) {

        galleryArr[g] = new Gallery($(this), g);

    });

    main = galleryArr[0];

    callback();

};

function clickInit() {

    $('.tray').on('click', '.photo', function () {

        var classes = $(this).attr('class').split(' ');
        var G = galleryArr[parseInt(classes[0])];
        var i = parseInt(classes[1]);

        G.changePhoto(i);

        //.animate(properties[, duration][, easing][, complete])

    });

};

function onPhotosLoad(G) {

    console.log
    G.setPhoto(G.currentPhoto);

};

function Gallery($gallery, index) {

    var G = this;
    G.i = index; //which Gallery on the page this is
    G.config = configArr[G.i];

    G.$gallery = $gallery;

    G.$tray = $('<div class="tray ' + G.i + '"></div>');
    G.$tray.css({
        'height': ($gallery.height() - (G.config.padding * 2)) + 'px',
        'padding': G.config.padding + 'px 0',
        'position': 'relative'
    });
    G.$gallery.append(G.$tray); //add a tray container that can have an offset applied to it

    var left = $('<div class="arrow left-arrow"></div>');
    var right = $('<div class="arrow right-arrow"></div>');
    G.$gallery.append(left);
    G.$gallery.append(right);
    G.$leftArrow = $('<img class="arrow-svg ' + G.i + '" src="vectors/gallery-left-ribbon.svg">');
    G.$rightArrow = $('<img class="arrow-svg ' + G.i + '" src="vectors/gallery-right-ribbon.svg">');
    left.append(G.$leftArrow);
    right.append(G.$rightArrow);

    $('.arrow').css({
        'height': G.$gallery.height() + 'px',
        'display': 'inline-block',
        'position': 'relative',
        'top': -1 * G.$gallery.height() + 'px'
    });
    $('.arrow-svg').css('margin-top', (G.$gallery.height() - 54) / 2 + 'px');
    $('.arrow-svg').height(54);

    G.$leftArrow.click(function () {
        var next = G.currentPhoto - 1;
        if (next < 0) {
            next = G.photoQuantity - 1;
        };
        G.lastPhoto = G.currentPhoto;
        G.currentPhoto = next;
        G.changePhoto(next);
    });
    G.$rightArrow.click(function () {
        var next = G.currentPhoto + 1;
        if (next >= G.photoQuantity) {
            next = 0;
        };
        G.lastPhoto = G.currentPhoto;
        G.currentPhoto = next;
        G.changePhoto(next);
    });

    G.photoQuantity = G.config.srcArr.length;
    G.lastPhoto;
    G.currentPhoto = Math.floor(G.photoQuantity / 2);
    G.photos = []; //container for Photo objects
    G.unprepared = G.photoQuantity; //number of photos that have not yet loaded

    for (i in G.config.srcArr) { //add a copy of all of the photos to the gallery

        G.photos[i] = new Photo(G, i);

    };

    G.initPhotos = function () {

        for (photo in G.photos) {

            var P = G.photos[photo];
            if (P.i != 0) {
                var last = G.photos[P.i - 1];
                P.coord = last.coord + last.image.width + 24;
            };
            G.$tray.append(P.image);

        };

        onPhotosLoad(G);

    };

    G.offset = 0;
    G.changePhoto = function (i) {

        if (G.lastPhoto == G.photos.length - 1 && i == 0) {
            G.$tray.animate({
                marginLeft: -1 * G.$tray.width()
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false,
                complete: function () {
                    G.$tray.hide();
                    G.$tray.css({
                        'margin-left': G.$gallery.width() + 'px'
                    });
                    G.$tray.show();
                    G.centrePhoto(i);
                }
            });
        } else if (G.lastPhoto == 0 && i == G.photos.length - 1) {
            G.$tray.animate({
                marginLeft: G.$gallery.width()
            }, {
                duration: 1000,
                easing: 'swing',
                queue: false,
                complete: function () {
                    G.$tray.hide();
                    G.$tray.css({
                        'margin-left': -1 * G.$tray.width() + 'px'
                    });
                    G.$tray.show();
                    G.centrePhoto(i);
                }
            });
        } else {
            G.centrePhoto(i);
        };

    };
    G.centrePhoto = function (i) { //index

        var P = G.photos[i];

        G.currentPhoto = i;
        G.offset = -1 * P.coord + (G.$gallery.width() - P.image.width) / 2;
        G.$tray.animate({
            marginLeft: G.offset
        }, {
            duration: 1000,
            easing: 'swing',
            queue: false
        });

    };
    G.setPhoto = function (i) {

        var P = G.photos[i];

        G.currentPhoto = i;
        G.offset = -1 * P.coord + (G.$gallery.width() - P.image.width) / 2;
        G.$tray.css({
            'margin-left': G.offset + 'px'
        });

    };

};

function Photo(G, index) {

    var P = this;
    P.image = new Image();
    P.image.src = G.config.srcArr[index];
    P.i = index;
    P.image.className = G.i.toString() + " " + P.i.toString() + " photo";
    P.ratio = 1;
    P.coord = 0;

    P.image.onload = function () {
        P.image.height = G.$tray.height();
        P.ratio = P.image.width / P.image.height;
        G.unprepared--;

        if (G.unprepared == 0) {
            G.initPhotos();
        };
    };

};

configArr = [{
    padding: 24,
    srcArr: [
    'photos/ice-bucket-pad-printing.png',
    'photos/laser-etch.png',
    'photos/heat-transfer.png',
    'photos/red-ink-silkscreen.png',
    'photos/pad-printing-knife.png',
    'photos/pad-printing-glass.png',
    'photos/2-color-bottles.png'
    ]
}];