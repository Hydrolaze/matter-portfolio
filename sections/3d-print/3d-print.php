<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Putting my CAD skills to the test</h2>
    </header>
    <div class="copy">
    
    <p>Several years ago when I was beginning college, my major was industrial design. I eventually decided that web design would be a better major due to my affinity for programming, but before that I took a class on computer-aided design. My final project was to design a 3-dimensional item, and optionally have it printed in the school's lab.</p>
    
    <?php single_photo($section_name, false, 'raspberry-Pi-case-01.png', 240, 'right', 'The source DWG file, with the two halves of the case laid out for printing.'); ?>
    
    <p>I had recently purchased a Raspberry Pi, a cheap, super-compact computer that all fits on a single circuitboard. One reason why it's so cheap is because it comes with no outer shell. It's up to the user to protect the circuitry with a case or other enclosure. Being that I hadn't bought a case yet, it seemed to me that creating my own would be the perfect project.</p>
    
    <p>A big concern for me was ventilation; the computer may not have been expensive, but I didn't want it to overheat and burn out. Due to this concern, I decided to play off of the computer's name and design the top of the case with a lattice like a pie.</p>
    
    <p>Using calipers, I meticulously measured every dimension of the device and recreated a model of it in AutoCAD. Then using this model, I created a shell with a groove to hold the board and holes for the ports. The lattice was a basic pattern that I tiled and fit into the top and bottom of the shell.</p>
    
    <?php photogrid($section_name, 'completed-print', 2, 3, 'center'); ?>
    
    <p>After setting up the pieces on the file and exporting it to STL format, I had the case protyped in a stereolithography machine. Despite my inexperience, the halves fit around the the case surprisingly well, with only a slight misalignment on the SD card port that I corrected with a razorblade. At a later point I plan on correcting the misalignments and printing a new version in ABS plastic.</p>

    </div>
</section>