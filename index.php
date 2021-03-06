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

        main {
            width: 80rem;
            height: 100vh;
            position: fixed;
            right: 0;
            top: 0;
            overflow-x: hidden;
            overflow-y: scroll;
        }

        nav {
            width: 20rem;
            height: 100vh;
            overflow-x: hidden;
            position: fixed;
            right: 82rem;
            top: 0;
        }

        nav>*,
        section {
            display: none;
        }

    </style>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>

    <?php 
    include('includes/functions.inc.php'); 
    include('includes/validate_key.inc.php');
    ?>

    <div id="welcome">
        <p>Welcome to the portfolio of</p>
        <h3>Aaron Clement</h3>
        <p class="instruction">The page is loading...</p>
        <h5>Physics powered by Matter.js</h5>
    </div>

    <main>
        <section id="hello" class="intro-section">
            <img src="rasters/hello-graphic.png" class="hello-graphic">
            <header>
                <span class="line-one">Hello and welcome</span>
                <span class="line-two">I'm Aaron Clement</span>
                <span class="line-three">graphic designer &amp; web developer</span>
            </header>

            <div class="copy">
                <p>I'm a graphic designer who is currently looking for challenging and rewarding work in San Diego county. I have been working in print design for 5 years <!-- I began working at Logo Expressions in June 2013, exactly five years before now. -->, and in that time I've learned to design for a wide range of printing methods. I have considerable experience in web graphics and programming as well. </p>

                <?php if ($key_is_valid): ?>

                <p>I designed my portfolio to serve up a custom experience to visitors with a unique URL key. Your key unlocks an exclusive queue of portfolio pieces that I'd love you to see.</p>

            </div>

            <div class="queue-container">
                <img src="vectors/icons/anim-custom-queue.svg" class="icon custom-queue-link link">
                <span class="icon-desc">
                        <h4>CUSTOM QUEUE</h4>
                    A collection of works picked specially for you at <span class="variable-info"><?php echo $company['name']; ?></span> to show my qualification for the position of <span class="variable-info"><?php echo $company['position']; ?></span>.
                    </span>
            </div>

            <p>Or if you'd prefer to browse, pick an option below to learn more about who I am and what I can do for you.</p>

            <?php else: ?>

            <p>Pick an option below to learn more about who I am and what I can do for you.</p>

            </div>

            <?php endif; ?>

            <div class="icon-tray">
                <div class="portfolio-container">
                    <div class="icon-block">
                        <img src="vectors/icons/whole-portfolio.svg" class="works-link all-tag link whole-portfolio-icon" alt="everything">
                        <div class="tags-column">
                            <img src="vectors/icons/css-portfolio-half.svg" class="sub-portfolio-half works-link css-tag link" alt="CSS styles">
                            <img src="vectors/icons/php-portfolio-half.svg" class="sub-portfolio-half works-link php-tag link" alt="PHP coding">
                            <img src="vectors/icons/js-portfolio-half.svg" class="sub-portfolio-half works-link js-tag link" alt="Javascript">
                        </div>
                        <div class="tags-column">
                            <img src="vectors/icons/illustrator-portfolio.svg" class="sub-portfolio works-link illustrator-tag link" alt="Adobe Illustrator">
                            <img src="vectors/icons/photoshop-portfolio.svg" class="sub-portfolio works-link photoshop-tag link" alt="Adobe Photoshop">
                            <img src="vectors/icons/indesign-portfolio.svg" class="sub-portfolio works-link indesign-tag link" alt="Adobe InDesign">
                        </div>
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
    </main>

    <nav>
        <div id="nav-icons">
            <header>
                <img src="vectors/aaron-logo.svg" class="hello-link link" alt="home page">
            </header>
            <div class="icon-tray">
                <div class="portfolio-container">
                    <div class="icon-block">
                        <img src="vectors/icons/whole-portfolio.svg" class="works-link all-tag link whole-portfolio-icon" alt="everything">
                        <div class="tags-column">
                            <img src="vectors/icons/illustrator-portfolio.svg" class="sub-portfolio works-link illustrator-tag link" alt="Adobe Illustrator">
                            <img src="vectors/icons/photoshop-portfolio.svg" class="sub-portfolio works-link photoshop-tag link" alt="Adobe Photoshop">
                            <img src="vectors/icons/indesign-portfolio.svg" class="sub-portfolio works-link indesign-tag link" alt="Adobe InDesign">
                        </div>
                    </div>
                    <span class="icon-desc">
                    MY PORTFOLIO
                    </span>
                </div>
                <div class="minicon-container">
                    <img src="vectors/icons/aaron-page-mini.svg" class="icon minicon aaron-link link">
                    <span class="icon-desc">
                    ABOUT ME
                    </span>
                </div>
                <div class="minicon-container">
                    <img src="vectors/icons/anim-custom-queue-mini.svg" class="icon minicon custom-queue-link link">
                    <span class="icon-desc">
                    YOUR QUEUE
                    </span>
                </div>
            </div>
        </div>
        <div id="queue">
            <header>
                <h1>QUEUE</h1>
                <h5>of works tagged</h5>
                <div class="queue-label all-label"></div>
            </header>
            <div class="works-tray">
                <div class="queue-card link-card" data-content="OF WORKS"><span class="span-icon begin-link link">BEGIN QUEUE</span></div>
                <div class="queue-card link-card" data-content="WITH AARON"><span class="span-icon aaron-link link">GET IN TOUCH</span></div>
            </div>
        </div>
    </nav>


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
