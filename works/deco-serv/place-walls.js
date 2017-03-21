var pageWidth, pageHeight;

$(document).ready(function () {
    
    init();
    
    openWalls();
    
    //perform tasks on page load
    onResize();

    //perform tasks on page resize
    $(window).resize(onResize);

});

init() {
    
    pageWidth = $(window).innerWidth();
    pageHeight = $(window).innerHeight();
    
}

function openWalls() {
    
}

function onResize() {

    var edgeWidth = (pageWidth - 960) / 2;

    $('.wall').width(edgeWidth + 10).height(pageHeight + 20);
    $('#right-wall').offset({
        left: edgeWidth + 960
    });

}

placeWalls() {
    
    
    
}