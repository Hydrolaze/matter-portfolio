<?php

$tag = 'all';
$tag_full_name = '';

if (isset($_GET['tag'])) {
    
    include('../../includes/tags_list.inc.php');

    foreach ($tags_list as $valid_tag => $full_name) {
        if ($valid_tag == $_GET['tag']) {
            $tag = $valid_tag;
            $tag_full_name = $full_name;
        };
    };
};
?>


    <section id="works">
        <header>
            <h1>MY
                <?php echo $tag_full_name; ?> WORK</h1>
            <h2>Examples of
                <?php echo $tag_full_name; ?> pieces I have worked on in the past.</h2>
        </header>
        <div class="copy">

            <div class="portfolio-container">
                <div class="icon-block">
                    <img src="vectors/icons/portfolio/portfolio_whole.svg" class="works-link all-tag link whole-portfolio-icon" alt="everything">
                    <div class="tags-column">
                        <div class="tags-row">
                            <img src="vectors/icons/portfolio/portfolio_digital.svg" class="sub-portfolio works-link digital-tag link" alt="Digital Graphics">
                            <img src="vectors/icons/portfolio/portfolio_photoshop.svg" class="sub-portfolio-half works-link photoshop-tag link" alt="Photoshop">
                            <img src="vectors/icons/portfolio/portfolio_php.svg" class="sub-portfolio-half works-link php-tag link" alt="PHP">
                        </div>
                        <div class="tags-row">
                            <img src="vectors/icons/portfolio/portfolio_illustrator.svg" class="sub-portfolio-half works-link illustrator-tag link" alt="Illustrator">
                            <img src="vectors/icons/portfolio/portfolio_brand.svg" class="sub-portfolio works-link brand-tag link" alt="Branding">
                            <img src="vectors/icons/portfolio/portfolio_css.svg" class="sub-portfolio-half works-link css-tag link" alt="CSS">
                        </div>
                        <div class="tags-row">
                            <img src="vectors/icons/portfolio/portfolio_print.svg" class="sub-portfolio works-link print-tag link" alt="Print Design">
                            <img src="vectors/icons/portfolio/portfolio_indesign.svg" class="sub-portfolio-half works-link indesign-tag link" alt="InDesign">
                            <img src="vectors/icons/portfolio/portfolio_js.svg" class="sub-portfolio-half works-link js-tag link" alt="Javascript">
                        </div>
                    </div>
                </div>
            </div>
            <p>Here are links to some of my works. You may use the queue control panel on the left to navigate your queue even after leaving this page.</p>
        </div>
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
