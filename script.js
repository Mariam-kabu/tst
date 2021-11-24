$('#start').on('click', () => {
    $('#subWrapper').remove();
    game.start();
})

let question = [{
    question: "some question 1",
    answers: [
        "answer1",
        "answer2",
        "answer3",
    ],
    correctAnswer: "answer3",
},
{
    question: "some question 2",
    answers: [
        "answer1",
        "answer2",
        "answer3",
    ],
    correctAnswer: "answer1",
},
{
    question: "some question 3",
    answers: [
        "answer1",
        "answer2",
        "answer3",
    ],
    correctAnswer: "answer2",
},
{
    question: "some question 4",
    answers: [
        "answer1",
        "answer2",
        "answer3",
    ],
    correctAnswer: "answer3",
},
]

let game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setIneterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2> Time Remaning: <span id="counter">60</span>seconds</h2>');
        for (let i = 0; i < question.length; i++) {
            $('#subWrapper').append('<h2>' + question[i].question + '</h2>');
            for (let j = 0; j < question[i].answers.length; j++) {
                $('#subWrapper').append("<h2><input type='radio' name='question-" + i + "'value='</h2>" + question[i].answers[j] + "'>" + question[i].answers[j])
            }
        }
    },
    done: finction() {
        $,each($('input[name="questions- 0"]:checked'),
            function () {
                if ($(this).val() == question[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
    },
    done: finction() {
        $,each($('input[name="questions- 0"]:checked'),
            function () {
                if ($(this).val() == question[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
    },
    done: finction() {
        $,each($('input[name="questions- 0"]:checked'),
            function () {
                if ($(this).val() == question[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
    }
}
result: function() {
    clearInterval(timer);
    $('#subWrapper h2').remove();
    $('#subWrapper').append("<h3>Game Over!</h3>");
    $('#subWrapper').append("<h3>correct answers:" + this.correct + "</h3>");
    $('#subWrapper').append("<h3>incorrect answers:" + this.incorrect + "</h3>");
}
}