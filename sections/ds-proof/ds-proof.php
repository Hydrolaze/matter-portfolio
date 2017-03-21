<?php
    $section_name = basename(__FILE__, '.php');
    include('../../includes/functions.inc.php');
    include('../../includes/works_header.inc.php');
?>
        <h2>Improving the proofing process</h2>
    </header>
    
    <div class="copy">
    
    <p>Decorative Services is a contract printer, so they need to be able to show their customers what they will be printing, where, and with which method. This is where the proof sheet comes in; it shows customers our understanding of how we are printing and allows us to nail down specifics.</p>
    
    <?php photogrid($section_name, 'proofs', 4, 3, 'center'); ?>
    
    <p>When I began working at Decorative Services, the proof sheet was very simplistic and informal, there was no standardized way to visually communicate concepts, so this was left up to whomever was creating the proof. The result was often that proofs were improvized by whomever was creating them, often leaving them unclear and inconsistent to people trying to come back to the proofs to reference on repeat orders.</p>
    
    <?php single_photo($section_name, false, 'deco-serv-resource-tag-example.png', 720, 'centre', 'Modular elements create clean, recognisable designs.'); ?>
    
    <p>I knew that standardized design elements would create more clarity and recognition, and this would prevent us from needing to answer as many questions about the proofs, streamlining the proofing process. I was also careful to make sure that the design elements mirrored those of the website, to further enhance the clarity and cohesion of the design.</p>
    
    <?php single_photo($section_name, false, 'deco-serv-resources.png', 600, 'centre', 'The entire resources sheet with all of the elements I use on a day-to-day basis for proofing.'); ?>
    
    <p>To achieve this I created a structured page template that contained the critical information for the proofs, then a resources sheet that contains the modular elements that form the informational tags. Thanks to this new system, the vast majority of orders go from start to finish without clients needing to ask clarification on anything on the proof.</p>

    </div>

</section>