<?php 

include('queues.php');

if(isset($queues[$_GET['key']])): 
    
    
    $company = $queues[$_GET['key']];
    
    if (isset($_GET['dev'])) {
        if(strcmp($_GET['dev'],'aaron') != 0) {
            mail('sunyhakas@gmail.com' , 'custom-queue', 'Hey Aaron! This is custom-queue.php letting you know that I was accessed by '.$company['name'].' for the position of '.$company['position'].' at '.date('d-M-Y G:i T').'. Congratulations!');
        };
    };
    
?>

    <section id="custom-queue">
        <img src="rasters/hello-graphic.png" class="hello-graphic">
        <header>
            <span class="line-one">Hello and welcome</span>
            <span class="line-two">I'm Aaron Clement</span>
            <span class="line-three"><?php echo $company['my_title']; ?></span>
        </header>

       <div class="copy">
        <p>I'm a graphic designer who is currently looking for challenging and rewarding work in North San Diego county. Print design is my specialty, but I have have considerable experience in web graphics and programming as well.</p>

        <p>
            <?php echo $company['copy']; ?>
        </p>

        <p>I hand-selected the pieces below for you at <span class="variable-info" id="company-name"><?php echo $company['name']; ?></span> to demonstrate my qualification for the position of <span class="variable-info"><?php echo $company['position']; ?></span>. You may use the panel to the left to navigate the queue. Enjoy!</p>
        </div>

        <span class="span-icon link begin-link" style="font-size:2rem;">BEGIN QUEUE</span>

        <div class="works-tray">

            <?php
        
        include('../../includes/functions.inc.php');
        include('../../includes/full_works_list.inc.php');
        
        foreach ($company['queue'] as $work) {
            echo_work($work, $works_list[$work]);
        };
    
        ?>

        </div>

    </section>

    <?php else: ?>

        <section id="error">
            <header>
                <h1><span class="span-icon hello-link link">AARON</span></h1>
                <h2>Queue not found</h2>
            </header>
            <div class="copy">
                <p>Unfortunately, that custom queue was not found. You may use the "AARON" link above to return to the home section.</p>
            </div>
        </section>

        <?php endif; ?>