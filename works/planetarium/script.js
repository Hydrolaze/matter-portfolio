$(document).ready(function () {
    render();

// Scale-changing code that is apparently broken.
//    $('.scale').click(function () {
//        $('.scale').css('color', '#ffcc66');
//        $(this).css('color', 'cornflowerblue');
//    });
//
//    $('#scale-1').click(function () {
//        kmInAu = 149597871;
//        console.log("Called!");
//        for (p in planets) {
//            planets[p].recalculate();
//        }
//    });
//    $('#scale-10').click(function () {
//        kmInAu = 14959787.1;
//        for (p in planets) {
//            planets[p].recalculate();
//        }
//    });
//    $('#scale-100').click(function () {
//        kmInAu = 1495978.71;
//        for (p in planets) {
//            planets[p].recalculate();
//        }
//    });
//    $('#scale-1000').click(function () {
//        kmInAu = 149597.871;
//        for (p in planets) {
//            planets[p].recalculate();
//        }
//    });
});

var kmInAu = 149597.871; //this number is actually 1/1000th of the real value for kilometers in an astronomical unit. If I used the full value, then the planets would be 1000 times smaller than they are now and therefore practically impossible to see.

function Planet(diam, dist, elem) {
    this.diam = diam / kmInAu;
    this.dist = dist;
    this.elem = elem;
    this.recalculate = function () {
        this.diam = parseFloat(this.initDiam) / kmInAu;
    };
};

var sun = new Planet(696342, 0.001, $('#sun'));
var mercury = new Planet(2440, 0.307499, $('#mercury'));
var venus = new Planet(6051, 0.728213, $('#venus'));
var earth = new Planet(6371, 1, $('#earth'));
var mars = new Planet(3390, 1.666, $('#mars'));
var jupiter = new Planet(69911, 5.45492, $('#jupiter'));
var saturn = new Planet(58232, 10.086, $('#saturn'));
var uranus = new Planet(25362, 20.11, $('#uranus'));
var neptune = new Planet(24622, 30.33, $('#neptune'));

var planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

var W = window.innerWidth;
var H = window.innerHeight;

var y = 0.3,
    fov = Math.PI / 2,
    //Don't quite remember what the point of this code was, since it evaluates to something times 10 to the -17th.
    //minX = y / Math.tan(fov) * -1,
    x = 0,
    target = x;

var maxScroll = $('#inner').height() - $('#content').height() + 14;
var scroll = 0;

$('#content').scroll(function (e) {

    scroll = $('#content').scrollTop();
    target = (scroll / maxScroll) * neptune.dist;
    if (!animating) {
        window.requestAnimationFrame(render);
    };

});

var axisY = H / 2;
var animating = false;
var springForce = 0.02;

function render() {

    x += (target - x) * springForce;
    x = x >= 0 ? x : 0;

    for (i in planets) {

        var planet = planets[i];

        planet.dX = planet.dist - x;
        planet.incl = Math.atan(y / planet.dX);
        planet.pos = W - ((planet.incl / fov) * W);

        planet.distFrom = planet.dX / Math.cos(planet.incl);
        planet.visAngle = Math.atan((planet.diam / 2) / planet.distFrom);
        planet.height = (planet.visAngle / fov) * W;

        place(planet);

    };

    if (Math.abs(target - x) > 0.01) {

        animating = true;
        window.requestAnimationFrame(render);

    } else {

        x = target;
        animating = false;

    };

};

function place(planet) {

    var $p = planet.elem;
    $p.height(planet.height);
    $p.offset({
        left: planet.pos - ($p.width() / 2),
        top: axisY - ($p.height() / 2)
    });
};
