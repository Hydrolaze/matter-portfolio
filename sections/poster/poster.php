<?php
    $section_name = 'poster';
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
    <h2>A thorough exercise in poster design</h2>
    </header>
    <div class="copy">
        <p>My graphic design class was particularly informative. I learned how to explore different options and work relentlessly on design drafts until I found an arrangement that worked. My final project was a poster design for a hypothetical design competition, and I was given content to typeset and arrange into a coherent and attractive poster.</p>

        <p>What I found most challenging about this assignment was the large amount of text I needed to include. It was easily the wordiest design I had ever created; I need to not only include the judging categories, but several long paragraphs of submission instructions. I needed to give all of this content a clear hierarchy and arrangement, while still bringing focus to the critical information such as the title and date.</p>

        <p>I started work with the title composition. It’s a critical part of any poster design, so it needed to be well thought out. I tried out a variety or type styles, colours, and structures. Eventually I decided on a blocky, heavy font that I would use as a structural element, and similarly heavy script font to accompany it.</p>

        <?php photogrid($section_name, 'part1', 2, 4, 'top'); ?>

        <p>Next I typeset the text content and created some layouts. I found an excellent royalty free image that had a swirling morass of colours. It would be attention grabbing and the plain bold title would stand out well against it.</p>

        <?php photogrid($section_name, 'part2', 2, 4, 'top'); ?>

        <p>The fine text would of course not stand out well against the noisy background, so I created a strip along the side of the poster that I desaturated and overlaid with a translucent grey. The thick, blocky title text served as a good boundary between the fine text and the competition categories.</p>

        <?php photogrid($section_name, 'part3', 2, 4, 'top'); ?>

        <p>At the end I decided to place the organisation name and slogan within a large colour block. Slightly rounded corners reflected the rounding of the title text, and the orange colour created unity with the background. The layout of the poster created a logical procession between the elements that reflected their importance. The eye begins at the large block at the base with the organisation’s name, extends up the title, and then branches out into the details and contest categories.</p>

       <?php single_photo($section_name, false, 'poster-final.jpg', 720, 'centre', 'I was proud to have my teacher recognize my design as one of the best in class.'); ?>
    </div>

    </section>
