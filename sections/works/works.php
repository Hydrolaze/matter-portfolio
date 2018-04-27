<?php

$tag = 'all';
$display_tag = '';

if (isset($_GET['tag'])) {
    
    include('../../includes/tags_list.inc.php');

    foreach ($tags_list as $valid_tag) {
        if ($valid_tag == $_GET['tag']) {
            $tag = $display_tag = $valid_tag;
        };
    };
};
?>


<section id="works">
    <header>
        <nav>
            <h5>Section navigation</h5>
            <span class="span-icon hello-link link">AARON</span> / WORKS
        </nav>
        <h1>MY <?php echo $display_tag; ?> WORK</h1>
        <h2>The <?php echo $display_tag; ?> pieces I have worked on in the past.</h2>
    </header>
    <p>Here are links to some of my works. Tags in the top right of each icon describe the skills I employed in creating them. Explore whichever interest you!</p>
    <div class="works-tray">

    <?php
        include('../../includes/works_list.inc.php');
        include('../../includes/functions.inc.php');

        generate_works($works_list, $tag);
    ?>

    </div>
</section>