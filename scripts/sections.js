 var startQuery = new Query(),
     current$ection = $('#hello'),
     called$ection,
     user = {},
     queue = {
         array: [],
         pos: 0,
         section: '',
         tag: ''
     };

 var remBasis = 12;

function updateRemBasis() {
    remBasis = parseInt(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
}

 $(document).ready(function () {

     //Break up the URL querystring into individual parameters.
     var startParams = location.search.substr(1).split('&');
     //If there are parameters...
     if (startParams.length > 0) {
         //Then process and save them.
         for (p in startParams) {
             if (startParams[p].startsWith('section=')) {
                 startQuery.section = startParams[p].substr(startParams[p].indexOf('=') + 1);
             }
             if (startParams[p].startsWith('tag=')) {
                 startQuery.tag = startParams[p].substr(startParams[p].indexOf('=') + 1);
             }
             if (startParams[p].startsWith('dev=')) {
                 user.dev = startParams[p].substr(startParams[p].indexOf('=') + 1);
             }
             if (startParams[p].startsWith('key=')) {
                 user.key = startParams[p].substr(startParams[p].indexOf('=') + 1);
             }
         }
     }

     //Overrides default css values in index.php to hide elements if the script is loaded.
     $('main').css('right', '-80rem');
     $('nav').css({
         'display': 'none',
         'top': H + 'px'
     });
     addLinkListeners($('nav'));
     $('section').css('display', 'none');

     //If there was a section in the querystring aside from an intro section, then it will load and enter immediately.
     if (startQuery.section !== '' && startQuery.section !== 'hello' && startQuery.section !== 'custom-queue') {

         //Don't forget to add link listeners to hello anyways though
         addLinkListeners($('#hello'));
         startQuery.call();
         $('main').css({
             'right': '0'
         });
         $('#welcome').css('opacity', '0');
         fields.push({
             angle: 7 * Math.PI / 6,
             magnitude: 0.01,
             x: W - $('main').width(),
             y: 0,
             w: $('main').width(),
             h: $('main').height()
         });
         $('#continue-icon').css('transform', 'perspective(6rem) rotateX(90deg)');

         //If the section is custom-queue, it replaces #hello as the intro section, but does not enter immediately.
     } else if (startQuery.section === 'custom-queue') {

         $('#hello').removeClass('intro-section');

         startQuery.ajax(false);
         prepQueue(startQuery);

     }
 });

 function Query(section, tag) {
     this.section = section || '';
     this.tag = tag || '';

     this.call = function () {

         //Check if that silly user is calling the same section that's already displayed.
         var sameSection = (this.section === current$ection.attr('id'));

         if (document.getElementById(this.section) === null) {
             //AJAX the section if it hasn't been yet.
             this.ajax(true);
         } else if (this.tag !== '') {
             //Re-AJAX the section if a tag was specified, as it may be different than the one already displayed.
             $('#' + this.section).remove();
             this.ajax(true);
         } else if (!sameSection) {
             //If the section already exists (confirmed by previous conditions) and it's not the same one, then swap it in.
             swapSection($('#' + this.section), false);
         }

         pushHistory(this);

         //Update the queue if the new section isn't the same as the old one.
         if (!sameSection) {
             //If queue is present on screen, check to see if one of the sections in it is being viewed, and highlight 
             if ($('#queue').css('display') === 'block') {
                 $('#queue .displayed-work').removeClass('displayed-work');

                 //These sections will never be in a queue so don't run the code for these.
                 if (this.section !== 'works' && this.section !== 'hello' && this.section !== 'aaron') {
                     showDisplayedWork(this.section);
                 }
             }
         }
     };

     this.ajax = function (doSwap) {

         var filePath = 'sections/' + this.section + '/' + this.section + '.php' + this.querystring(false),
             $ection;

         $.ajax(filePath, {
             context: this,
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
                 }).appendTo('main');

                 //In the case of intro sections, they should be left hidden until the user continues to the site.
                 if (doSwap) {
                     swapSection($ection, true);
                 }

                 //Determine if the section is one that would contain a queue, and if so, reset the queue object and add the query info.
                 if (this.section === 'works' || this.section === 'custom-queue') {
                     $ection.addClass('intro-section');
                     prepQueue(this);
                 }
             }
         });

         letterSpinInterval = setInterval(function () {
             for (l in letterBodies) {
                 letterBodies[l].torque = 1;
             }
         }, 100);

     };

     this.querystring = function (includeSection) {
         //The includeSection argument is used so that this function can be used in pushHistory().
         var queries = [];

         //Check for parameters and add them to an array.
         if (this.section && includeSection) {
             queries[queries.length] = 'section=' + this.section;
         }
         if (this.tag) {
             queries[queries.length] = 'tag=' + this.tag;
         }
         if (user.key) {
             queries[queries.length] = 'key=' + user.key;
         }
         if (user.dev === 'aaron') {
             queries[queries.length] = 'dev=aaron';
         }

         //Assemble all parameters with delimiting ampersands
         var str = queries.join('&');

         //Prepend a '?' to the querystring if there are any queries, else return any empty string
         return (str.length > 0) ? '?' + str : '';
     };
 }

 function Nav(section, tag) {

     // 'includes/site_tree.xml'
     this.$tree = function (url) {
         $.ajax({
             url: 'includes/site_tree.xml',
             context: this,
             dataType: 'xml',
             error: function (jQXHR, status, error) {
                 console.log(status + ' ' + error);
             },
             success: function (data) {
                 return $(data);
                 console.log('data is ' + data);
             }
         });
     };
     this.updateNav = function (newSection, newTag) {

         this.section = newSection || 'hello';
         this.tag = newTag || '';
         this.$node = this.$tree.find('section[name="' + this.section + '"]');

         // Don't bother 
         if (!this.$node.is('root')) {

             var atRoot = false;
             this.path = [this.$node.attr('name')];
             while (!atRoot) {
                 var $parent = this.$node.parent('');
                 if ($parent.is('root')) {
                     atRoot = true;
                 }
                 this.path.unshift($parent.attr(''));
             }
             console.log('nav path is: ' + this.path.join(' > '));
         }
     };
     this.updateNav(section, tag);

 }

 //============ SECTION FUNCTIONS

 function addLinkListeners($elem) {
     //Adds click event listeners to all elements within the provided jQuery object having the class .link. Clicking calls the section indicated by the .[*]-link class, and uses the tag indicated by the .[*]-tag class.
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
             var outOfQueueRange = false,
                 linkQuery = new Query();
             switch (section) {
                 case 'prev':
                     if (queue.pos > 0) {
                         linkQuery.section = queue.array[queue.pos - 1];
                     } else {
                         outOfQueueRange = true;
                     }
                     break;
                 case 'next':
                     if (queue.pos < queue.array.length - 1) {
                         linkQuery.section = queue.array[queue.pos + 1];
                     } else {
                         outOfQueueRange = true;
                     }
                     break;
                 case 'begin':
                     linkQuery.section = queue.array[0];
                     break;
                 case 'works':
                     linkQuery.section = 'works';
                     linkQuery.tag = (tag === '') ? 'all' : tag;
                     break;
                 default:
                     linkQuery.section = section;
                     linkQuery.tag = tag;
             }
             if (!outOfQueueRange) {
                 linkQuery.call();
             };
         });
     });
 }

 function pushHistory(q) {
     //Code to adjust the browser history so that users can copy URLs to specific sections.
     var stateObj = {
         pageTitle: 'A A R O N',
         section: q.section,
         tag: q.tag,
         key: user.key,
         dev: user.dev
     };
     history.pushState(stateObj, q.section, q.querystring(true));
 }

 //var XHR = new XMLHttpRequest();
 var letterSpinInterval = 0;

 function centreHello($ection) {
     var helloPadding = ($ection.outerHeight() - 490) / 2 - 106.8;
     $ection.css('padding-top', helloPadding + "px");
     $('#hello-graphic').css('top', helloPadding + "px");
 }

 function swapSection($ection, addLinks) {
     $('main').animate({
         scrollTop: 0
     }, {
         complete: function () {
             $ection.css({
                 'display': 'flex',
                 'top': H + 'px'
             });
             if ($ection.attr('id') === 'hello') {
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
                     //If a queue section was called, calls populateQueue().
                     var sectionID = current$ection.attr('id');
                     if (sectionID === 'works' || sectionID === 'custom-queue') {
                         populateQueue();
                     }
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
         tag: q.tag
     };
     if ($('#queue').css('display') === 'block') {
         $('#queue .queue-card').fadeOut(500);
     }
 }

 function populateQueue() {
     //Clones works from the current queue section into the queue panel.
     //console.log('Populating queue with works...');
     $('#' + queue.section + ' .work').each(function (i) {
         //Remove tags, set display to none, then fade in the works.
         var $work = $(this).clone(true, true);
         $work.children('.label').remove();
         var $queueCard = $('<div class="queue-card' + (i === 0 ? ' displayed-work' : '') + '"></div>').append($work).append($work.children('.work-desc-container')).css('display', 'none');
         $('#queue .works-tray').append($queueCard);
         setTimeout(function () {
             $queueCard.fadeIn(500);
         }, i * 100);

         //Get section names and save to queue.array
         queue.pos = 0;
         var classes = $queueCard.children('.link').attr('class').split(' ');
         for (c in classes) {
             if (classes[c].endsWith('-link')) {
                 queue.array[i] = classes[c].substring(0, classes[c].lastIndexOf('-link'));
             }
         }
     });
     
     $('#queue .works-tray').prepend('<div class="queue-card"><span class="span-icon begin-link link">BEGIN QUEUE</span></div>');
     $('#queue .works-tray').append('<div class="queue-card"><span class="span-icon aaron-link link">GET IN TOUCH</span></div>');
     

     //Change the header and queue tag to reflect the type of queue being displayed.
     if (queue.section === 'works') {
         if (queue.tag === 'all') {
             //Non-breaking spaces for positioning.
             $('#queue h5').html("OF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
         } else {
             $('#queue h5').html("OF WORKS TAGGED");
         }
         $('.queue-label').attr('class', 'queue-label ' + queue.tag + '-label').html('');
     } else if (queue.section === 'custom-queue') {
         $('#queue h5').html("CREATED FOR");
         $('.queue-label').attr('class', 'queue-label custom-label').html($('#company-name').html());
     }

     //Animate queue in if not already on screen, also add force field.
     if ($('nav').css('display') !== 'block') {
         $('nav').css('display', 'block').animate({
             'top': '0'
         }, {
             duration: 1000,
             complete: function () {
                 fields.push({
                     angle: 5 * Math.PI / 6,
                     magnitude: 0.02,
                     x: $('nav').offset().left,
                     y: 0,
                     w: $('nav').width(),
                     h: H
                 });

             }
         });
     } else {

         //Same script as above, executes even if queue is already displayed
         $('#queue .works-tray').height(H - $('#queue header').outerHeight());
         //console.log("queue header outer height is " + $('#queue header').outerHeight())
     }
 }

 function showDisplayedWork(section) {
     // Find the displayed work in the queue array.
     var $tray = $('#queue .works-tray');
     for (q in queue.array) {
         if (queue.array[q] === section) {
             // Record the queue position.
             queue.pos = parseInt(q, 10);
             $tray.children().removeClass('displayed-work');
             $tray.children().children('.work').removeClass('prev-work', 'next-work');
             $tray.children().eq(queue.pos + 1).addClass('displayed-work');
             if (queue.pos > 0) {
                 $tray.children().eq(queue.pos).children('.work').addClass('prev-work');
             };
             if (queue.pos < queue.array.length) {
                 $tray.children().eq(queue.pos + 2).children('.work').addClass('next-work');
             }
             // Animate to the queue position.
             $('#queue .works-tray').animate({
                 'scrollTop': remBasis * 5.5 * (queue.pos)
             });
         }
     }
 }

 function toggleCard() {
     var cards = $('.queue-card');
     for (a in arguments) {
         var int = parseInt(arguments[a])
         var arg = Math.min(Math.max(parseInt(arguments[a]), 0), cards.length - 1);
         cards.eq(arg).toggleClass('displayed-work');
     }
 };
