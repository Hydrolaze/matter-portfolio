<!doctype html>
<html>

<meta charset="utf-8">

<head>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--Import Roboto Font-->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400' rel='stylesheet' type='text/css'>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


    <link rel="stylesheet" href="reset.css" type='text/css'>
    <link rel="stylesheet" href="style.css" type='text/css'>
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.css" media="screen,projection" />

    <title>PHP Test</title>
    <meta name="description" content="A test page for PHP scripts.">
    <meta name="author" content="Aaron Clement">


    <script src="jquery-2.1.4.js"></script>
    <script type="text/javascript" src="materialize/js/materialize.js"></script>

    <style>

    </style>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
   <div class="row">
    <div class="col s12 m6 l4 blue-grey lighten-5" id="sidebar">
        <h4>Messageboard</h4>
        <p>Use the form below to make a post on my PHP messageboard!</p>
        <form action="<?php echo $_SERVER[" PHP_SELF "];?>" method="post" class="col s12" id="post-form">
            <div class="row">
                <div class="input-field col s12">
                    <input name="name" id="poster_name" type="text" class="validate">
                    <label class="active" for="poster_name">Name</label>
                </div>
            </div>
            <div class="row">
                <textarea name="post" form="post-form">Type your post here.</textarea>
            </div>
            <div class="row">
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
    </div>
    <div class="col s12 push-m6 m6 push-l4 l8" id="posts">
        <h4>Posts:</h4>
        <div class="row">
            <div class="col s10 offset-s1">
                <?php
                    $name = $post = "";

                    function test_input($data) {
                        $data = trim($data);
                        $data = stripslashes($data);
                        $data = htmlspecialchars($data);
                        return $data;
                    }
                
                    function echo_post($n, $p) {
                        echo '<div class="card indigo darken-4"><div class="card-content white-text"><span class="card-title">'.$n.'</span><p>'.$p.'</p></div></div>';
                    }

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        
                        $name = test_input($_POST["name"]);
                        $post = test_input($_POST["post"]);
                      
                        echo_post($name, $post);
                        file_put_contents('posts.txt', $name.":".$post."\n", FILE_APPEND);
                    }
                
                if (file_exists('posts.txt')) {
                    $posts = file_get_contents('posts.txt');
                    $posts = preg_split("/\r\n|\n|\r/", $posts, NULL, PREG_SPLIT_NO_EMPTY);

                    for (end($posts); key($posts)!==null; prev($posts)){
                        $entry = current($posts);
                        $colon_pos = strpos($entry,":");
                        echo_post(substr($entry, 0, $colon_pos + 1), substr($entry,$colon_pos + 1));
                    }
                }
                
                ?>
            </div>
        </div>
    </div>
    </div>

    <!--<script src="script.js"></script>-->
</body>

</html>