<?php

    include('works_list.inc.php');
        
    foreach ($works_list as $section_name => $section_data) {
        if (strcmp($_GET['tag'], 'all') == 0) {
            echo_queue_work($section_name, $section_data);
        } else {
            if (in_array($_GET['tag'], $section_data['tags'])) {
                echo_queue_work($section_name, $section_data);
            };
        };

    };

    function echo_queue_work($section_name, $section_data) {
        echo '<div class="work link '.$section_name.'-link" style="background-image:url(\'rasters/tn/'.$section_name.'-tn.png\');"><div class="work-desc-container"><span class="work-desc">'.$section_data['desc'].'</span></div></div>';
    };

?>