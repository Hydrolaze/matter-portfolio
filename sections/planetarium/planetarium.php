<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>To boldly blog where no man has blogged before</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, 'works/planetarium/index.html', 'planetarium-screenshot.png', 720, 'centre', 'An interesting twist on the mundane act of scrolling.'); ?>
    
    <p>The first project in my web design 3 class was a themed blog page where we would post updates on our projects. The theme was "exploration", so I set my sights on the biggest frontier that humanity has yet to explore: Outer Space.</p>
    
    <?php photogrid($section_name, 'sketches', 3, 4, 'center'); ?>
    <span class="caption">I used a lot of trigonometry to calculate the angular size of planets at different distances from the viewport.</span>
    
    <p>I wanted to make interesting interactivity, but also have a functional blog, so I started making sketches for something that would achieve that. I wasn’t sure if I could even pull it off, so I made some diagrams to figure out how it might work and whether I could accomplish it in the timeframe I had.</p>

    <video width="600" height="363" autoplay loop>
        <source src="sections/planetarium/planetarium-scroll.webm" type="video/webm">
        Sorry, I don't have this video in a format that your browser can view!
    </video>

    <p>My idea was to have a totally normal column of posts on the side of the page, but in the background have a dynamic flythrough of the solar system where your distance from the sun corresponded to the distance you had scrolled from the top of the page. I planned to include trigonometric perspective calculations as well, so it would actually appear that you were flying past the planets in space.</p>

    <pre>var sun = new Planet(696342, 0, $('#sun'));
var mercury = new Planet(2440, 0.307499, $('#mercury'));
var venus = new Planet(6051, 0.728213, $('#venus'));
var earth = new Planet(6371, 1, $('#earth'));
var mars = new Planet(3390, 1.666, $('#mars'));
var jupiter = new Planet(69911, 5.45492, $('#jupiter'));
var saturn = new Planet(58232, 10.086, $('#saturn'));
var uranus = new Planet(25362, 20.11, $('#uranus'));
var neptune = new Planet(24622, 30.33, $('#neptune'));</pre>
   
    <span class="caption">The object constructors, containing data for the planets’ size (in km) and distance from the Sun (in AU).</span>

    <p>My code included size and distance data taken from Wikipedia so that my code could accurately depict the relative scale of distances and planets. Although the planets are sized accurately relative to each other, and the distance between the planets is also accurate, I found that it was not practical to have those two dimensions in the same scale as each other. The planets are infinitesimally small in comparison to the immense spaces between them, so at a totally accurate scale they would be tiny pixels flying past. This would be boring so I decided to simply scale up the size of the planets.</p>
    
    </div>

</section>