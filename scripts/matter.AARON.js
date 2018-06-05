//============ GLOBAL VARIABLES
var begun = false,
    PI = Math.PI,
    TAU = Math.PI * 2,
    intervalRunning = false,
    keyInterval = [],
    fps = {
        startTime: 0,
        frameNumber: 0,
        getFPS: function () {
            this.frameNumber++;
            var d = new Date().getTime(),
                currentTime = (d - this.startTime) / 1000,
                result = Math.floor((this.frameNumber / currentTime));
            if (currentTime > 1) {
                this.startTime = new Date().getTime();
                this.frameNumber = 0;
            }
            return result;
        }
    },
    fpsRecord = [];

//============ MATTER.JS INITIALISATION

var Engine = Matter.Engine,
    Events = Matter.Events,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Common = Matter.Common,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Vertices = Matter.Vertices;

// create an engine
var engine = Engine.create({
    enableSleeping: true,
    positionIterations: 3
});

// create a renderer
var render = Render.create({
    options: {
        width: W,
        height: H,
        pixelRatio: 1,
        background: '#fafafa',
        wireframeBackground: '#222',
        hasBounds: false,
        enabled: true,
        wireframes: true,
        showSleeping: false,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false
    },
    element: document.body,
    engine: engine
});

// initialise mouse and mouse constraint
var mouse,
    mouseConstraint;

var letterBodies = [
    createCompoundBody(getVertsFromPolygons(ApolySet), Common.extend(letterOptions, {
        force: {
            x: Math.random() * 0.2 + 0.05,
            y: Math.random() * 0.02 - 0.01
        },
        torque: Math.random() * 3 - 1.5
    })),
    createCompoundBody(getVertsFromPolygons(ApolySet), Common.extend(letterOptions, {
        force: {
            x: Math.random() * 0.2 + 0.05,
            y: Math.random() * 0.02 - 0.01
        },
        torque: Math.random() * 3 - 1.5
    })),
    createCompoundBody(getVertsFromPolygons(RpolySet), Common.extend(letterOptions, {
        force: {
            x: Math.random() * 0.2 + 0.05,
            y: Math.random() * 0.02 - 0.01
        },
        torque: Math.random() * 3 - 1.5
    })),
    Body.create(Common.extend(letterOptions, {
        force: {
            x: Math.random() * 0.2 + 0.05,
            y: Math.random() * 0.02 - 0.01
        },
        vertices: Overts,
        torque: Math.random() * 3 - 1.5
    })),
    createCompoundBody(getVertsFromPolygons(NpolySet), Common.extend(letterOptions, {
        force: {
            x: Math.random() * 0.2 + 0.05,
            y: Math.random() * 0.02 - 0.01
        },
        torque: Math.random() * 3 - 1.5
    }))
];

// disable lame gravity
engine.world.gravity.y = 0;

//create fields array and add area field
var fields = {};

// run the engine
Engine.run(engine);

//initialise FPS tracker canvas
//   var stCnv = document.getElementById("FPS-graph");
//   var stCtx = stCnv.getContext("2d");
//   stCtx.fillStyle = "#0813DC";
//   stCtx.lineWidth = 1;
//   stCtx.strokeStyle = "#0813DC";

// run the renderer and create its event listener
Render.run(render);
Events.on(render, "afterRender", function (e) {

    if (!begun) {
        console.log("Simulation started!");
        $('#welcome .instruction').html('Drag the letters and have fun!');
        begun = true;
    }
    
    //update SVGs for letterBodies that aren't sleeping
    for (l in letterBodies) {
        if (!letterBodies[l].isSleeping) {
            updateSvg(l)
        }
    }

    //for every field object...
    for (var i in fields) {
        var f = fields[i];
        //and for every letter...
        for (letter in letterBodies) {
            var body = letterBodies[letter];
            //if the letter is within field bounds...
            if (body.position.x > f.x && f.x + f.w > body.position.x && body.position.y > f.y && f.y + f.h > body.position.y) {
                //apply the force specified in the field object
                body.force.x += Math.cos(f.angle) * f.magnitude;
                body.force.y += Math.sin(f.angle) * f.magnitude;
            }
        }
    }
    
    //for every letter...
    for (l in letterBodies) {
        var letter = letterBodies[l];
        //if the letter is outside of the window bounds...
        if (letter.position.x < 0 || letter.position.x > W || letter.position.y < 0 || letter.position.y > H) {
            //gravitate it back to the centre of the window
            letter.force.x = (letter.position.x - W / 2) * -1e-5;
            letter.force.y = (letter.position.y - H / 2) * -1e-5;
        }
    }

    //get the current FPS
    //   var currentFPS = fps.getFPS();
    //output FPS if it has been evaluated, or "N/A" if it hasn't yet
    //   var fpsStr = (currentFPS == -1) ? 'N/A' : 'FPS - ' + currentFPS;
    //   $('#FPS-count').html(fpsStr);
    // shift everything to the left:
    //   var imageData = stCtx.getImageData(0, 0, stCnv.width - 1, stCnv.height);
    //   stCtx.putImageData(imageData, 1, 0);
    // now clear the right-most pixels:
    //   stCtx.clearRect(0, 0, 1, stCnv.height);
    //   stCtx.fillRect(0, stCnv.height - currentFPS, 1, currentFPS);
})

