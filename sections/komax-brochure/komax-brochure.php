<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
    <h2>Challenging typesetting projects from an industrial manufacturer.</h2>
    </header>
    <div class="copy">
        <p>My job at Mouse Graphics put my InDesign skills to the test on many occasions. One such occasion was a project that I worked on for Komax Systems, a company that manufactures industrial fluid mixing units. They have been around for some time, and as a result many of their brochures were outdated, made back in a time before the ease and power of Adobe software.</p>

        <?php single_photo($section_name, false, 'old-brochure.png', 320, 'right', 'The retro styling of the brochures were refreshing to work with.') ?>

        <p>Komax was not yet ready to commit to a full redesign of their advertising materials, so my task was to simply recreate the old brochures in a modern format. I was given all of the diagrams and art assets that they could locate, and asked to complete the project by a deadline. Realizing the scope of the project, I created a timeline of smaller tasks so that I could be sure to not fall behind.</p>
        
        <?php single_photo($section_name, false, 'typesetting.png', 320, 'left', 'I really dug into the typographic settings to match the appearance as closely as possible to the original.') ?>
        
        <p>I placed the scans of the old brochures in one layer, and piece by piece, I built the new versions in a layer atop them. The modern versions I had of Futura and Helvetica aligned perfectly with the old lettering in many places, but where they didn't, I adjusted tracking, line height, and other typographic features until the text laid out nicely.</p>

        <p>Some old diagrams were simply too low-quality to use, and I tasked myself with recreating them in vectors for perfect sharpness. I paid attention to the content I was manipulating as I worked, ensuring that the intended meanings were as clear as they were before, or even more so if I found opportunities for improvements.</p>
        
        <?php photogrid($section_name, 'recreations', 2, 3, 'center'); ?>
        
        <p>In the end, the brochures ended up looking professional and clean, with vector text and high-resolution images befitting the era of modern computer graphics. Mouse has recreated several Komax brochures in this manner, slowly refreshing the dingy old brochures that the company had relied on for so long.</p>
        
        <p>Most of my work for Komax was recreations, but one interesting project stood out. Komax was expanding into German markets, and their salespeople needed tools to reach those who couldn't read the English brochures. I was given a list of translations from a brochure I had previously recreated, and asked to adapt the brochure for German audiences. I felt I was the perfect designer for this project, as I studied German all throughout middle and high school.</p>
        
        <?php single_photo($section_name, false, 'dampfheizung.png', 320, 'left', 'I was very glad to use my German knowledge, which I hadn\'t done since high-school.') ?>
        
        <p>The work was mostly straightforward copying and pasting, but the language itself caused problems. Sentences are generally the same length in German and English, but the German language tends to contain long compound words, which interfered with line wrapping in many places. I needed to adjust blocks of text in many places to allow these words to fit into lines or hyphenate if necessary.</p>
        
        <p>My classes in school were put to good use as well, as I was able to identify several places where even the translator had made mistakes. I ensured that all nouns followed the capitalization rules, and that punctuation in the German numbers (where commas and periods switch roles) were typed correctly. After a brief review process, my "Statische Dreifach-Mischer Broschüre" was approved and used to reach customers across the Atlantic.</p>
        
    </div>

    </section>
