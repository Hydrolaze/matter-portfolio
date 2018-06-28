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
            pointer-events: none;
        }

        nav>*,
        section {
            display: none;
            pointer-events: all;
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

                <div class="portfolio-container">
                    <div class="icon-block">
                        <img src="vectors/icons/portfolio/portfolio_whole.svg" class="works-link all-tag link whole-portfolio-icon" alt="everything">
                        <div class="tags-column">
                            <div class="tags-row">
                                <img src="vectors/icons/portfolio/portfolio_digital.svg" class="sub-portfolio works-link digital-tag link" alt="Digital Graphics">
                                <img src="vectors/icons/portfolio/portfolio_photoshop.svg" class="sub-portfolio-half works-link photoshop-tag link" alt="Photoshop">
                                <img src="vectors/icons/portfolio/portfolio_php.svg" class="sub-portfolio-half works-link php-tag link" alt="PHP">
                            </div>
                            <div class="tags-row">
                                <img src="vectors/icons/portfolio/portfolio_illustrator.svg" class="sub-portfolio-half works-link illustrator-tag link" alt="Illustrator">
                                <img src="vectors/icons/portfolio/portfolio_brand.svg" class="sub-portfolio works-link brand-tag link" alt="Branding">
                                <img src="vectors/icons/portfolio/portfolio_css.svg" class="sub-portfolio-half works-link css-tag link" alt="CSS">
                            </div>
                            <div class="tags-row">
                                <img src="vectors/icons/portfolio/portfolio_print.svg" class="sub-portfolio works-link print-tag link" alt="Print Design">
                                <img src="vectors/icons/portfolio/portfolio_indesign.svg" class="sub-portfolio-half works-link indesign-tag link" alt="InDesign">
                                <img src="vectors/icons/portfolio/portfolio_js.svg" class="sub-portfolio-half works-link js-tag link" alt="Javascript">
                            </div>
                        </div>
                        <!-- Write a PHP script to generate this structure with custom ordering according to info in the queue -->
                    </div>
                    <span class="icon-desc">
                    <h4>VIEW MY DESIGN PORTFOLIO</h4>
                    Explore all of the works in my portfolio, or click one of the tags.
                    </span>
                </div>

                <div class="icon-container">
                    <img src="vectors/icons/aaron-page.svg" class="icon aaron-link link">
                    <span class="icon-desc">
                    <h4>ABOUT ME</h4>
                    contact info &amp; resume
                </span>
                </div>

                <?php if ($key_is_valid): ?>

                <div class="queue-container">
                    <img src="vectors/icons/anim-custom-queue.svg" class="icon custom-queue-link link">
                    <span class="icon-desc">
                        <h4>EXPLORE YOUR QUEUE</h4>
                    A queue created for you at <span class="variable-info"><?php echo $company['name']; ?></span> to show my qualification for the position of <span class="variable-info"><?php echo $company['position']; ?></span>
                    </span>
                </div>

                <?php endif; ?>

                

                <!-- I began working at Logo Expressions in June 2013, exactly five years before now. -->

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
                        <img src="vectors/icons/portfolio/portfolio_whole.svg" class="works-link all-tag link whole-portfolio-icon" alt="everything">
                        <div class="tags-column">
                            <img src="vectors/icons/portfolio/portfolio_digital.svg" class="sub-portfolio works-link digital-tag link" alt="Digital Graphics">
                            <img src="vectors/icons/portfolio/portfolio_brand.svg" class="sub-portfolio works-link brand-tag link" alt="Branding">
                            <img src="vectors/icons/portfolio/portfolio_print.svg" class="sub-portfolio works-link print-tag link" alt="Print Design">
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
                <?php if ($key_is_valid): ?>
                <div class="minicon-container">
                    <img src="vectors/icons/anim-custom-queue-mini.svg" class="icon minicon custom-queue-link link">
                    <span class="icon-desc">
                    YOUR QUEUE
                    </span>
                </div>
                <?php else: ?>
                <div class="minicon-container">
                    <a href="mailto:sunyhakas@gmail.com?Subject=Hello%20Aaron" target="_top"><img src="vectors/icons/e-mail-mini.svg" class="icon minicon"></a>
                    <span class="icon-desc">
                    EMAIL ME
                    </span>
                </div>
                <?php endif; ?>
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
