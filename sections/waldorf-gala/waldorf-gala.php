<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Helping a fresh, young coffee company grow.</h2>
    </header>
    
    <div class="copy">
    
    <p>During my time at Mouse Graphics, I was asked by a representative at Kohana Coffee to create an flier advertisement for them. I was supplied with a suite of graphic assets and a branding guide to craft into a general-purpose advertisement that represented the quality and selection of Kohana's products. Once completed, the design would be printed on our company's digital presses.</p>
    
    <?php photogrid($section_name, 'brand-guide', 3, 4, 'center'); ?>

    <p>The company's branding guides were very thorough and had clear instructions on fonts, colors, and graphics. Most important to the company's branding is a beautiful, hand-drawn illustration of their namesake, the flowers of the coffee tree. The company colors compliment the illustration well, so it serves as an attractive backdrop to simple compositions.</p>

    <p>Since a major goal of the project was to showcase the high-res product photos, I limited the usage of the illustration to the header, using a flowery branch to visually balance the logo, brand name, and tagline. The company does not have standard verbiage guidelines, so I did a bit of research on their website to get a feel for what sort of phrases might represent the company best. I learned that the founder began the company after she made a trip to Hawaii, where she discovered the smooth boldness of the coffee grown and roasted on the islands. With this information, I wrote a few phrases that would communicate this all succinctly and in an appealing way.</p>
    
    <p>I made a basic arrangement of the product photos and social media information in a small footer, then sent off a proof with an explanation of my design decisions. The client loved it overall, but gave me a few pointers on wording.</p>

    <?php single_photo($section_name, false, 'Kohana-flier-proof-v1.jpg', 320, 'centre', 'The product photo layout is rough because I wasn\'t sure yet if the client would like the rest of the layout.'); ?>

    <p>The header slogan was changed to reflect the fact that the company sources coffee from places other than Hawaii, and the word "canned" was scrapped in favor of the more appealing "ready-to-drink". I made some changes to the product image layout as well, giving some depth to the arrangement and giving emphasis to the company's most popular flavors. After sending the second and final proof, the client gave approval and the fliers went to be printed digitally on an appropriately-weighted coated stock.</p>
    
    <p>From what I heard, the reception of the fliers was great and Kohana coffee continues to be a regular customer at Mouse Graphics today.</p>

    <?php single_photo($section_name, false, 'Kohana-flier-print.jpg', 320, 'centre', false); ?>
    
    </div>

</section>