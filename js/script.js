

(function(){


    'use strict';

    var $projects = $('.projects');


    $projects.isotope({
        itemSelector: '.item',
        filter: '.photo',
        layoutMode: 'fitRows'
    });


    

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');

        $(this).addClass('active');

        $projects.isotope({filter: filter});

        
    });         

   
})(jQuery);

