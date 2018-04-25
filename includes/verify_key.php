<?php

include(full_works_list.php);

if(isset($works_list[$_GET['section']])) {
    if($works_list[$_GET['section']]['secret'] == false) {
        
        include('../sections/'.$_GET['section'].'/'.$_GET['section'].'.php');
        
    } else {
        
        
        
    }
    
} else {
    
}

?>