//============ THE INTRODUCTION

function introduction() {

    var spacing = H / 6;
    for (b in letterBodies) {

        Body.setPosition(letterBodies[b], {
            x: 50,
            y: spacing * b + spacing
        });
        World.add(engine.world, letterBodies[b]);

    }
}

introduction();

//============ MATTER.JS UTILITY FUNCTIONS

function createCompoundBody(vertexSets, options) {
    var parts = [];
    for (v in vertexSets) {
        //calculating centres of mass and geometric centres for accurate relative positioning of subbodies
        var centroid = Vertices.centre(vertexSets[v]),
            analysis = analysePath(vertexSets[v]);
        var centres = {
            massX: centroid.x - (analysis.minX + (analysis.width / 2)),
            massY: centroid.y - (analysis.minY + (analysis.height / 2)),
            rectX: analysis.minX + (analysis.width / 2),
            rectY: analysis.minY + (analysis.height / 2)
        };
        parts.push(Body.create({
            position: {
                x: centres.rectX + centres.massX,
                y: centres.rectY + centres.massY
            },
            vertices: Vertices.clockwiseSort(vertexSets[v])
        }))
    }
    var letterBody = Body.create(Common.extend({
        parts: parts.slice(0)
    }, options));
    return letterBody
}

function analysePath(vertices) {
    var maxX, minX;
    for (x in vertices) {
        if (x == 0) {
            maxX = vertices[x].x;
            minX = vertices[x].x;
        } else if (vertices[x].x > maxX) {
            maxX = vertices[x].x;
        } else if (vertices[x].x < minX) {
            minX = vertices[x].x;
        }
    }
    var maxY, minY;
    for (y in vertices) {
        if (y == 0) {
            maxY = vertices[y].y;
            minY = vertices[y].y;
        } else if (vertices[y].y > maxY) {
            maxY = vertices[y].y;
        } else if (vertices[y].y < minY) {
            minY = vertices[y].y;
        }
    }

    var analysis = {
        maxX: maxX,
        minX: minX,
        maxY: maxY,
        minY: minY,
        width: maxX - minX,
        height: maxY - minY
    };
    return analysis
}

function getVertsFromPolygons(polySet) {
    var vertexSets = [];
    for (p in polySet) {
        vertexSets[p] = getVertsFromPolygon(polySet[p]);
    }
    return vertexSets
}

function getVertsFromPolygon(poly) {
    var vertexStrings = poly.split(" ");
    var vertexSet = [];
    for (s = 0; s < vertexStrings.length - 1; s++) {
        var str = vertexStrings[s];
        vertexSet[s] = {
            x: parseFloat(str.slice(0, str.indexOf(','))),
            y: parseFloat(str.slice(str.indexOf(',') + 1, str.length))
        }
    }
    return vertexSet
}

//============ MATTER.JS ACTIVITY FUNCTIONS

function pullTo(body, x, y, angle, strength) {
    var turn = PI - angle;
    body.torque = (normaliseAngle(angle + turn) - normaliseAngle(body.angle + turn)) * strength * 0.25;
    var xForce = Common.clamp((x - body.position.x) * strength * 0.001, -0.1, 0.1),
        yForce = Common.clamp((y - body.position.y) * strength * 0.001, -0.1, 0.1);
    body.force = {
        x: xForce,
        y: yForce
    };
}

function continueToSite() {
    rollCall();
    $('#welcome').fadeOut(2000);
    //Add link listeners to any sections already in the display panel on page load.
    $('main section').each(function () {
        addLinkListeners($(this));
    });
    setTimeout(displayEnter, 3000);
}

