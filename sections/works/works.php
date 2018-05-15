<?php

$tag = 'all';
$display_tag = '';
$tag_full_name = '';

if (isset($_GET['tag'])) {
    
    include('../../includes/tags_list.inc.php');

    foreach ($tags_list as $valid_tag => $full_name) {
        if ($valid_tag == $_GET['tag']) {
            $tag = $display_tag = $valid_tag;
            $tag_full_name = $full_name;
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
        <h1>MY <?php echo $tag_full_name; ?> WORK</h1>
        <h2>Examples of <?php echo $tag_full_name; ?> pieces I have worked on in the past.</h2>
    </header>
    <p>Here are links to some of my works. Tags in the top right of each icon describe the skills I employed in creating them. Explore whichever interest you!</p>
    <div class="works-tray">

    <?php
        $key_is_valid = false;
        if(isset($_GET['key'])) {
            include('../custom-queue/queues.php');
            if(isset($queues[$_GET['key']])) {
                $key_is_valid = true;
            };
        };
        
        if ($key_is_valid) {
            include('../../includes/full_works_list.inc.php');
        } else {
            include('../../includes/works_list.inc.php');
        }
        
        include('../../includes/functions.inc.php');

        generate_works($works_list, $tag);
    ?>

    </div>
</section>