<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Coding an interactive web quiz</h2>
    </header>
    
    <div class="copy">
    
    <p>To test our understanding of functions and objects, I collaborated with Amanda Uriostegui, another web design major. We both decided to base the quiz off of a favourite game of ours; Minecraft.</p>
    
    <?php single_photo($section_name, 'works/minecraft-quiz/index.html', 'minecraft-quiz-screenshot.png', 720, 'centre', 'This Minecraft quiz was a fun way to test my knowledge of Javascript.'); ?>
    
    <p>In the game, you collect resources and build structures to survive in a monster-infested world. One of the hallmarks of the game is the ability to craft items out of the resources that you collect. These items have specific crafting recipes based off of a 3 by 3 grid. You place materials in the grid in the correct pattern and the item comes out of the other side.</p>
    
    <video width="496" height="496" autoplay loop>
        <source src="sections/minecraft/minecraft-crafting.webm" type="video/webm">
        <source src="sections/minecraft/minecraft-crafting.mp4" type="video/mp4">
        Sorry, I don't have this video in a format that your browser can view!
    </video>
    
    <p>While Amanda handled the interface design and asset acquisition, I tackled the development of quiz functions and object construction. Each item’s name, crafting recipe, ID, and other data was stored in an object that was added to an array of potential quiz questions.</p>
    
    <video width="496" height="496" autoplay loop>
        <source src="sections/minecraft/minecraft-quiz.webm" type="video/webm">
        <source src="sections/minecraft/minecraft-quiz.mp4" type="video/mp4">
        Sorry, I don't have this video in a format that your browser can view!
    </video>
    
    <p>At random the user is asked to replicate the crafting recipe for a given item, and they must drag the prerequisite ingredients from a table into the crafting grid (dragging functionality was provided by jQuery UI). At the end of a series of 6 random questions, the user’s score is shown to them.</p>
    
    </div>

</section>