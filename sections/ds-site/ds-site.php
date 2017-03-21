<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>A professional website for a professional business</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, 'works/deco-serv/index.html', 'deco-serv-screenshot.png', 720, 'centre', 'The completed draft as of July 2016. Please note that the orange striped boxes represent future content that will be supplied by Decorative Services.'); ?>
    
    <p>Decorative Services, one of my employers, is an Oceanside based contract printer specializing in the promotions industry. Although they do work for a multitude of high profile clients, they had a decade-old website with a very outdated style that was based on tables. My final project for web design 2 was coming up, so I decided to make a prototype of a new website for them.</p>
    
    <?php single_photo($section_name, false, 'deco-serv-resource-tag-example.png', 720, 'centre', 'An example of the proof sheet design. Information is imprinted on thick orange ribbons, and dynamic content is elevated on white boxes.'); ?>

    <p>The prototype was based off design elements from the new proof sheet I had previously created for them. It featured bold ribbons of colour and clean, consistent fields for information. I wanted to create a consistent look between the proof forms and the new site, so the proof form was my largest influence for the site’s look and feel.</p>
    
    <video width="496" height="496" autoplay loop>
        <source src="sections/ds-site/deco-serv-buttons.webm" type="video/webm">
        <source src="sections/ds-site/deco-serv-buttons.mp4" type="video/mp4">
        Sorry, I don't have this video in a format that your browser can view!
    </video>
    
    <p>Expanding on the graphical themes of physical ribbons and buttons, I added animations which reinforced the spatial qualities of the elements. Buttons would rize up on hover and depress into the page when pressed. Subsection tags hovered over seams in the page, and when clicked, the seams would split open, revealing content beneath. In this way I gave the web site a tactile appearance; reinforcing the users understanding of the interface’s function with intuitive concepts.</p>
    
    <video width="496" height="496" autoplay loop>
        <source src="sections/ds-site/deco-serv-subsections.webm" type="video/webm">
        <source src="sections/ds-site/deco-serv-subsections.mp4" type="video/mp4">
        Sorry, I don't have this video in a format that your browser can view!
    </video>
    
    <p>After turning in my site draft for my class project, I brought two of my friends on board with the project. We had plans to form a freelance design team, and after finishing this site, we would sell it to my employer as our first paid project.</p>
    
    <?php single_photo($section_name, 'works/hakas-gallery/index.html', 'hakas-gallery-screenshot.png', 720, 'centre', 'The entirely custom gallery I coded to use in the Decorative Services site. This plugin was coded with jQuery and supports any number of galleries on a single page, so long as image data is supplied to it.'); ?>
    
    <p>We met with my supervisor to present the site draft and take notes on her feedback, and we got plenty of insight into her stylistic preferences as well as features that she wanted to include. We set to work, meeting regularly to develop the site further and polish the interactions. I even coded a custom gallery plugin to display product images. In July of 2016 we presented a semifinal draft for last revisions, and we hope to complete the project later this year.</p>
    
    </div>

</section>