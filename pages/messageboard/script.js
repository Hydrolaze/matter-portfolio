$(document).ready(function () {
    $('#submit-post').click(function () {
        var data = $('#post-form').serialize();
        $("#post-name, #post-text").val('');
            

        $.post('submit-post.php', data, function (response) {
            console.log("Response: " + response);
            Materialize.toast('Post submitted!', 4000);
        });
    });
})