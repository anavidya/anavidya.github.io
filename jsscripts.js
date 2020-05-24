

$(document).ready(function() {
    $('#intro').show();
    $('#robin').show();
    $("a.link").click(function(e) {
        e.preventDefault();

        if $(this).data('rel') = 'NOSQLdb'{
            $("#content div").load("NOSQLdb.html");
        }
        $('.content div').fadeOut('slow');
        $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
