var current$ection,
    queue = {
        array: [],
        pos: 0,
        section: '',
        arg: ''
    };

$(document).ready(function () {

    //Overrides default css values in index.php to hide elements if the script is loaded.
    $('#display').css('right', '-80rem');
    $('#queue').css({
        'display': 'none',
        'top': H + 'px'
    });
    addLinkListeners($('.queue-control'));
    $('section').css('display', 'none');

    var queries = location.search.substr(1).split('&'),
        arg = '',
        section = '',
        dev = '';
    //If there are queries...
    if (queries.length > 0) {
        //Parse queries...
        for (q in queries) {
            console.log("Query " + q + " is " + queries[q]);
            if (queries[q].startsWith('section=')) {
                section = queries[q].substr(queries[q].indexOf('=') + 1);
            }
            if (queries[q].startsWith('arg=')) {
                arg = queries[q].substr(queries[q].indexOf('=') + 1);
            }
            if (queries[q].startsWith('dev=')) {
                dev = queries[q].substr(queries[q].indexOf('=') + 1);
            }
        }

        //If there was a section in the querystring, then it will load and enter immediately.
        if (section != '' && section != 'custom-queue') {
            console.log('section is ' + section + ((arg) ? ' with argument ' + arg : ''));

            callSection(section, arg);
            $('#display').css({
                'right': '0'
            });
            $('#welcome').css('opacity', '0');
            fields.push({
                angle: 7 * Math.PI / 6,
                magnitude: 0.01,
                x: W - $('#display').width(),
                y: 0,
                w: $('#display').width(),
                h: $('#display').height()
            })
            $('#continue-icon').css('transform', 'perspective(6rem) rotateX(90deg)');

            //If the section is custom-queue, it replaces #hello as the intro section, but does not enter immediately.
        } else if (section == 'custom-queue') {

            $('#hello').removeClass('intro-section');

            var filePath = 'sections/custom-queue/custom-queue.php?arg=' + arg + (dev != '' ? '&dev=1' : '&dev=0');
            console.log('GET filepath is ' + filePath);
            
            $.ajax(filePath, {
                success: function (data, textStatus, jqXHR) {
                    $(data).css('display', 'none').addClass('intro-section').appendTo('#display');
                    prepQueue(section, arg);
                }
            })
        };
    };
});



//============ SECTION FUNCTIONS

function addLinkListeners($elem) {
    //Adds click event listeners to all elements within the provided jQuery object having the class .link. Clicking calls the section indicated by the [*]-link class, and uses the argument indicated by the [*]-arg class.
    $elem.find('.link').each(function () {
        $(this).click(function () {
            var section = '',
                arg = '',
                classes = $(this).attr('class').split(' ');
            for (c in classes) {
                if (classes[c].endsWith('-arg')) {
                    arg = classes[c].substring(0, classes[c].lastIndexOf('-arg'));
                    console.log("link has an argument of '" + arg + "'")
                }
                if (classes[c].endsWith('-link')) {
                    section = classes[c].substring(0, classes[c].lastIndexOf('-link'));
                    console.log("link leads to section '" + section + "'")
                }
            }

            //Checks for queue control links, and defaults to typical section call if not present.
            switch (section) {
            case 'prev':
                if (queue.pos > 0) {
                    var newSection = queue.array[queue.pos - 1];
                    callSection(newSection);
                }
                break;
            case 'next':
                if (queue.pos < queue.array.length - 1) {
                    var newSection = queue.array[queue.pos + 1];
                    callSection(newSection);
                }
                break;
            case 'begin':
                callSection(queue.array[0]);
                break;
            case 'works':
                if (arg == '') {
                    arg = 'all';
                }
                callSection(section, arg);
                break;
            default:
                callSection(section, arg);
            }
        })
    })
}

function pushHistory(section, arg) {
    //Code to adjust the browser history so that users can copy URLs to specific sections.
    var stateObj = {
        pageTitle: '',
        section: section,
        arg: arg
    };
    var queryString = "?section=" + section + ((arg) ? '&arg=' + arg : '');
    console.log('querystring is ' + queryString);
    history.pushState(stateObj, section, queryString);
}

//var XHR = new XMLHttpRequest();
var letterSpinInterval = 0;

