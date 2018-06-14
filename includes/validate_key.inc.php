<?php
$key_is_valid = false;
$company = null;
if(isset($_GET['key'])) {
    include('sections/custom-queue/queues.php');
    if(isset($queues[$_GET['key']])) {
        $key_is_valid = true;
        $company = $queues[$_GET['key']];
    };
};
?>
