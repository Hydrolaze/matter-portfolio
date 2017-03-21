//position image elements
    /*
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
    */

//use HTTP GET to retrieve SVG data and convert to vertices
/*
function getVerticesFromSVG(url) {
    var vertexSets = [];
    $.get(url, function (data) {
        $(data).find('polygon').each(function (i, polygon) {
            var vertexStrings = $(polygon).attr('points').split(" ");
            var vertexSet = [];
            for (s = 0; s < vertexStrings.length - 1; s++) {
                var str = vertexStrings[s];
                vertexSet[s] = {
                    x: parseFloat(str.slice(0, str.indexOf(','))),
                    y: parseFloat(str.slice(str.indexOf(',') + 1, str.length))
                }
            }
            vertexSets[i] = vertexSet;
        })
        return vertexSets
    })
}
*/

/*
var Averts = [
    [{
        x: 70.2,
        y: 76
    }, {
        x: 62.5,
        y: 60.4
    }, {
        x: 82.2,
        y: 60.4
    }, {
        x: 90,
        y: 76
    }],
    [{
        x: 27.6,
        y: 60.4
    }, {
        x: 19.8,
        y: 76
    }, {
        x: 0,
        y: 76
    }, {
        x: 7.8,
        y: 60.4
    }],
    [{
        x: 36,
        y: 4
    }, {
        x: 7.8,
        y: 60.4
    }, {
        x: 82.2,
        y: 60.4
    }, {
        x: 54,
        y: 4
    }]
];
var Rverts = [
    [{
        x: 57.9,
        y: 51.9
}, {
        x: 71.7,
        y: 46
}, {
        x: 76.9,
        y: 35.1
}, {
        x: 76.9,
        y: 21.9
}, {
        x: 71.7,
        y: 11
}, {
        x: 60.8,
        y: 5.4
}, {
        x: 49.3,
        y: 4
}, {
        x: 36.2,
        y: 4
}, {
        x: 24.1,
        y: 4
}, {
        x: 24.1,
        y: 53
}, {
        x: 39.1,
        y: 53
}], [{
        x: 8,
        y: 4
}, {
        x: 24.1,
        y: 4
}, {
        x: 24.1,
        y: 53
}, {
        x: 24.1,
        y: 76
}, {
        x: 8,
        y: 76
}], [{
        x: 62.2,
        y: 76
}, {
        x: 82,
        y: 76
}, {
        x: 57.9,
        y: 51.9
}, {
        x: 39.1,
        y: 53
}]];
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
var Nverts = [
    [{
        x: 65,
        y: 4
    }, {
        x: 81,
        y: 4
    }, {
        x: 81,
        y: 76
    }, {
        x: 65,
        y: 76
    }],
[{
        x: 25,
        y: 76
    }, {
        x: 9,
        y: 76
    }, {
        x: 9,
        y: 4
    }, {
        x: 25,
        y: 4
    }],
[{
        x: 65,
        y: 76
    }, {
        x: 25,
        y: 30.9
    }, {
        x: 25,
        y: 4
    }, {
        x: 65,
        y: 50.4
    }]];
*/