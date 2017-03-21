<?php
    function photogrid($ection, $set_name, $col, $row, $bkg_pos) {
        
        $col = (int) $col;
        $row = (int) $row;
        
        if ($col < 1) { $col = 1; };
        if ($col > 960) { $col = 960; };
        if ($row < 1) { $row = 1; };
        if ($row > 960) { $row = 960; };
        
        //A short string describing the column and row count.
        $tn_tag = 'c'.$col.'r'.$row;
        
        //If the specified photoset exists in this section...
        if (in_array($set_name, scandir('.'))) {
            //Retrieves list of image names in photoset.
            $image_set = image_array($set_name);
            
            //Calculates required width and height of thumbnails.
            $tn_px = array(
                'width' => 960 / $col,
                'height' => 960 / $row
            );
            
            //If there isn't already a folder of thumbnails resized for this row-column specification.
            if (!in_array($tn_tag, scandir($set_name))) {
                
                mkdir($set_name.'/'.$tn_tag);
                
                if(!class_exists('simple_image')) {
                    include('simple_image.php');
                };
                
                if (!isset($si)) {
                    $si = new simple_image();
                };
                
                foreach ($image_set as $image) {
                    $si->load($set_name.'/'.$image);
                    
                    $width_factor = $tn_px['width'] / $si->getWidth();
                    $height_factor = $tn_px['height'] / $si->getHeight();
                    
                    if ($width_factor < 1 && $height_factor < 1) {
                        if ($width_factor > $height_factor) {
                            $si->resizeToWidth($tn_px['width']);
                        } else {
                            $si->resizeToHeight($tn_px['height']);
                        }
                    }
                    
                    //Removes file extension.
                    $no_ext = preg_replace('/\.[^.]+$/','',$image);
                    $si->save($set_name.'/'.$tn_tag.'/'.$no_ext.'-'.$tn_tag.'.jpg', IMAGETYPE_JPEG);
                    
                };
            };
            
            //Calculates rem values.
            $tn_rem = array(
                'width' => $tn_px['width'] / 12,
                'height' => $tn_px['height'] / 12
            );
            
            //Echo photogrid and thumbnails
            echo '<div class="photogrid">';
            foreach ($image_set as $image) {
                $no_ext = preg_replace('/\.[^.]+$/','',$image);
                echo '<a href="sections/'.$ection.'/'.$set_name.'/'.$image.'" target="_blank" style="width:'.$tn_rem['width'].'rem;height:'.$tn_rem['height'].'rem;"><div style="background-image:url(\'sections/'.$ection.'/'.$set_name.'/'.$tn_tag.'/'.$no_ext.'-'.$tn_tag.'.jpg\');background-position:'.$bkg_pos.';"></div></a>';
            }
            echo '</div>';
            
        };
    };

    function single_photo($ection, $image_name, $width, $alignment) {
        $width = (int) $width;
        
        if ($width < 1) { $width = 1; };
        if ($width > 960) { $width = 960; };
        
        //A short string describing the image width
        $size_tag = $width.'w';
        
        $images_scan = scandir('images');
        
        //If the specified photo exists in the photos folder
        if (in_array($image_name, $images_scan)) {
            
            $tn_name = preg_replace('/\.[^.]+$/','',$image_name).'-'.$size_tag.'.jpg';
            
            if(!class_exists('simple_image')) {
                include('simple_image.php');
            };

            if (!isset($si)) {
                $si = new simple_image();
            };
            
            $si->load('images/'.$image_name);
            $ratio = $si->getWidth() / $si->getHeight();
            
            //If there isn't already a thumbnails resized for this size specification.
            if (!in_array($tn_name, $images_scan)) {
                
                $si->resizeToWidth($width);
                $si->save('images/'.$tn_name, IMAGETYPE_JPEG);
                    
            };
            
            //Calculates rem values.
            $width_rem = $width / 12;
            $height_rem = $width_rem / $ratio;
            
            //Echo image
            echo '<div class="photo photo-'.$alignment.'" style="width:'.$width_rem.'rem;">';
            
            $no_ext = preg_replace('/\.[^.]+$/','',$image);
            echo '<a href="sections/'.$ection.'/images/'.$image_name.'" target="_blank" style="width:'.$width_rem.'rem;height:'.$height_rem.'rem;"><img src="sections/'.$ection.'/images/'.$tn_name.'"></a>';
            
            echo '</div>';
            
        };
    };

    function image_array($dir) {
        $scan = scandir($dir); //Retrieves an array of file names. Note that the first two entries will be "." (current directory) and ".." (parent directory).
        $valid_exts = array( //Valid extensions to filter file names by.
            '.png',
            '.jpg',
            '.jpeg',
            '.gif',
            '.bmp'
        );
        $not_image = array(); //Array to copy invalid file names to
        foreach ($scan as $path) {
            $path_ext = substr($path, strrpos($path, '.')); //Get extension of file name.
            $is_invalid = true; //Code considers the file extension to be invalid by default.
            foreach ($valid_exts as $ext) {
                if ($path_ext == $ext) { //Compare file extension to valid file extensions, and set $is_invalid to false if there is a match.
                    $is_invalid = false;
                }
            }
            if ($is_invalid) { //If the file name is invalid then copy it to the array of invalid file names.
                array_push($not_image, $path);
            }
        }
        $files = array_diff($scan, $not_image); //Get the difference of the original directory scan and the array of invalid file names. This result will therefore contain all of the valid file names.
        return $files;
    };

    function generate_works($works_list, $tag) {
        foreach ($works_list as $section_name => $section_data) {
            if (strcmp($tag, 'all') == 0) {
                echo_work($section_name, $section_data);
            } else {
                if (in_array($tag, $section_data['tags'])) {
                    echo_work($section_name, $section_data);
                };
            };
           
        };
    };

    function echo_work($section_name, $section_data) {
        echo '<div class="work link '.$section_name.'-link" style="background-image:url(\'rasters/tn/'.$section_name.'-tn.png\');">';
        foreach ($section_data['tags'] as $tag) {
            echo '<div class="tag '.$tag.'-tag"></div>';
        };
        echo '<div class="work-desc-container"><span class="work-desc">'.$section_data['desc'].'</span></div></div>';
    };
?>