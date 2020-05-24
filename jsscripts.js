

$(document).ready(function() {
    $('#intro').show();
    $('#robin').show();
    $("a.link").click(function(e) {
        e.preventDefault();
        var content = ($(this).data('rel'));
        if ($(this).data('rel') == 'NOSQLdb'){
            $('.content div').fadeOut('slow');
            $(".content div").load("NOSQLdb.html");
            $(".content div").show()
        }
        else
        {
        $('.content div').fadeOut('slow');
        $('#' + $(this).data('rel')).fadeIn('slow');
        }
        if ($(this).data('rel') == 'test'){
            $('.content div').fadeOut('slow');
            $('#details').html($(content).html());
            $('.content div').fadeIn('slow');
        return false;
        }
    });
});
