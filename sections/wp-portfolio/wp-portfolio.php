<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Creating my own Wordpress site</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, 'http://clement.matmcc.org/portfolio/','wp-portfolio-screenshot.png', 720, 'centre', 'Wordpress let me manage posts and content easily, and plugins gave me easy interactivity.'); ?>
    
    <p>To aid me in my search for a job, I created a Wordpress portfolio to showcase my work. After installing Wordpress on my server and linking the MySQL database, I set out to find a suitable theme to use.</p>
    
    <?php single_photo($section_name, 'https://wordpress.com/themes/blask/', 'blask-theme.jpg', 300, 'right', 'Blask by Automattic.'); ?>
    
    <p>I settled on Blask, a minimalistic theme that would be easy to modify for my purposes. I defined a child theme and set about modifying it, changing some fonts, background images, and placement of some elements.</p>

    <?php single_photo($section_name, false, 'limb-gallery-screenshot.png', 300, 'left', 'Limb Gallery, a versatile plugin I used to create galleries.'); ?>
    
    <p>I also implemented several plugins to add functionality to my portfolio such as contact forms and image galleries. I also used a development plugin called WP Example Content to let me see what my portfolio looked like with content before I took the time to add it in.</p>

    </div>

</section>