

<?php 

//$key_is_valid = false;
//if(isset($_GET['key'])) {
//    include(__DIR__.'../custom-queue/queues.php');
//    if(isset($queues[$_GET['key']])) {
//        $key_is_valid = true;
//    };
//};
//
//if ($key_is_valid) {
//    include(__DIR__.'/full_works_list.inc.php');
//} else {
//    include(__DIR__.'/works_list.inc.php');
//};

include(__DIR__.'/full_works_list.inc.php');

?> 

<section id="<?php echo $section_name; ?>">
    <img src="sections/<?php echo $section_name."/".$section_name; ?>_tableau.jpg" class="tableau">
    <header>
        <nav><h5>Section navigation</h5>
        <span class="span-icon hello-link link">AARON</span> / <span class="span-icon works-link link">WORKS</span> / <?php echo $section_name; ?></nav>
        <h1><?php echo $works_list[$section_name]['desc']; ?></h1>