var pageWidth, pageHeight;

$( document ).ready(function(){
    
    //perform tasks on page load
    onResize();
    
    //perform tasks on page resize
    $( window ).resize(onResize);
    
});

function onResize() {
//tasks to perform to resize content that CSS isn't powerful enough to do for me
    
    //get pageWidth and pageHeight
    pageWidth = $(window).innerWidth();
    pageHeight = $(window).innerHeight();
    
    var edgeWidth = (pageWidth - 960) / 2;
    
    $('.wall').width(edgeWidth + 10).height(pageHeight + 20);
    $('#right-wall').offset({left: edgeWidth + 960});
    
};