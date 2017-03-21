<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Learning to store and retrieve data with AJAX, PHP, and JSON</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, 'works/messageboard/index.php','messageboard-screenshot.png', 720, 'centre', 'A very insightful exploratory project. Leave a message if you please!'); ?>
    
    <p>I've only become more interested in PHP as I use it more. Recently, I created a basic messageboard to learn how to read and write user-submitted data with server side scripting.</p>
    
    <p>The messageboard is fairly basic, you can enter your name and message, and when you press submit, the data is sent to a PHP script via AJAX. The message is then formatted and appended to a JSON file, and if this is successful, then the message is added to the client's page to reflect the successful post.</p>
    
    <pre>
{
    "name": "Test",
    "post": "This message is a test.",
    "date": "11-Mar-2017 0:41",
    "time": 1489214468
}
    </pre>
    <span class="caption">When they are submitted, each post is assigned a date (which is displayed on the page) and a Unix time (which is used to keep track of posts on the server).</span>

    <p>I was able to make a rich, attractive interface easily with the help of <a href="http://materializecss.com/">Materialize</a>, a CSS/JavaScript framework that's based on Google's Material Design. With it, I can give elements structure, animation, and color simply by adding CSS classes. Animated AJAX status indicators are also easy to add. I found that it's a perfect resource for making quick interfaces to test server functionality.</p>

    </div>

</section>