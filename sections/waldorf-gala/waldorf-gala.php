<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Promoting a charity gala for the benefit of education.</h2>
    </header>
    
    <div class="copy">
    
    <p>A regular client of Mouse Graphics is the Waldorf School of Orange County. They hold an annual charity gala and auction, and for the 2018 event I was asked to create a design for a flier, web graphic, and vinyl banner. The theme for this event was "Around the World", and the school's representative supplied me with a painted globe image to based my designs around.</p>

    <p>To compliment the painterly look of the globe, I decided to go with a felt-textured paper background. To compliment the blues and greens of the globe, I made the background into a light ivory paper by overlaying a sepia color set to multiply blend. I wanted the vibrant colors of the globe to stand out though, so the multiply overlay included a white radial gradient around the globe so that it was bordered with pure white.</p>
    
    <?php single_photo($section_name, false, 'text-on-globe.png', 320, 'right', 'I loved the way this loopy script looked, but the client wanted something more upright.') ?>

    <p>To drive the theme home, I placed the title text ("Around the World") over the globe and created a white glow around the text to ensure legibility. The text in the design was also colored with dominant colors from the globe in order to create unity. </p>

    <?php single_photo($section_name, false, 'flier-draft-v2.png', 320, 'left', 'The color stripe emphasized the mission statement, which I felt wasn\'t clear from the event\'s title.') ?>

    <p>I began with the flier design since it was the most normally sized piece in the project. Once it was approved however, I began adapting it into the banner and web graphic. Both of these designs had their own problems that I needed to solve.</p>
    
    <p>The web banner was landscape-oriented to fit at the top of a webpage, so I needed to adjust the layout accordingly. The header graphic moved to the left, and the mission statement filled up the remaining space on the right side. I was also careful to save any designs for this web graphic in the correct RGB color space so that the colors could be as vibrant as possible.</p>
    
    <?php single_photo($section_name, false, 'drop-shadow-web-banner.png', 600, 'centre', 'To give my client the freedom to choose whichever background they pleased, I created the web banner with a transparent background and drop shadow.') ?>
    
    <p>The globe painting that I was provided with was not a high enough resolution to use on the large 34" &times; 40" banner. I informed the client of this, but she was not able to get in touch with the original artist to acquire a high resolution scan before I began the banner design. Instead of compromising the design I had already created by scaling the globe down, I came up with a workaround.</p>
    
    <p>I realized that since the globe already had a painted appearance, I could increase the detail in it by applying a brushstroke filter in Photoshop. Now instead of blurry pixels, people viewing the banner up close would see fine brushstrokes in the globe. The globe was linked into my other two design files as well, so the new filtered globe painting was conveniently relinked automatically into the flier and web banner.</p>
    
    <?php single_photo($section_name, false, 'painting-filter-comparison.png', 600, 'centre', 'The effect wasn\'t perfect, but it was better than looking at a blur of colors.') ?>
    
    <p>The client was very pleased with this approach, and after a few more copy revisions, the three designs were approved and sent to press well before the date of the gala.</p>

    <?php photogrid($section_name, 'finals', 3, 3, 'center'); ?>
    
    </div>

</section>