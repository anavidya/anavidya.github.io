<script>
$(".link").click(function(e) {
    alert('clicked');
    e.preventDefault();
    $('.content div').fadeOut('slow');
    $('#' + $(this).data('rel')).fadeIn('slow');
});
</script>
