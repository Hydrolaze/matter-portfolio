$(document).ready(function () {
    $('#submit-post').click(function () {
        var data = $('#post-form').serialize();
        $("#post-name, #post-text").animate({
            color: '#ECEFF1'
        }, 400, swing, function () {
            $(this).val('').css({color: "black"});
        })
            

        $.post('submit-post.php', data, function (response) {
            console.log("Response: " + response);
            Materialize.toast('Post submitted!', 4000);
        });
    });
})