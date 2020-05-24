

$(document).ready(function() {
    $("a.link").click(function(e) {
    e.preventDefault();
    $('.content div').fadeOut('slow');
    $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
