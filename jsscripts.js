

$(document).ready(function() {
    $('#intro').show();
    $('#robin').show();
    $("a.link").click(function(e) {
    e.preventDefault();
    $('.content div').fadeOut('slow');
    $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
