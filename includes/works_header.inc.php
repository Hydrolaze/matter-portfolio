<?php include(__DIR__.'/works_list.inc.php'); ?> 

<section id="<?php echo $section_name; ?>">
    <img src="sections/<?php echo $section_name."/".$section_name; ?>_tableau.jpg" class="tableau">
    <header>
        <nav><h5>Section navigation</h5>
        <span class="span-icon hello-link link">AARON</span> / <span class="span-icon works-link link">WORKS</span> / <?php echo $section_name; ?></nav>
        <h1><?php echo $works_list[$section_name]['desc']; ?></h1>