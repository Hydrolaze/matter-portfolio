<?php
    $section_name = 'roryquest';
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Pounce and play as my beloved cat</h2>
    </header>
    
    <p>The HTML5 standard added many revolutionary features, one of which was the &lt;canvas&gt; element. In this project, I explored this new feature by making a game.</p>
    
    <?php single_photo($section_name, 'roryquest-screenshot.png', 720, 'centre'); ?>
    <span class="caption">There’s no goal to the game as it exists now, but it was a fun exploration into sprite animation and game physics.</span>

    <p>I’m quite fond of my cat, Rorschach, so I made a game about him. I found reference material online of cats running, and drew a spritesheet based on this. Using the requestAnimationFrame function, I created a render loop that would cycle through the columns of my spritesheet.</p>

    <video width="496" height="496" autoplay loop>
        <source src="sections/roryquest/roryquest.webm" type="video/webm">
        Sorry, I don't have this video in a format that your browser can view!
    </video>
   
    <p>I also defined some states that would change the way the spritesheet rendered. For example, when motionless the spritesheet would render a static sitting frame, but when jumping, the spritesheet would render a jumping animation according to the cat’s movement vector.</p>
</section>