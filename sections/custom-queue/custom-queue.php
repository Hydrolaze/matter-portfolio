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
        <p>I'm a designer looking for a challenging and rewarding job where I can put my creative abilities to the test. I have been working in print design for 5 years, and in that time I've learned to use Adobe software to design for a wide range of printing methods. I work hard to ensure that designs get created and finalized on time, adjusting artwork as necessary to suit my clients needs and the limitations of the printing method.</p>

        <p>I have considerable education in web design, digital graphics, and programming as well, having used these skills in many projects for both college assignments and personal exploration. I am skilled at creating websites, using CSS and Javascript to enrich the appearance and functionality. I've also studied PHP, both in the development of Wordpress sites and the creation of dynamic content.</p>

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