var rollCallInterval = [];

function rollCall() {
    setTimeout(function () {
        Body.set(letterBodies[4], 'frictionAir', 0.05);
        rollCallInterval[4] = setInterval(function () {
            pullTo(letterBodies[4], targets[4].x, targets[4].y, 0, 1);
            setTimeout(function () {
                clearInterval(rollCallInterval[4]);
            }, 7000);
        }, 100);
    }, 0);
    setTimeout(function () {
        Body.set(letterBodies[3], 'frictionAir', 0.05);
        rollCallInterval[3] = setInterval(function () {
            pullTo(letterBodies[3], targets[3].x, targets[3].y, 0, 1);
            setTimeout(function () {
                clearInterval(rollCallInterval[3]);
            }, 7000);
        }, 100);
    }, 400);
    setTimeout(function () {
        Body.set(letterBodies[2], 'frictionAir', 0.05);
        rollCallInterval[2] = setInterval(function () {
            pullTo(letterBodies[2], targets[2].x, targets[2].y, 0, 1);
            setTimeout(function () {
                clearInterval(rollCallInterval[2]);
            }, 7000);
        }, 100);
    }, 800);
    setTimeout(function () {
        Body.set(letterBodies[1], 'frictionAir', 0.05);
        rollCallInterval[1] = setInterval(function () {
            pullTo(letterBodies[1], targets[1].x, targets[1].y, 0, 1);
            setTimeout(function () {
                clearInterval(rollCallInterval[1]);
            }, 7000);
        }, 100);
    }, 1200);
    setTimeout(function () {
        Body.set(letterBodies[0], 'frictionAir', 0.05);
        rollCallInterval[0] = setInterval(function () {
            pullTo(letterBodies[0], targets[0].x, targets[0].y, 0, 1);
            setTimeout(function () {
                clearInterval(rollCallInterval[0]);
            }, 7000);
        }, 100);
    }, 1600);
}

function horzAnimation(delta) {
    //Simple animation to move all letters left.
    var edge = W - delta;
    for (t in targets) {
        targets[t].x = edge - (5 - t) * 100;
    }
}

function vertAnimation(delta, displaySpace) {
    //More complicated animation to move all letters along quadratic paths into a vertical orientation for small screens.
    var edge = W - delta,
        percent = delta / displaySpace,
        quadratic = Math.pow(percent * 1e+8, 1 / 4);
    for (t in targets) {
        targets[t].x = edge - (4 - t) * (100 * (1 - percent)) - 100;
        targets[t].y = (H / 2) + (t - 2) * quadratic + correction[t];
    }
}

function displayEnter(dur) {
    
    var introSection = $('.intro-section');
    var displaySpace = (introSection.attr('id') == 'custom-queue') ? 1224 : 960;
    introSection.css('display', 'flex');
    $('main').animate({
        'right': '0'
    }, {
        duration: 2000,
        progress: function () {
            if (W > 570 + displaySpace) {
                horzAnimation(parseFloat(document.getElementsByTagName('main')[0].style.right) + displaySpace);
            } else {
                vertAnimation(parseFloat(document.getElementsByTagName('main')[0].style.right) + displaySpace, displaySpace);
            }
        },
        complete: function () {
            fields.main = {
                angle: 7 * Math.PI / 6,
                magnitude: 0.01,
                x: W - $('main').width(),
                y: 0,
                w: $('main').width(),
                h: $('main').height()
            }
            current$ection = introSection;
            if (current$ection.attr('id') == 'custom-queue') {
                populateQueue();
            }
        }
    });
}

//============ CODE TO RUN ON DOCUMENT READY

