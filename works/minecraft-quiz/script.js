var idArr = [],
    qArr = [],
    qId, draggedId, state = "Begin!",
    qNumber = 0,
    results = [];

var gridArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];

$(document).ready(function () {

    loadIdIndex(idArr);
    loadQuestionIndex(itemArr);
    loadTiles();
    changeState("Begin!");

    $('#button').click(function () {

        switch (state) {
        case "Begin!":

            question();

            break;
        case "Submit":

            var obj = getObj(qId),
                type = obj.type,
                correct;

            if (type == "form") {

                correct = formCompare(qId);

            } else if (type == "list") {

                correct = listCompare(qId);

            };

            reset();
            results[qNumber - 1] = correct;
            qResult(correct);

            changeState("Continue");

            break;
        case "Continue":

            if (qNumber <= 5) {

                question();

            } else {

                gResult();

            };

            break;
        case "Play again?":

            results = [];
            question();

            break;
        };

    });

});

function rInt(max, min) {

    min = min || 1;
    var rng = max - min;
    var integer = Math.round(Math.random() * rng + min);
    return integer;

};

function getObj(id) {

    var index = idArr.indexOf(id);
    var obj = itemArr[index];
    return obj;

};

function logArray(arr) {

    var logStr = "Array: ";

    for (e in arr) {

        logStr = logStr.concat(arr[e].toString() + " ");

    };

    console.log(logStr);

};

function changeState(string) {

    state = string;
    $('#button').html(string);

};

function loadIdIndex(idArr) {

    console.log("Indexing itemArr...");

    for (i in itemArr) {

        idArr[i] = itemArr[i].id;

        console.log(itemArr[i].name + ': ' + idArr[i]);

    };

};

function loadQuestionIndex(itemArr) {

    for (i in itemArr) {

        var type = itemArr[i].type;

        if (type == "form" || type == "list") {

            qArr.push(itemArr[i].id);

        };

    };

};

function loadTiles() {

    for (i in itemArr) {

        var t = new tile(itemArr[i].id);

        $('#tray').append(t.elem);

    };

    $('.tile').mousedown(function () {

        draggedId = parseInt($(this).attr('id').substring(2));

        console.log("Clicked tile's id is " + draggedId);

    });

    $('.tile').draggable({

        helper: 'clone', //clones a dragged tile

        stop: function (e, ui) {

            var tile = ui.helper;
            var tilePos = ui.offset;
            var lowDist, //the lowest distance so far calculated from the tile to a slot
                lowIndex; //the index of the slot that lowDist was calculated for

            $('.slot').each(function (i, elem) {

                var slotPos = $(elem).offset();

                var xDist = Math.abs(tilePos.left - slotPos.left);
                var yDist = Math.abs(tilePos.top - slotPos.top);
                var dist = Math.sqrt((xDist ^ 2) + (yDist ^ 2));

                if (i == 0 || dist < lowDist) {
                    lowDist = dist;
                    lowIndex = i;
                };

            });

            if (lowDist < 50) {

                var obj = getObj(draggedId),
                    source = obj.imgurl,
                    name = obj.name;

                $('#slot' + (lowIndex + 1) + ' img').attr({
                    src: source,
                    alt: name
                });

                //set the grid array with the dragged tile's id
                if (lowIndex > 5) {

                    gridArr[2][lowIndex - 6] = draggedId;

                } else if (lowIndex > 2) {

                    gridArr[1][lowIndex - 3] = draggedId;

                } else {

                    gridArr[0][lowIndex] = draggedId;

                };

            };

        }

    });

};

function tile(id) {

    this.id = id;

    //looks up the id and sets name
    var obj = getObj(id);
    this.name = obj.name;
    this.elem = '<div id="id' + this.id + '" class="tile frame"><img src="' + obj.imgurl + '" alt="' + this.name + '"></div>';
    /*this.elem.css({
            
            'width': '48px', 
            'height': '48px'
                    
        });*/
    //$( ".hello" ).clone().appendTo( ".goodbye" );

};

