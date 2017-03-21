<?php
    
    function echo_post($name, $post, $date) {
        echo '<div class="card blue-grey lighten-1"><div class="card-content white-text"><span class="card-title">'.$name.'</span><p class="date white-text"><i class="material-icons tiny">today</i>'.$date.'</p><p class="post">'.$post.'</p></div></div>';
    };

    if (file_exists('posts.json')) {
        $posts_json = file_get_contents('posts.json');

        if (strlen($posts_json) > 0) {
            $posts = json_decode($posts_json, TRUE);
        } else {
            $posts = array();
        };

        for (end($posts); key($posts)!==null; prev($posts)){
            $post = current($posts);
            echo_post($post['name'], $post['post'], strtoupper($post['date']));
        };
    };

?>