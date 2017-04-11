<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>A fresh start for the Decorative Services brand</h2>
    </header>
    
    <div class="copy">
    <p>When I began working at Decorative Services, the logo that they used was very simple. There was no colour palette, no typographic specifications, and no design elements, so when I was asked to rework the company’s branding, I had a clean slate with nothing but a simple logo and the colour orange.</p>
    
    <?php single_photo($section_name, false, 'old-DS.png', 360, 'left'); ?>

    <p>To represent the Decorative Services brand well, I knew that the branding needed to represent the appearance and quality of our work. Since the work that we do is the printing of other logos, the graphical style I used would have to reflect the sort of logos that we print. Fortunately I had plenty of inspiration to work with, having worked with hundreds of modern, trendy logos and branding guides from the high profile clients around the world that we print for.</p>

    <?php single_photo($section_name, false, 'DS-swatches.png', 360, 'left'); ?>
   
    <p>Firstly, I determined the colour scheme. I picked a vibrant teal to supplement the classic orange, and range of bluish greys served as neutral tones to dilute the bright main colours. Since we work extensively with the Pantone colour matching system, I was also sure to make sure that every colour had a Pantone equivalent so that colours could be matched between web, print, and silkscreening.</p>

    <p>I wanted to give the logo more visual interest than it had before, so I introduced dimension and gradients into the design.  The upward-angled tilt of the logo was intended to give it an optimistic feeling, as a reassurance to the many customers who come to us with urgent rush orders.</p>

    <?php photogrid($section_name, 'logo-versions', 3, 3, 'center'); ?>
    
    <span class="caption">To ensure that the logo could be used in any printing application, I created many different versions, with different layouts and colour types.</span>

    <p>Since I created the branding, I have referred back to it many times to create branding material such as the business cards and advertisement seen below.</p>

    <?php single_photo($section_name, false, 'DS-bizcard.png', 720, 'centre'); ?>
    
    <span class="caption">Business cards I created for the sales representatives at the company.</span>

    <?php single_photo($section_name, false, 'DS-ad.png', 720, 'centre'); ?>
    
    <span class="caption">An advertisement for the company that ran in the 2016 PPAI catalog.</span>
    </div>
</section>