var current$ection,
    readyQuery = new query(),
    queue = {
        array: [],
        pos: 0,
        section: '',
        tag: '',
        key: ''
    };

//parse the querystring into the readyQuery
readyQuery.parseQuery(location.search.substr(1));

function query(section, tag, key, dev) {
    this.section = section ? section : '';
    this.tag = tag ? tag : '';
    this.key = key ? key : '';
    this.dev = dev ? dev : 0;

    this.parseQuery = function (qString) {
        var queries = qString.split('&');
        //If there are queries...
        if (queries.length > 0) {
            //Parse queries...
            for (q in queries) {
                if (queries[q].startsWith('section=')) {
                    this.section = queries[q].substr(queries[q].indexOf('=') + 1);
                }
                if (queries[q].startsWith('tag=')) {
                    this.tag = queries[q].substr(queries[q].indexOf('=') + 1);
                }
                if (queries[q].startsWith('dev=')) {
                    this.dev = queries[q].substr(queries[q].indexOf('=') + 1);
                }
                if (queries[q].startsWith('key=')) {
                    userKey = this.key = queries[q].substr(queries[q].indexOf('=') + 1);
                }
            }
        }
    };

    this.call = function () {

        if (document.getElementById(this.section) == null) {
            this.ajaxSection();
        } else if (this.tag != '') {
            $('#' + this.section).remove();
            this.ajaxSection();
        } else {
            swapSection($('#' + this.section), false);
        }

        pushHistory(this);

        //If queue is present on screen, check to see if one of the sections in it is being viewed, and highlight 
        if ($('#queue').css('display') == 'block') {
            $('#queue .displayed-work').removeClass('displayed-work');

            //These sections will never be in a queue so the code inside won't need to be run in these cases.
            if (this.section != 'works' && this.section != 'hello' && this.section != 'aaron') {
                for (q in queue.array) {
                    if (queue.array[q] == this.section) {
                        $('#queue .' + this.section + '-link').addClass('displayed-work');
                        queue.pos = parseInt(q, 10);
                    }
                }
            }
        }
    };

    this.ajax = function () {
        //Self explanatory; requests the section via AJAX.

        var filePath = 'includes/verify_key.php' + this.makeString(false),
            $ection;

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
                if (this.section == 'works' || this.section == 'custom-queue') {
                    prepQueue(this);
                }
            }
        })

        letterSpinInterval = setInterval(function () {
            for (l in letterBodies) {
                letterBodies[l].torque = 1;
            }
        }, 100);

    };

    this.makeString = function (includeSection) {
        var str = '?' +
            this.section && includeSection ? 'section=' + this.section : '' +
            this.tag ? 'tag=' + this.tag : '' +
            this.key ? 'key=' + this.key : '' +
            this.dev ? 'dev=' + this.dev : '';
        return str;
    }
}

$(document).ready(function () {

    //Overrides default css values in index.php to hide elements if the script is loaded.
    $('#display').css('right', '-80rem');
    $('#queue').css({
        'display': 'none',
        'top': H + 'px'
    });
    addLinkListeners($('.queue-control'));
    $('section').css('display', 'none');

    //If there was a section in the querystring aside from an intro section, then it will load and enter immediately.
    if (readyQuery.section != '' && readyQuery.section != 'hello' && readyQuery.section != 'custom-queue') {

        readyQuery.call();
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
    } else if (readyQuery.section == 'custom-queue') {

        $('#hello').removeClass('intro-section');

        var filePath = 'sections/custom-queue/custom-queue.php' + readyQuery.makeString(false);

        $.ajax(filePath, {
            success: function (data, textStatus, jqXHR) {
                $(data).css('display', 'none').addClass('intro-section').appendTo('#display');
                prepQueue(section, tag);
            }
        })
    };
});



//============ SECTION FUNCTIONS

function addLinkListeners($elem) {
    //Adds click event listeners to all elements within the provided jQuery object having the class .link. Clicking calls the section indicated by the [*]-link class, and uses the tag indicated by the [*]-tag class.
    $elem.find('.link').each(function () {
        $(this).click(function () {
            var section = '',
                tag = '',
                classes = $(this).attr('class').split(' ');
            for (c in classes) {
                if (classes[c].endsWith('-tag')) {
                    tag = classes[c].substring(0, classes[c].lastIndexOf('-tag'));
                }
                if (classes[c].endsWith('-link')) {
                    section = classes[c].substring(0, classes[c].lastIndexOf('-link'));
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
                callSection(section, tag == '' ? 'all' : tag);
                break;
            default:
                callSection(section, tag);
            }
        })
    })
}

function pushHistory(q) {
    //Code to adjust the browser history so that users can copy URLs to specific sections.
    var stateObj = {
        pageTitle: 'A A R O N',
        section: q.section,
        tag: q.tag,
        key: q.key,
        dev: q.dev
    };
    history.pushState(stateObj, q.section, q.makeString(true));
}

//var XHR = new XMLHttpRequest();
var letterSpinInterval = 0;

function centreHello($ection) {
    var helloPadding = ($ection.outerHeight() - 490) / 2 - 106.8;
    $ection.css('padding-top', helloPadding + "px");
    $('#hello-graphic').css('top', helloPadding + "px")
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
            if ($ection.attr('id') == 'hello') {
                centreHello($ection);
            }
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

function prepQueue(q) {
    //Resets queue when a new queue needs to be loaded, and saves section and tag data.
    queue = {
        array: [],
        pos: 0,
        section: q.section,
        tag: q.tag,
        key: q.key
    };
    if ($('#queue').css('display') == 'block') {
        $('#queue .work').fadeOut(500);
    }
}

function populateQueue() {
    //Clones works from the current queue section into the queue panel.
    //console.log('Populating queue with works...');
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
                //console.log('section ' + queue.array[i] + ' added to queue.array at index ' + i)
            }
        }
    });

    //Change the header and queue tag to reflect the type of queue being displayed.
    if (queue.section == 'works') {
        if (queue.tag == 'all') {
            $('#queue h5').html("OF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            console.log('queue tag is "all"');
        } else {
            $('#queue h5').html("OF WORKS TAGGED");
            console.log('queue tag is a specific type');
        }
        $('.queue-tag').attr('class', 'queue-tag ' + queue.tag + '-tag').html('');
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
                //console.log("queue header outer height is " + $('#queue header').outerHeight())
            }
        });
    } else {

        //Same script as above, executes even if queue is already displayed
        $('#queue .works-tray').height(H - $('#queue header').outerHeight());
        //console.log("queue header outer height is " + $('#queue header').outerHeight())
    }
}