<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Aiding charity work through design</h2>
    </header>
    
    <div class="copy">
    
    <p>The ultimate challenge in web design 3 was to create a website for a real-world client. My group chose North County Community Services, an organization which provides child care services to low-income families.</p>
    
    <?php single_photo($section_name, false, 'nccs-desktop-comp.png', 720, 'centre', 'A mockup of the desktop view; the header and posts represent clouds floating over a sunny meadow.'); ?>
    
    <p>In the planning stages of the assignment each group member was instructed to provide their own option for site branding, and I decided to go for something lighthearted and playful.</p>
    
    <?php single_photo($section_name, false, 'nccs-mobile-comp.png', 180, 'left', 'The mobile layout, compacted and with the navigation moved to a row in the top that recedes when the user scrolls down.'); ?>
    
    <p>To minimize seriousness and rigidity I stuck with rounded shapes and light, cool colours. The colour scheme was designed to reflect an environment that encouraged play and learning, with grassy greens, bright blues, and marigold as a cheery accent colour for interactive elements.</p>
    
    <?php single_photo($section_name, false, 'nccs-branding.png', 240, 'right', 'The colours are separated into two series of colours, ranging from very light to dark.'); ?>
    
    <p>Given my background in pad-printing and silk-screening, I was also sure to specify Pantone colours so that the charity would have consistent colours between their website and physical publications.</p>
    
    <p>Since my role in this project was to code interactivity and animations in Javascript, I also created a mockup of a floating bubble menu that I was planning on creating in addition to a design for a donate button that the client wanted.</p>
    
    <?php single_photo($section_name, false, 'nccs-interactivity-comp.png', 720, 'centre', 'This style of menu was inspired by Google’s “floating action button” which can be seen in the form of a compose email button in the Gmail app, among other places.'); ?>
    
    <p>When hovered over, a navigation bubble expands, and when clicked, submenu items are summoned. Another click on a bubble dismisses them. Buttons also have a dimensional appearance, as if they were ready for a finger to reach out and depress them.</p>

    </div>

</section>