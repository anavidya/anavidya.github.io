

$(document).ready(function() {
    $('#intro').show();
    $('#robin').show();
    $("a.link").click(function(e) {
        $('#robin').hide();
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
            $('#details').html($(content).html());
            $('.content div').fadeIn('slow');
        
        }
        
    });
});

