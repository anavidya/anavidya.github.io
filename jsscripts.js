

$(document).ready(function() {
    $('#intro').show();
    $('.content div#details').html($('#robin').html());
    $('.content div').fadeIn('slow');
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
            $('.content div#details').html($('#' + content).html());
            $('.content div').fadeIn('slow');
        
        }
        
    });
});

