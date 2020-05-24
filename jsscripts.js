

$(document).ready(function() {
    $('a').click(function() {
        alert('ho ho ho');
    });
    $("a.link").click(function(e) {
    e.preventDefault();
    $('.content div').fadeOut('slow');
    $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
