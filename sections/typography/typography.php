<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Bringing print typography to the web</h2>
    </header>
    
    <div class="copy">
    
    <p>Typography is an important part of any web design, so my teachers for web design 3 gave us the task of recreating the typography of a magazine page in a web browser.</p>
    
    <?php single_photo($section_name, 'works/typography/index.html', 'typography-screenshot.png', 720, 'centre', 'The webpage, which is responsive in desktop and some tablet sizes.'); ?>
    
    <p>I chose a page from a National Geographic article on dolphins to recreate, with the left page being a photo and the right page being the beginning of a three-part series of articles. With Google Fonts, I was able to find closely matching typefaces, and Chrome’s web developer tools allowed me to subtly tweak the CSS properties until my page matched the magazine.</p>
    
    <?php single_photo($section_name, false, 'typography-reference.jpg', 720, 'centre', 'The original page off of which my recreation’s layout was based.'); ?>
    
    </div>

</section>