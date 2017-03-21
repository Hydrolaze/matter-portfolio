var letters = [
    {
        src: 'vectors/A.svg',
        value: 'A',
        id: 'A1'
        },
    {
        src: 'vectors/A.svg',
        value: 'A',
        id: 'A2'
        },
    {
        src: 'vectors/R.svg',
        value: 'R',
        id: 'R'
        },
    {
        src: 'vectors/O.svg',
        value: 'O',
        id: 'O'
        },
    {
        src: 'vectors/N.svg',
        value: 'N',
        id: 'N'
    }
];

var config = {
    letterHeight: 80,
    letterWidth: 90,
    letterSpacing: 80
};

$(document).ready(function () {

    $('body').css('background', '#FFD980')

    //initialise letters
    for (l in letters) {
        initLetter(letters[l]);
    }

    //position image elements
    var W = window.innerWidth,
        H = window.innerHeight,
        AARONwidth = config.letterWidth * 5 + config.letterSpacing * 4;
    for (l in letters) {
        var letter = letters[l];
        letter.$elem.offset({
            top: H / 2 - config.letterHeight / 2,
            left: W / 2 - AARONwidth / 2 + l * (config.letterWidth + config.letterSpacing)
        })
    }

})

function initLetter(obj) {
    //instantiate <img> elements and add them to the body
    obj.$elem = $('<img src="' + obj.src + '" id="' + obj.id + '">');
    obj.$elem.height(config.letterHeight).css('position', 'absolute')
    $('body').append(obj.$elem)
}