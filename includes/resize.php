<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>resize test</title>
    <meta name="description" content="A webpage">
    <meta name="author" content="Aaron Clement">

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
    
    <?php
        include('simple_image.php');
    
        $test_image = new simple_image();
    
        $test_image->load('../rasters/test-graphic.png');
        $test_image->resizeToWidth(960);
        $test_image->save('../rasters/half-test-graphic.png', IMAGETYPE_PNG);
        echo '<img src="../rasters/half-test-graphic.png">';
        $test_image->load('../rasters/half-test-graphic.png');
        $test_image->resizeToWidth(480);
        $test_image->save('../rasters/quarter-test-graphic.jpg', IMAGETYPE_JPEG);
        echo '<img src="../rasters/quarter-test-graphic.jpg">';
    ?>
    
</body>

</html>