$(document).ready(function () {

    //place the matter canvas behind the display element so that the display panel can be interacted with
    $('#matter').insertBefore($('main'))

    //initialise letter SVG so that they track the Matter bodies
    for (l in letterSVGs) {
        letterSVGs[l].init();
    }

    //continue to site when continue button is clicked
    $('#continue-icon img').click(function () {
        $('#continue-icon').css('transform', 'perspective(6rem) rotateX(90deg)')
        continueToSite();
    })

    // add a mouse controlled constraint
    mouse = Mouse.create(document.getElementById('matter'));
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse
    });
    World.add(engine.world, mouseConstraint);

    //pass mouse to renderer to enable showMousePosition
    //engine.render.mouse = mouseConstraint.mouse;

    $(document).keydown(function (e) {
        //LEFT: push left
        if (e.which == 37) {
            for (l in letterBodies) {
                letterBodies[l].force = {
                    x: -0.05,
                    y: 0
                };
            }
            e.preventDefault();
        };
        //UP: push up
        if (e.which == 38) {
            for (l in letterBodies) {
                letterBodies[l].force = {
                    x: 0,
                    y: -0.05
                };
            }
            e.preventDefault();
        };
        //RIGHT: push right
        if (e.which == 39) {
            for (l in letterBodies) {
                letterBodies[l].force = {
                    x: 0.05,
                    y: 0
                };
            }
            e.preventDefault();
        };
        //DOWN: push down
        if (e.which == 40) {
            for (l in letterBodies) {
                letterBodies[l].force = {
                    x: 0,
                    y: 0.05
                };
            }
            e.preventDefault();
        };
        //R: run rollCall() script
        if (e.which == 82) {
            rollCall();
        };
        //Q: twist anticlockwise
        if (e.which == 81) {
            for (l in letterBodies) {
                letterBodies[l].torque = 1;
            }
        };
        //E: twist clockwise
        if (e.which == 69) {
            for (l in letterBodies) {
                letterBodies[l].torque = -1;
            }
        };
    });

    $(document).keyup(function (e) {
        if (e.which == 65) {
            clearInterval(keyInterval[e.which]);
            intervalRunning = false;
            console.log("keyInterval " + keyInterval[e.which] + " cleared!");
            e.preventDefault();
        }
    });

})



//============ SVG FAÇADE CONFIG

var letterSVGs = [
    new Façade('vectors/letters/A.svg', 'A', 'A1', 0, {
        angle: PI / 2,
        distance: 4
    }),
    new Façade('vectors/letters/A.svg', 'A', 'A2', 1, {
        angle: PI / 2,
        distance: 4
    }),
    new Façade('vectors/letters/R.svg', 'R', 'R', 2, {
        angle: -3 * PI / 4,
        distance: 6
    }),
    new Façade('vectors/letters/O.svg', 'O', 'O', 3),
    new Façade('vectors/letters/N.svg', 'N', 'N', 4)
];

//============ SVG FAÇADE

function Façade(src, value, id, index, antiCen) {
    //Pretty SVG letters for the user to look at instead of the chunky canvas shapes

    this.index = index;
    this.src = src;
    this.value = value;
    this.id = id;
    this.antiCentroid = antiCen == undefined ? {
        angle: 0,
        distance: 0
    } : antiCen;
    this.$elem = $('<img src="' + this.src + '" class="letter" id="' + this.id + '">');
    this.$elem.height(90).css('position', 'fixed');

    //instantiate <img> elements and add them to the body BEHIND the canvas
    this.init = function () {
        $('body').prepend(this.$elem)
        this.$elem.insertBefore('#matter')
    };


    this.cover = function (x, y, rads) {

        //the full angle of the façade from 0 to tau
        var angle = normaliseAngle(rads);
        this.$elem.css({
            '-webkit-transform': 'rotate(' + angle + 'rad)',
            '-moz-transform': 'rotate(' + angle + ')',
            '-ms-transform': 'rotate(' + angle + ')',
            '-o-transform': 'rotate(' + angle + ')',
            'transform': 'rotate(' + angle + ')'
        });
        //the angle of the façade from the closest half Pi
        var cornerAngle = angle % (PI / 2);
        //the dimension of the outer bounding box
        var outside = Math.cos(cornerAngle) * 90 + Math.sin(cornerAngle) * 90;
        var centroidAngle = angle + this.antiCentroid.angle;
        var antiCentroid = {
            x: Math.cos(centroidAngle) * this.antiCentroid.distance,
            y: Math.sin(centroidAngle) * this.antiCentroid.distance
        };
        this.$elem.offset({
            left: x - outside / 2 - antiCentroid.x,
            top: y - outside / 2 - antiCentroid.y
        })

    };
}

function normaliseAngle(rads) {

    var angle = rads % TAU;
    if (angle < 0) {
        angle += TAU;
    }
    return angle
}

//============ SVG FAÇADE UTILITY FUNCTIONS

function updateSvg(i) {
    letterSVGs[i].cover(letterBodies[i].position.x, letterBodies[i].position.y, letterBodies[i].angle)

}