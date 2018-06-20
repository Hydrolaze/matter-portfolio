<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>A handbook for future Decorative Services graphic artists.</h2>
    </header>
    
    <div class="copy">
    
    <?php single_photo($section_name, false, 'text-wrapping.png', 720, 'centre', 'Since the pages of this booklet were meant to be inserted into a miniature binder, I defined inside margins in the file that would keep text away from hole punches.'); ?>
    
    <p>During my time as a designer at Decorative Services, I wrote articles that would be used to train future designers in my role. By the time I left my position at the company in May 2017, I had completed articles and diagrams to explain nearly all major tasks involved with my job. The copy wasn't laid out in a format that was printable or clear, however. In order to improve my knowledge of Adobe InDesign for my new job at Mouse Graphics, I decided to rework the copy and diagrams into a booklet for practice.</p>
    
    <?php single_photo($section_name, false, 'calipers-diagram.jpg', 360, 'left', 'I created several detailed diagrams to explain concepts.'); ?>
    
    <p>The text styling and reflow tools in InDesign were essential for this project, as they let me easily lay out copy neatly with consistent formatting. To make it easier to wrap the text content around diagrams and images, I arranged it into two columns.  The diagrams I had previously created were resized in Illustrator to fit the column widths, then exported as PDFs and placed into the columns with text wrapping. I also utilized the page numbering feature, which saved me from having to keep track of numbering whenever I needed to reorder pages. Once I completed the booklet, I was able to quickly generate a table of contents.</p>
    
    <?php photogrid($section_name, 'spreads', 2, 3, 'center'); ?>
    </div>
</section>