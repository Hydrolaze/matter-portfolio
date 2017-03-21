<?php

$tag = 'all';
$display_tag = '';

if (isset($_GET['arg'])) {
    
    include('../../includes/tags_list.inc.php');

    foreach ($tags_list as $valid_tag) {
        if ($valid_tag == $_GET['arg']) {
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
        <h2>The <?php echo $display_tag; ?> pieces I have completed in the last few years.</h2>
    </header>
    <p>Here are links to some of my works. I hope to add individual pages soon that will describe these projects in greater detail.</p>
    <div class="works-tray">

    <?php
        include('../../includes/works_list.inc.php');
        include('../../includes/functions.inc.php');

        generate_works($works_list, $tag);
    ?>

    </div>
</section>