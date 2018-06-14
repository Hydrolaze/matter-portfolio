 var startQuery = new Query(),
     nav = new Nav(),
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
         if (startQuery.section === 'works' && startQuery.tag === '') {
             startQuery.tag = 'all';
         }
     }

     //Overrides default css values in index.php to hide elements if the script is loaded.
     $('main').css('right', '-80rem');
     addLinkListeners($('nav'));
     addLinkListeners($('#hello'));
     //centreHello($('#hello'));
     $('section').css('display', 'none');

     //Set up navbar.
     nav.addNav($('nav'));
     nav.addPanel($('#nav-icons'));
     nav.addPanel($('#queue'));

     //If there was a section in the querystring aside from an intro section, then it will load and enter immediately.
     if (startQuery.section !== '' && startQuery.section !== 'hello' && startQuery.section !== 'custom-queue') {

         startQuery.call();
         $('main').css({
             'right': '0'
         });
         $('#welcome').css('opacity', '0');
         fields.main = {
             angle: 7 * Math.PI / 6,
             magnitude: 0.01,
             x: W - $('main').width(),
             y: 0,
             w: $('main').width(),
             h: $('main').height()
         };
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
         var sameSection;
         if (this.section === 'works') {
             sameSection = false;
         } else {
             sameSection = (this.section === current$ection.attr('id'));
         }

         //Update the queue if the new section isn't the same as the old one.
         if (!sameSection) {
             //If the section is hello, then fadeOut the #nav-icons.
             console.log('Query.section = ' + this.section);
             switch (this.section) {
                 case 'hello':
                     nav.show('nav-icons', false);
                     nav.show('queue', false);
                     break;
                 case 'aaron':
                     nav.show('nav-icons', true);
                     nav.show('queue', false);
                     break;
                 case 'works':
                 case 'custom-queue':
                     nav.show('nav-icons', true);
                     nav.show('queue', true);
                     break;
                 default:
                     nav.show('nav-icons', true);
             }

             //If queue is present on screen, check to see if one of the sections in it is being viewed, and highlight 
             if ($('#queue').css('display') === 'block') {

                 //These sections will never be in a queue so don't run the code for these.
                 if (this.section !== 'works' && this.section !== 'hello' && this.section !== 'aaron') {
                     updateActiveCard(this.section);
                 }
             }

             if (document.getElementById(this.section) === null) {
                 //AJAX the section if it hasn't been yet.
                 this.ajax(true);
             } else if (this.tag !== '') {
                 //Re-AJAX the section if a tag was specified, as it may be different than the one already displayed.
                 $('#' + this.section).remove();
                 this.ajax(true);
             } else if (!sameSection) {
                 //If the section already exists (confirmed by previous conditions) and it's not the same one, then swap it in.
                 var $ection = $('#' + this.section);
                 $('main').animate({
                     scrollTop: 0
                 }, {
                     start: function () {
                         swapSection($ection);
                     }
                 });
             }

             pushHistory(this);
         }
     };

     this.ajax = function (doSwap) {

         var filePath = 'sections/' + this.section + '/' + this.section + '.php' + this.querystring(false),
             $ection;

         $.ajax({
             url: filePath, 
             context: this,
             dataType: 'html',
             success: function (data, textStatus, jqXHR) {
                 $ection = $(data);
             },
             error: function (jqXHR, textStatus, errorThrown) {
                 //Generates an "error" section if there was an AJAX error
                 $ection = $('<section id="error"><header><h1><span class="span-icon hello-link link">AARON</span> / ' + textStatus + '</h1><h2>' + errorThrown + '</h2></header><div class="copy"><p>Unfortunately, there was an AJAX error. Sorry about that! You may use the "AARON" link above to return to the home section.</p></div></section>');
                 console.log('AJAX failed');
             },
             complete: function () {
                 clearInterval(letterSpinInterval);
                 $ection.css({
                     'display': 'none'
                 }).appendTo('main');
                 addLinkListeners($ection);

                 //Determine if the section is one that would contain a queue, and if so, reset the queue object and add the query info.
                 if (this.section === 'works' || this.section === 'custom-queue') {
                     $ection.addClass('intro-section');
                     prepQueue(this);
                 }

                 //In the case of intro sections, they should be left hidden until the user continues to the site.
                 if (doSwap) {
                     $('main').animate({
                         scrollTop: 0
                     }, {
                         start: function () {
                             swapSection($ection);
                         }
                     });
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

         //Prepend a '?' to the querystring if there are any queries, else return an empty string
         return (str.length > 0) ? '?' + str : '';
     };
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

/*
//This function is more trouble than it's worth.
 function centreHello($ection) {
     var helloPadding = ($ection.outerHeight() - 490) / 2 - 106.8;
     $ection.css('padding-top', helloPadding + "px");
     $('#hello-graphic').css('top', helloPadding + "px");
 }
*/

 function swapSection($ection) {
     $ection.css({
         'display': 'flex',
         'top': H + 'px'
     });

     $ection.animate({
         'top': '0'
     }, {
         duration: 1000,
         start: function () {
             $('main section').not(this).each(function () {
                 $(this).fadeOut(1000);
             });

             //Fade in nav panels as needed.
             nav.fade();
         },
         complete: function () {
             current$ection = $ection;
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
     $('#queue .works-tray').animate({
         scrollTop: 0
     });
     if ($('#queue').css('display') === 'block') {
         $('#queue .work-card').fadeOut(400, function () {
             $(this).remove();
         });
     }
     populateQueue();
 }

 function populateQueue() {
     //Clones works from the current queue section into the queue panel.
     //console.log('Populating queue with works...');
     var count = 0;
     $('#' + queue.section + ' .work').each(function (i) {
         //Remove tags, set display to none, then fade in the works.
         var $work = $(this).clone(true, true);
         $work.children('.label').remove();
         var $queueCard = $('<div class="queue-card work-card"></div>').append($work).append($work.children('.work-desc-container')).css('display', 'none');

         //Insert the new card before the second .link-card (which is the last .queue-card).
         $('.link-card').eq(1).before($queueCard);
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
         count++;
     });

     //Write the number of .work-cards to the "BEGIN QUEUE" button.
     $('.begin-link').parent().attr('data-content', (count > 1) ? 'OF ' + count + ' WORKS' : 'OF ' + count + ' WORK');

     $('.link-card').eq(0).addClass('active-card');

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
 }

 function updateActiveCard(section) {
     // Find the displayed work in the queue array.
     var $cards = $('#queue .queue-card');
     for (q in queue.array) {
         if (queue.array[q] === section) {
             // Record the queue position.
             queue.pos = parseInt(q, 10);

             //Remove active-card, next-label, and prev-label, then re-apply them as necessary
             $cards.removeClass('active-card');
             $('#prev-label, #next-label').fadeOut(400, function () {
                 $(this).remove();
             });
             $cards.eq(queue.pos + 1).addClass('active-card');
             if (queue.pos > 0) {
                 var prevLabel = $('<div id="prev-label"><span class="span-label">PREV</span></div>').css('display', 'none');
                 $cards.eq(queue.pos).children('.work').append(prevLabel);
                 prevLabel.fadeIn();
             };
             if (queue.pos < queue.array.length) {
                 var nextLabel = $('<div id="next-label"><span class="span-label">NEXT</span></div>').css('display', 'none');
                 $cards.eq(queue.pos + 2).children('.work').append(nextLabel);
                 nextLabel.fadeIn();
             }
             // Animate to the queue position.
             $('#queue .works-tray').animate({
                 'scrollTop': remBasis * 5.5 * (queue.pos)
             });
         }
     }
 }

 function Nav() {
     this.$elem;
     this.panels = {};
     this.addNav = function ($elem) {
         this.$elem = $elem;
     }
     this.addPanel = function ($elem) {
         this.panels[$elem.attr('id')] = $elem;
     };
     this.show = function (elemId, showPanel) {
         // Attempt to queue a fadeIn or fadeOut for the panel whether the boolean is true or false. If the boolean argument is not given then this function does nothing.
         if (typeof showPanel === 'boolean') {
             var display = this.panels[elemId].css('display');
             if (showPanel && display === 'none') {
                 this.fadeList[elemId] = {
                     show: true
                 };
             } else if (!showPanel && display === 'block') {
                 this.fadeList[elemId] = {
                     show: false
                 };
             }
         }
     };
     this.fadeList = {};
     this.fade = function () {
         for (var elemId in this.fadeList) {
             var p = this.fadeList[elemId],
                 $elem = this.panels[elemId];
             console.log('Panel(id: ' + elemId + ', show: ' + p.show + ')');
             if (p.show === true) {
                 $elem.fadeIn(1000, function () {
                     fields[elemId] = {
                         angle: 5 * Math.PI / 6,
                         magnitude: 0.02,
                         x: $elem.offset().left,
                         y: $elem.offset().top,
                         w: $elem.width(),
                         h: $elem.width()
                     };
                 });
             } else {
                 if ($elem.css('display') == 'block') {
                     $elem.fadeOut(1000, function () {
                         delete fields[p.id];
                     });
                 }
             }
         }
         this.fadeList = {};
     };
 }
