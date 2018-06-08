<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Turning heads with code and design</h2>
    </header>
    
    <div class="copy">
    
    <p>I love the web. I love the huge ecosystem of open-source code libraries, forums, articles, and resources that allow anyone to learn the art of web development and design. In my search to find my first web job, I wanted to create a custom portfolio site that would show off the fantastic potential of the web, challenge all the skills I've learned, and even teach me a few more.</p>
    
    <?php single_photo($section_name, false, 'matter-debug-view.png', 480, 'right', 'This is the debug view of the Matter.js environment. Each letter is made of a collection of simple shapes bound to each other.'); ?>
    
    <p>I began, of course, with an idea. Interactivity and dynamicity are my favourite things on the web, so my portfolio would need to showcase this. I thought back on the physics-based Flash games I played as a child; they were simple, engaging, and fun. I did some research and found <a href="http://brm.io/matter-js/">Matter.js</a>, a JavaScript library by Liam Brummitt. With it, I created a full-screen environment with the letters of my name as physics objects, each having mass, velocity, and substance.</p>
    
    <?php single_photo($section_name, false,'matter-storyboard.png', 320, 'left', 'I storyboarded the interaction I wanted before I began coding so that I would have a clear goal.'); ?>
    
    <p>The calculations for physics collisions can be rather complex, but I wanted the simulation to be minimally processor intensive. To achieve this, I pared down each letter to simple polygons and removed interior faces. These are stored as arrays of vector objects which are read by the plugin when the page loads.</p>
    
    <p>These boring, chunky polygons wouldn't fly in the polished, pretty portfolio I was planning to make. I wanted my letters to have nothing less than the smooth, sharp edges of vector shapes, so I devised a system that would bind SVG images to the physics objects. The function would take the positions and rotations of the physics objects, and translate this data into offsets and rotation values for the SVG images. This allowed me to use the clean SVG images as façades for my boring polygon physics bodies.</p>
    
    <?php single_photo($section_name, false,'matter-swatches.png', 240, 'right', 'The primary colour for the site is indigo, my favourite colour, but I also designated a gold colour to indicate interactive elements.'); ?>
    
    <p>Since loading a new page would reset the physics simulation, I decided instead to create small PHP files that could be loaded with AJAX and swapped into a display panel. Links to other sections would be indicated by a golden colour, and a JavaScript function would create click event listeners for these links that would trigger the loading and swapping functions.</p>
    
    <?php photogrid($section_name, 'matter-mockups', 4, 4, 'center'); ?>
    <span class="caption">After wireframing my layout, I debated between two visual styles; a flat and simple one, or a more ornate and complex one. In the end I decided to stick with the simple one and let my work speak for itself.</span>

    <p>The minimalist design looked great, but I didn't feel like it was doing enough to show off my design prowess. In researching other design portfolios, I found the portfolio of <a href="http://beta.rallyinteractive.com/">Rally Interactive</a>, a development firm whose website represented exactly what I wanted. In addition to the interactive and dynamic graphics, they also had header images for each project that conveyed the idea of the project with an attractive graphic. I emulated this with what I called "tableaus"; eyecatching compositions that embodied the section's content.</p>
    
    <p>When I began composing the sections for each portfolio piece, I quickly discovered that it was tedious to re-export graphics for optimal file size. This drove me to completely redesign the section system and create a simple CMS to handle image processing.</p>
    
    <pre>$works_list = array(
    'planetarium' => array(
        'desc' => 'Planetarium Blog',
        'tags' => array('code','web')
    ),
    'matter' => array(
        'desc' => 'This Portfolio',
        'tags' => array('code', 'design', 'web')
    ),...</pre>
    
    <p>Firstly, I created a unified directory for all portfolio pieces in the form of a multidimensional PHP array. This let me automatically generate the links in the "works" section, as well as filter items by tag. I also restructured the website's directories so that each section had its own folder, which allowed me to write standardised code that could apply to any section.</p>
    
    <pre>
single_photo([section name], [href], [file path], [display width], [alignment], [caption]);
   
photogrid([section name], [folder name], [rows], [columns], [background position]);
    </pre>
    
    <p>I taught myself to use PHP's "GD" image-processing library in order to generate perfectly-sized jpegs that would load rapidly for visitors. I integrated this functionality into two image display functions that I could use in any section. I designed the functions to be fool-proof; when the function is called, it checks to see if the correctly sized images already exist, and if not, then it resizes them and saves them for the next time the function is called. This way, no matter what I change the sizing of an image to, the function creates a version with the perfect size automatically.</p>

    </div>

</section>