function ajaxSection(section, arg) {
    //Self explanatory; requests a section via AJAX.

    var filePath = 'sections/' + section + '/' + section + '.php' + ((arg) ? '?arg=' + arg : ''),
        $ection;

    console.log('GET filepath is ' + filePath);

    $.ajax(filePath, {
        success: function (data, textStatus, jqXHR) {
            $ection = $(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Generates an "error" section if there was an AJAX error
            $ection = $('<section id="error"><header><h1><span class="span-icon hello-link link">AARON</span> / ' + textStatus + '</h1><h2>' + errorThrown + '</h2></header><div class="copy"><p>Unfortunately, there was an AJAX error. Sorry about that! You may use the "AARON" link above to return to the home section.</p></div></section>');
        },
        complete: function () {
            clearInterval(letterSpinInterval);
            $ection.css({
                'display': 'none'
            });
            swapSection($ection, true);

            //Determine if the section is one that would contain a queue, and if so, reset the queue object and add the query info.
            if (section == 'works' || section == 'custom-queue') {
                prepQueue(section, arg);
            }
        }
    })

    //    XHR.open('GET', filePath);
    //    XHR.send();

    letterSpinInterval = setInterval(function () {
        for (l in letterBodies) {
            letterBodies[l].torque = 1;
        }
    }, 100);

    //    XHR.onreadystatechange = function () {
    //
    //        if (XHR.readyState === XMLHttpRequest.DONE) {
    //            clearInterval(letterSpinInterval);
    //            $ection = $(XHR.responseText);
    //            $ection.attr('id', section).css({
    //                'display': 'none'
    //            });
    //            swapSection($ection, true);
    //        }
    //
    //    };
}

function callSection(section, arg) {

    if (document.getElementById(section) == null) {

        console.log("section '" + section + "' does not yet exist; requesting it")
        ajaxSection(section, arg);

    } else if (arg) {

        console.log("section '" + section + "' exists, but an argument was supplied; requesting a new copy")
        $('#' + section).remove();
        ajaxSection(section, arg);

    } else {
        console.log("section '" + section + "' exists")
        swapSection($('#' + section), false);
    }

    pushHistory(section, arg);

    //If queue is present on screen, check to see if one of the sections in it is being viewed, and highlight 
    if ($('#queue').css('display') == 'block') {
        $('#queue .displayed-work').removeClass('displayed-work');

        //These sections will never be in a queue so the code inside won't need to be run in these cases.
        if (section != 'works' && section != 'hello' && section != 'aaron') {
            for (q in queue.array) {
                if (queue.array[q] == section) {
                    console.log('section ' + section + ' is in the queue.array.')
                    $('#queue .' + section + '-link').addClass('displayed-work');
                    console.log('queue.pos is ' + q)
                    queue.pos = parseInt(q, 10);
                }
            }
        }
    }
}

function centreSection($ection) {
    if ($ection.outerHeight() < H) {
        console.log("section " + $ection.attr('id') + "'s outerHeight of " + $ection.outerHeight() + " is less than the window's height of " + H);
        var paddingTop = (H - $ection.height()) / 2;
        console.log("new padding-top calculated to be " + paddingTop);
        $ection.css('padding-top', paddingTop + 'px');
    }
}

function swapSection($ection, addLinks) {
    $('#display').animate({
        scrollTop: 0
    }, {
        complete: function () {
            $ection.appendTo($('#display')).css({
                'display': 'flex',
                'top': H + 'px'
            })
            centreSection($ection);
            if (addLinks) {
                addLinkListeners($ection);
            }

            $ection.animate({
                'top': '0'
            }, {
                duration: 1000,
                start: function () {
                    if (current$ection != undefined) {
                        current$ection.fadeOut(1000);
                    }
                },
                complete: function () {
                    current$ection = $ection;
                    //If the works section was called, calls copyWorks.
                    var sectionID = current$ection.attr('id');
                    if (sectionID == 'works' || sectionID == 'custom-queue') {
                        populateQueue();
                    };
                }
            });
        }
    });

}

//============ QUEUE FUNCTIONS

function prepQueue(section, arg) {
    //Resets queue when a new queue needs to be loaded, and saves section and arg data.
    queue.array = [];
    queue.pos = 0;
    queue.section = section;
    queue.arg = arg;
    if ($('#queue').css('display') == 'block') {
        $('#queue .work').fadeOut(500);
    }
}

function populateQueue() {
    //Clones works from the current queue section into the queue panel.
    console.log('Populating queue with works...');
    $('#' + queue.section + ' .work').each(function (i) {
        //Remove tags, set display to none, then fade in the works.
        var work = $(this).clone(true, true).css('display', 'none');
        work.children('.tag').remove();
        $('#queue .works-tray').append(work);
        work.fadeIn(500);

        //Get section names and save to queue.array
        queue.pos = 0;
        var classes = work.attr('class').split(' ');
        for (c in classes) {
            if (classes[c].endsWith('-link')) {
                queue.array[i] = classes[c].substring(0, classes[c].lastIndexOf('-link'));
                console.log('section ' + queue.array[i] + ' added to queue.array at index ' + i)
            }
        }
    });

    //Change the header and queue tag to reflect the type of queue being displayed.
    if (queue.section == 'works') {
        $('#queue h5').html("OF WORKS TAGGED");
        $('.queue-tag').attr('class', 'queue-tag ' + queue.arg + '-tag').html('');
    } else if (queue.section == 'custom-queue') {
        $('#queue h5').html("CREATED FOR");
        $('.queue-tag').attr('class', 'queue-tag custom-tag').html($('#company-name').html());
    }

    //Animate queue in if not already on screen, also add force field.
    if ($('#queue').css('display') != 'block') {
        $('#queue').css('display', 'block').animate({
            'top': '0'
        }, {
            duration: 1000,
            complete: function () {
                fields.push({
                    angle: 5 * Math.PI / 6,
                    magnitude: 0.02,
                    x: $('#queue').offset().left,
                    y: 0,
                    w: $('#queue').width(),
                    h: H
                });

                //Adjust .works-tray height so that it scrolls properly (this must be dynamically changed whenever a new queue is loaded because the contents of the queue-tag determine how much space remains after the header)
                $('#queue .works-tray').height(H - $('#queue header').outerHeight());
                console.log("queue header outer height is " + $('#queue header').outerHeight())
            }
        });
    } else {

        //Same script as above, executes even if queue is already displayed
        $('#queue .works-tray').height(H - $('#queue header').outerHeight());
        console.log("queue header outer height is " + $('#queue header').outerHeight())
    }
}