function question() {
    //picks a recipe to display in target

    qNumber++;

    qId = qArr[rInt(qArr.length)];

    var obj = getObj(qId),
        source = obj.imgurl,
        name = obj.name;

    $('#target img').attr({
        src: source,
        alt: name
    });

    changeState("Submit");

};

function reset() {
    //resets the grid and target for the next question

    $('#target img').attr({
        src: '',
        alt: ''
    });

    $('.slot img').attr({
        src: '',
        alt: ''
    });

    gridArr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]];

};

function qResult(correct) {

    if (correct) {

        alert("You got it correct!");

    } else {

        alert("Sorry, wrong answer.");

    };

};

function gResult() {

    var resultStr = "";

    for (w = 0; w < results.length; w++) {

        var q = w + 1;
        var line = "Question " + q + ": " + result(results[w]) + "\n";

        resultStr = resultStr.concat(line);

    };

    alert("Here are your results:\n" + resultStr);

    changeState("Play again?");

};

function result(correct) {

    var result = "";

    if (correct) {

        result = "correct";

    } else {

        result = "incorrect";

    };

    return result;

};

function listCompare(id) {

    //a boolean to set false if the user's input is ever found incorrect
    var correct = true;

    //gets index of the id passed to this function
    var obj = getObj(id);

    //gets the list of items in the answer recipe
    var answer = obj.recipe.slice(0);
    logArray(answer);

    //gets the list of items that the player inputted
    var input = buildList(gridArr);
    logArray(input);

    //compares the items in the answer list to the player's input list
    for (item in answer) {

        var search = input.indexOf(answer[item]);


        if (search == -1) {
            //if a answer item is not found in the player's list, set the comparison's result to false

            correct = false;

        } else {
            //if a answer item is found in the player's list, set that item to zero in both the answer list and the player's input list

            answer[item] = 0;
            input[search] = 0;

        };

    };

    logArray(answer);
    logArray(input);

    for (e in input) {

        if (input[e] != 0) {

            correct = false;

        };

    };

    return correct;

};

function buildList(arr) {

    var list = [];

    for (r in arr) {

        var row = arr[r];

        for (e in row) {

            if (row[e] != 0) {

                list.push(row[e]);

            };

        };

    };

    return list;

};

function formCompare(id) {
    //compares the user's input to the recipe of id

    //a boolean to set false if the user's input is ever found incorrect
    var correct = true;

    //gets index of the id passed to this function and then gets the answer array
    var answer = getObj(id).recipe;

    //gets the user's input array and trims empty space
    var input = trimZeros(gridArr);

    for (r in answer) {

        var row = answer[r];

        for (e in row) {

            if (answer[r][e] != input[r][e]) {

                correct = false;

            };

        };

    };

    return correct;

};

function trimZeros(arr) {

    var trim = [];
    for (r in arr) {

        trim[r] = arr[r];

    };
    var top = true,
        right = true,
        bottom = true,
        left = true;

    //check for nonzero ids in the top row
    for (e in trim[0]) {
        if (trim[0][e] != 0) {
            top = false;
        };
    };

    //check for nonzero ids in the right column
    for (e in trim) {
        if (trim[e][trim.length - 1] != 0) {
            right = false;
        };
    };

    //check for nonzero ids in the bottom row
    for (e in trim[trim.length - 1]) {
        if (trim[trim.length - 1][e] != 0) {
            bottom = false;
        };
    };

    //check for nonzero ids in the left column
    for (e in trim) {
        if (trim[e][0] != 0) {
            left = false;
        };
    };

    //shift out the top row in the array if all values in it are zero  
    if (top) {
        trim.shift();
    };

    //splice out the right column in the array if all values in it are zero
    if (right) {
        for (row in trim) {
            trim[row].splice(trim.length - 1, 1);
        };
    };

    //splice out the bottom row in the array if all values in it are zero  
    if (bottom) {
        trim.splice(trim.length - 1, 1);
    };

    //splice out the left column in the array if all values in it are zero
    if (left) {
        for (row in trim) {
            trim[row].splice(0, 1);
        };
    };

    return trim;

};