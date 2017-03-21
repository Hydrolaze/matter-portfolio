var lastPost = 0,
    updateInterval;

$(document).ready(function () {

    colourCode();

    checkPosts();

    setTimeout(function () {
        updateInterval = setInterval(function () {
            checkPosts(false);
        }, 10000);
    }, 10000);

    $('#submit-post').click(function () {
        var data = $('#post-form').serialize();
        console.log(data);
        $("#post-name, #post-text").val('');

        sendPost(data);
    });

    $('#test-post').click(function () {
        var testData = 'name=Test&post=This+message+is+a+test.';
        sendPost(testData);
    });

    $('#check-post').click(function () {
        checkPosts(true);
    });
});

function colourCode() {
    $('#posts .card').each(function () {
        var posterName = $(this).find('.card-title').html();
        $(this).removeClass('blue-grey').addClass(colour(posterName));
    });
}

function colour(name) {
    var colour;
    switch (name) {
    case 'Test':
        colour = 'orange';
        break;
    case 'Aaron':
        colour = 'indigo';
        break;
    case 'Christian':
        colour = 'deep-purple';
        break;
    case 'Tim':
        colour = 'light-blue';
        break;
    case 'Matt':
        colour = 'teal';
        break;
    case 'Scott':
        colour = 'cyan';
        break;
    default:
        colour = 'blue-grey';
    };
    return colour;
};

function addPost(name, post, date) {
    $('<div class="card ' + colour(name) + ' lighten-1"><div class="card-content white-text"><span class="card-title">' + name + '</span><p class="date white-text"><i class="material-icons tiny">today</i>' + date.toUpperCase() + '</p><p class="post">' + post + '</p></div></div>').prependTo('#posts>div>div');
};

function sendPost(data) {
    $.post('submit-post.php', data, function (json) {
        var response = JSON.parse(json);
        if (response.bytes > 0) {
            Materialize.toast('Post submitted!', 4000);
            addPost(response.name, response.post, response.date);
            lastPost = response.time;
        } else {
            Materialize.toast('Post was not made.', 4000);
        }
    });
};

function checkPosts(userTriggered) {
    $.post('check-post.php', '', function (time) {
        console.log("Last post written at: " + time);
        if (lastPost != time && lastPost != 0) {
            Materialize.toast('New messages!', 4000);
            updatePosts();
        } else {
            if (userTriggered) {
                Materialize.toast('No new posts.', 4000);
            };
        };
        lastPost = time;
    });
};

function updatePosts() {
    $.post('get-posts.php', '', function (posts) {
        if (posts) {
            $('#posts .card').remove();
            $(posts).appendTo('#posts>div>div');
            colourCode();
        };
    });
};