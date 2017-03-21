var current$ection,
    queueArray,
    queuePos = 0;

$(document).ready(function () {

    $('#display').css('right', '-80rem');
    $('#queue').css({
        'display': 'none',
        'top': H + 'px'
    });
    $('section').css('display', 'none');

    var queries = location.search.substr(1).split('&'),
        section = '',
        arg = '';
    for (q in queries) {
        console.log("Query " + q + " is " + queries[q]);
        if (queries[q].startsWith('section=')) {
            section = queries[q].substr(queries[q].indexOf('=') + 1);
        }
        if (queries[q].startsWith('arg=')) {
            arg = queries[q].substr(queries[q].indexOf('=') + 1);
        }
    }
    if (section != '') {
        console.log('section is ' + section + ((arg) ? ' with argument ' + arg : ''));

        callSection(section, arg);
        $('#display').css({
            'right': '0'
        });
        $('#welcome').css('opacity', '0');
        fields.push({
            angle: Math.PI,
            magnitude: 0.01,
            x: W - $('#display').width(),
            y: 0,
            w: $('#display').width(),
            h: $('#display').height()
        })
        $('#continue-icon').css('transform', 'perspective(6rem) rotateX(90deg)');
    }
});



//============ SECTION FUNCTIONS

function addLinkListeners($ection) {
    $ection.find('.link').each(function () {
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

            if (section == 'PREV') {
                if (queuePos > 0) {
                    callSection(queueArray[queuePos - 1]);
                    queuePos--;
                }
            } else if (section == 'NEXT') {
                if (queuePos < queueArray.length - 2) {
                    callSection(queueArray[queuePos + 1]);
                    queuePos++;
                }
            } else {
                callSection(section, arg);
            }

            var stateObj = {
                pageTitle: '',
                section: section,
                arg: arg
            };
            var queryString = "?section=" + section + ((arg) ? '&arg=' + arg : '');
            console.log('querystring is ' + queryString);
            history.pushState(stateObj, section, queryString);
        })
    })
}

//var XHR = new XMLHttpRequest();
var letterSpinInterval = 0;

function ajaxSection(section, arg) {

    if (section == 'works') {
        $.get('includes/queue_works.inc.php', 'tag=' + arg, function (data) {
            $('#queue .works-tray').empty();
            $(data).appendTo('#queue .works-tray');
            $('.queue-tag').attr('class', 'queue-tag ' + arg + '-tag');
            $('#queue').css('display', 'block').animate({'top': '0'}, 1000);
        });
    }

    var filePath = 'sections/' + section + '/' + section + '.php' + ((arg) ? '?arg=' + arg : ''),
        $ection;

    console.log('GET filepath is ' + filePath);

    $.ajax(filePath, {
        success: function (data, textStatus, jqXHR) {
            clearInterval(letterSpinInterval);
            $ection = $(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $ection = $('<section id="error"><header><h1><span class="span-icon hello-link link">AARON</span> / ' + textStatus + '</h1><h2>' + errorThrown + '</h2></header></section>');
        },
        complete: function () {
            $ection.attr('id', section).css({
                'display': 'none'
            });
            swapSection($ection, true);
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
        var ajaxResponse = ajaxSection(section, arg);

    } else if (arg) {

        console.log("section '" + section + "' exists, but an argument was supplied; requesting a new copy")
        $('#' + section).remove();
        ajaxSection(section, arg);

    } else {
        console.log("section '" + section + "' exists")
        swapSection($('#' + section), false);
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
                }
            });
        }
    });

}