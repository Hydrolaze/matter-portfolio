<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,400italic,900,900italic|Roboto+Mono:300|Montserrat:400,700' rel='stylesheet' type='text/css'>

    <title>A A R O N</title>
    <meta name="description" content="A portfolio. Please view on desktop.">
    <meta name="author" content="Aaron Clement">

    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="styles/reset.css" type='text/css'>
    <link rel="stylesheet" href="styles/style.css" type='text/css'>

    <script src="plugins/jquery-2.1.4.min.js"></script>

    <style>
        #matter {
            position: fixed;
            opacity: 0;
        }

        #display {
            width: 80rem;
            height: 100vh;
            position: fixed;
            right: 0;
            top: 0;
            overflow-x: hidden;
            overflow-y: scroll;
        }

        #queue {
            width: 20rem;
            height: 100vh;
            overflow-x: hidden;
            position: fixed;
            right: 82rem;
            top: 0;
            display: none;
        }

        section {
            display: none;
        }

    </style>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>

    <?php include('includes/functions.inc.php'); ?>

    <div id="welcome">
        <p>Welcome to the portfolio of</p>
        <h3>Aaron Clement</h3>
        <p class="instruction">The page is loading...</p>
        <h5>Physics powered by Matter.js</h5>
    </div>

    <div id="display">
        <section id="hello" class="intro-section">
            <img src="rasters/hello-graphic.png" id="hello-graphic">
            <header>
                <span class="line-one">Hello and welcome</span>
                <span class="line-two">I'm Aaron Clement</span>
                <span class="line-three">graphic designer &amp; web developer</span>
            </header>

            <p>I'm looking to join a team of talented professionals where I can channel my passions into exciting projects, and to grow in skill while contributing to the thriving web industry.</p>

            <p>Pick an option below to explore my work and history.</p>
            <div class="icon-tray">
                <div id="portfolio-container">
                    <div>
                        <img src="vectors/icons/whole-portfolio.svg" class="works-link all-arg link" id="whole-portfolio-icon">
                        <img src="vectors/icons/web-portfolio.svg" class="sub-portfolio works-link web-arg link">
                        <img src="vectors/icons/design-portfolio.svg" class="sub-portfolio works-link design-arg link">
                        <img src="vectors/icons/code-portfolio.svg" class="sub-portfolio works-link code-arg link">
                    </div>
                    <span class="icon-desc">
                    VIEW MY PORTFOLIO<br>
                    or choose a skill to focus on
                </span>
                </div>
                <div class="icon-container">
                    <img src="vectors/icons/aaron-page.svg" class="icon aaron-link link">
                    <span class="icon-desc">
                    GET TO KNOW ME<br>
                    contact info &amp; resume
                </span>
                </div>
            </div>
        </section>
    </div>


    <div id="queue">
        <header>
            <h1>QUEUE</h1>
            <h5>of works tagged</h5>
            <div class="queue-tag all-tag"></div>
            <div class="queue-control">
                <span class="span-icon prev-link link"></span>
                <span class="span-icon next-link link"></span>
            </div>
        </header>
        <div class="works-tray">

        </div>
    </div>


    <div id="continue-icon">
        <img src="vectors/icons/continue.svg" alt="continue button">
    </div>

    <!--A count of frames rendered per second, updated by script in matter.AARON.js-->
    <!--
    <div id="statuses">
        <span id="FPS-count"></span>
        <canvas id="FPS-graph" width="300" height="100"></canvas>
    </div>
-->

    <script src="plugins/matter.js"></script>
    <script src="scripts/letter-data.js"></script>
    <script src="scripts/matter.AARON.js"></script>
    <script src="scripts/sections.js"></script>
</body>

</html>
