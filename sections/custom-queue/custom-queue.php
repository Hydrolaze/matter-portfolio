<?php

if (isset($_GET['arg'])) {
    
    include('queues.php');
    
    $company = $queues[$_GET['arg']];

};
?>
   
<section id="custom-queue">
    <img src="rasters/hello-graphic.png" class="hello-graphic">
    <header>
        <span class="line-one">Hello and welcome</span>
        <span class="line-two">I'm Aaron Clement</span>
        <span class="line-three">graphic designer &amp; web developer</span>
    </header>

    <p>I'm looking to join a team of talented professionals where I can channel my passion for the web into exciting projects, and to grow in skill while contributing to the thriving web industry.</p>
    
    <p><?php echo $company['copy']; ?></p>

    <p>I hand-selected the pieces below for you at <span class="variable-info"><?php echo $company['name']; ?></span> to demonstrate my qualification for the position of <span class="variable-info"><?php echo $company['position']; ?></span>. You may use the panel to the left to navigate the queue. Enjoy!</p>
    
    <span class="span-icon link begin-link" style="font-size:2rem;">BEGIN QUEUE</span>
    
    <div class="works-tray">
        
        <?php
        
        include('../../includes/functions.inc.php');
        include('../../includes/works_list.inc.php');
        
        foreach ($company['queue'] as $work) {
            echo_work($work, $works_list[$work]);
        }
    
        ?>
        
    </div>
    
</section>