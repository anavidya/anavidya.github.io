

$(document).ready(function() {
    $('#intro').show();
    document.getElementById("robin").style.visibility = 'visible';
    $("a.link").click(function(e) {
    e.preventDefault();
    $('.content div').fadeOut('slow');
    $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
