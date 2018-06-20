<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Designing a program and catalog for a charity auction.</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, false, 'gala-program-booklet.jpg', 720, 'centre', 'I exported the pages of the booklets as booklet spreads so that they could be saddle stapled.') ?>
    
    <p>As a part of the Waldorf School of Orange County’s 2018 charity auction, I was asked to do the layout for the event program booklet. I would be supplied with copy, images, and a rough mockup of the layout. Although I had done several booklet layouts before, this project would prove to be a challenge due to the tight timeline.</p>
    
    <p>I began by laying out the general event information, using a format the client suggested with titles and associated copy being on opposite sides of a vertical rule.</p>

    <?php single_photo($section_name, false, 'font-change.png', 320, 'left', 'The original font was used for previous event materials, and the new font was from the school\'s branding.') ?>
   
    <p>After receiving the first draft, the client decided that they wanted to switch fonts. Thanks to the text styles I defined in my design file, the revisions only took a few minutes. Since the event was both a charity event and an auction, there were also portions of the program devoted to sponsored advertisements and auction listings.</p>
    
    <p>Images, logos, and ads were linked into image frames, and text content was adjusted to flow around these elements as necessary. In the case of the auction listings, the copy was of wildly varying lengths, so I overrode my own text styles as necessary to fit each lot's info into its own half-page area.</p>

    <p>A few pages contained lists of the names of volunteers. For these, I inserted tables and removed all border styles so they would appear as neatly aligned lists.</p> 
    
    <?php single_photo($section_name, false, 'map-cover.jpg', 320, 'right', 'Fortunately, royalty-free vector maps are easy to come by.') ?>
    
    <p>With all the interior content laid out, the final step was to create a cover. The client initially proposed that I create a composition of a world map in a golden color from the school branding. I designed this composition to stretch across the whole cover spread, so that the entire globe would be visible when the booklet was opened. Other staff at the school wanted the cover to match the previously printed fliers however, so the design was ultimately scrapped.</p>

    <?php photogrid($section_name, 'spreads', 2, 3, 'center'); ?>
    
    </div>

</section>