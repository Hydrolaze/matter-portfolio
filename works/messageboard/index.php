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

    <title>Messageboard</title>
    <meta name="description" content="A simple messageboard.">
    <meta name="author" content="Aaron Clement">


    <script src="jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="materialize/js/materialize.js"></script>

    <style>

    </style>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
    <div class="row">
        <div class="col s12 m6 l4 blue-grey lighten-5 left" id="sidebar">
            <div class="row">
                <div class="col s12">
                    <h4>Say hello!</h4>
                    <p>Use the form below to make a post on my messageboard. Posts submitted via AJAX and saved with PHP in JSON format.</p>
                    <p>Interface made with <a href="http://materializecss.com/">Materialize</a>.</p>
                </div>
            </div>
            <form name="post-form" id="post-form" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input name="name" id="post-name" type="text" class="validate">
                        <label class="active" for="post-name">Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea name="post" id="post-text" form="post-form" class="materialize-textarea"></textarea>
                        <label for="post-text">Message</label>
                    </div>
                </div>
                <div class="row">
                    <button class="btn waves-effect waves-light blue-grey darken-2" type="button" id="submit-post">Submit
                        <i class="material-icons right">send</i>
                    </button>
                    <button class="btn btn-small tooltipped waves-effect waves-light blue-grey darken-2" data-position="top" data-delay="50" data-tooltip="TEST" type="button" id="test-post">
                        <i class="material-icons">comment</i>
                    </button>
                    <button class="btn btn-small tooltipped waves-effect waves-light blue-grey darken-2" data-position="top" data-delay="50" data-tooltip="REFRESH" type="button" id="check-post">
                        <i class="material-icons">swap_vert</i>
                    </button>
                </div>
            </form>
        </div>
        <div class="col s12 m6 l8 right" id="posts">
            <div class="row">
                <div class="col s12 l8 push-l2">
                    <?php

                    include('get-posts.php');
                
                    ?>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>