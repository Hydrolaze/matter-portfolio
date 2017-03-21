<?php

$data = array(
    'name' => test_input($_POST["name"]),
    'post' => test_input($_POST["post"]),
    'date' => date('d-M-Y G:i'),
    'time' => time()
);

$posts_json = file_get_contents('posts.json');

if (strlen($posts_json) > 0) {
    $posts = json_decode($posts_json, TRUE);
} else {
    $posts = array();
}

array_push($posts, $data);

$data['bytes'] = file_put_contents('posts.json', json_encode($posts));

file_put_contents('last-post-time.txt', $data['time']);

print(json_encode($data));

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>