<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Photo Processing Test</title>
    <meta name="description" content="A webpage">
    <meta name="author" content="Aaron Clement">

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <style>
        #tn-box {
            width: 960px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 24px auto;
        }
        
        #tn-box > div {
            background-size: cover;
            background-position: center;
        }
        
    </style>
</head>

<body>

    <?php
    
        include('../../includes/functions.inc.php');
    
        function photogrid_demo($ection, $set_name, $col, $row) {
        
        $col = (int) $col;
        $row = (int) $row;
        
        if ($col < 1) { $col = 1; };
        if ($col > 960) { $col = 960; };
        if ($row < 1) { $row = 1; };
        if ($row > 960) { $row = 960; };
        
        echo '<h1>You have requested thumbnails sized for '.$col.' columns and '.$row.' rows.</h1>';
        
        //A short string describing the column and row count.
        $tn_tag = 'c'.$col.'r'.$row;
        
        //If the specified photoset exists in this section...
        if (in_array($set_name, scandir('.'))) {
            //Retrieves list of image names in photoset.
            $image_set = image_array($set_name);
            
            //Calculates required width and height of thumbnails.
            $tn_width = 960 / $col;
            $tn_height = 960 / $row;
            
            //If there isn't already a folder of thumbnails resized for this row-column specification.
            if (!in_array($tn_tag, scandir($set_name))) {
                
                echo '<h2>Thumbnails do not already exist at this size, so they will be generated.</h2>';
                
                mkdir($set_name.'/'.$tn_tag);
                include('../../includes/simple_image.php');
                $si = new simple_image();
                
                foreach ($image_set as $image) {
                    $si->load($set_name.'/'.$image);
                    
                    $width_factor = $tn_width / $si->getWidth();
                    $height_factor = $tn_height / $si->getHeight();
                    
                    if ($width_factor < 1 && $height_factor < 1) {
                        if ($width_factor > $height_factor) {
                            $si->resizeToWidth($tn_width);
                            echo 'Resizing '.$image.' to '.$tn_width.' pixels wide.<br>';
                        } else {
                            $si->resizeToHeight($tn_height);
                            echo 'Resizing '.$image.' to '.$tn_height.' pixels high.<br>';
                        }
                    }
                    
                    //Removes file extension.
                    $name = preg_replace('/\.[^.]+$/','',$image);
                    $si->save($set_name.'/'.$tn_tag.'/'.$name.'-'.$tn_tag.'.jpg', IMAGETYPE_JPEG);
                    
                };
            } else {
                echo '<h2>Thumbnails already exist at this size! Displaying them now.</h2>';
            };
            
            echo '<div id="tn-box">';
            foreach (image_array($set_name.'/'.$tn_tag) as $tn) {
                echo '<div style="width:'.$tn_width.'px;height:'.$tn_height.'px;background-image:url('.$set_name.'/'.$tn_tag.'/'.$tn.');"></div><br>';
            }
            echo '</div>';
            
        };
    };
    
        if (isset($_GET['c']) && isset($_GET['r'])) {
            $ection = array_slice(explode('/', __FILE__), -2, 1)[0];
            
            photogrid_demo($ection,'memeage', $_GET['c'], $_GET['r']);
        };
    
        
    ?>

</body>

</html>