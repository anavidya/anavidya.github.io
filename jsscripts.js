

$(document).ready(function() {
    $('#intro').show();
    $('#robin').show();
    $("a.link").click(function(e) {
        e.preventDefault();

        if ($(this).data('rel') == 'NOSQLdb'){
            $('.content div').fadeOut('slow');
            $(".content div").load("NOSQLdb.html");
        }
        else
        {
        $('.content div').fadeOut('slow');
        $('#' + $(this).data('rel')).fadeIn('slow');
        }
    });
});
