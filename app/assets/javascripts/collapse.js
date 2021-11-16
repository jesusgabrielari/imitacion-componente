$(document).on('turbolinks:load', function () {
    $('#showButton').click(function () {
        $('#collapseExample').show('fast');
    });
    $('#hideButton').click(function () {
        $('#collapseExample').hide('fast');
    });
})