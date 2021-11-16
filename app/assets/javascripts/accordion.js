$(document).on('turbolinks:load', function () {
    $('#headingOne').click(function () {
        $('#collapseOne').slideToggle('slow');
    });
    $('#headingTwo').click(function () {
        $('#collapseTwo').slideToggle('slow');
    });
    $('#headingThree').click(function () {
        $('#collapseThree').slideToggle('slow');
    });
})