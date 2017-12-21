
$( document ).ready(function() {
    console.log( "ready!" );
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
});
