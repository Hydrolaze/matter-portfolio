//============ GLOBAL VARIABLES

var W = window.innerWidth,
    H = window.innerHeight;

//============ VERTEX DATA

var ApolySet = [
    "70.2,76 62.5,60.4 82.2,60.4 90,76 ", //right leg
    "27.6,60.4 19.8,76 0,76 7.8,60.4 ", //left leg
    "36,4 7.8,60.4 82.2,60.4 54,4 " //top
];

var RpolySet = [
    "57.9,51.9 71.7,46 76.9,35.1 76.9,21.9 71.7,11 60.8,5.4 49.3,4 36.2,4 24.1,4 24.1,53 39.1,53 ", "8,4 24.1,4 24.1,53 24.1,76 8,76 ",
    "62.2,76 82,76 57.9,51.9 39.1,53 "
];

var Overts = [
    {
        x: 55.7,
        y: 0
}, {
        x: 74.3,
        y: 10.7
}, {
        x: 85,
        y: 29.3
}, {
        x: 85,
        y: 50.7
}, {
        x: 74.3,
        y: 69.3
}, {
        x: 55.7,
        y: 80
}, {
        x: 34.3,
        y: 80
}, {
        x: 15.7,
        y: 69.3
}, {
        x: 5,
        y: 50.7
}, {
        x: 5,
        y: 29.3
}, {
        x: 15.7,
        y: 10.7
}, {
        x: 34.3,
        y: 0
}];

var NpolySet = [
    "65,4 81,4 81,76 65,76 ", //right leg
    "9,4 25,4 25,76 9,76 ", //left leg
    "25,4 65,50.4 65,76 25,30.9 " //crossbar
];

//============ LETTER CONFIG

var letterOptions = {
    frictionAir: 0.025,
    render: {
        fillStyle: '00FF00',
        lineWidth: 0
    },
    restitution: 0.50
};

var correction = [ //anticentroid corrections made on the y axis to correctly align the letter bodies
    4,
    4,
    -2,
    0,
    0
];

// an array to store coordinates to pull letters toward
var targets = [{
        x: W - 500,
        y: H / 2 + correction[0]
    }, {
        x: W - 400,
        y: H / 2 + correction[1]
    }, {
        x: W - 300,
        y: H / 2 + correction[2]
    }, {
        x: W - 200,
        y: H / 2 + correction[3]
    }, {
        x: W - 100,
        y: H / 2 + correction[4]
    }];

function calculateTargets() {
    var displayOffset = $('main').offset().left;
    targets = [{
        x: displayOffset - 500,
        y: H / 2 + correction[0]
    }, {
        x: displayOffset - 400,
        y: H / 2 + correction[1]
    }, {
        x: displayOffset - 300,
        y: H / 2 + correction[2]
    }, {
        x: displayOffset - 200,
        y: H / 2 + correction[3]
    }, {
        x: displayOffset - 100,
        y: H / 2 + correction[4]
    }];
};