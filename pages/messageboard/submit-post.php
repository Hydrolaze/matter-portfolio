<?php

$name = $post = "";

$name = str_replace(':', '-', test_input($_POST["name"]));
$post = test_input($_POST["post"]);

file_put_contents('posts.txt', $name.":".$post."\n", FILE_APPEND);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>