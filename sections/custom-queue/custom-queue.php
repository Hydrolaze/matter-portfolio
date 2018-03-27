<?php if(isset($queues[$_GET['arg']])): ?>
    
<?php
    include('queues.php');
    
    $company = $queues[$_GET['arg']];
    
    if(!$_GET['dev']) {
        mail('sunyhakas@gmail.com' , 'custom-queue', 'Hey Aaron! This is your script getting in touch to let you know that the custom-queue section was accessed by '.$company['name'].' for the position of '.$company['position'].' at '.date('d-M-Y G:i T').'. Congratulations!');
    }
?>

    <section id="custom-queue">
        <img src="rasters/hello-graphic.png" class="hello-graphic">
        <header>
            <span class="line-one">Hello and welcome</span>
            <span class="line-two">I'm Aaron Clement</span>
            <span class="line-three"><?php echo $company['my_title']; ?></span>
        </header>

        <p>I'm looking for an opportunity to join a team of talented professionals where I can grow in skill and collaborate to create excellent work.</p>

        <p>
            <?php echo $company['copy']; ?>
        </p>

        <p>I hand-selected the pieces below for you at <span class="variable-info" id="company-name"><?php echo $company['name']; ?></span> to demonstrate my qualification for the position of <span class="variable-info"><?php echo $company['position']; ?></span>. You may use the panel to the left to navigate the queue. Enjoy!</p>

        <span class="span-icon link begin-link" style="font-size:2rem;">BEGIN QUEUE</span>

        <div class="works-tray">

            <?php
        
        include('../../includes/functions.inc.php');
        include('../../includes/full_works_list.inc.php');
        
        foreach ($company['queue'] as $work) {
            echo_work($work, $works_list[$work]);
        }
    
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
