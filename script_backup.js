for (let i = 0; i < questionArray.length; i++) {
    const currentQuestion = questionArray[i];

    question = currentQuestion.question;
    answer1 = currentQuestion.answers[0];
    answer2 = currentQuestion.answers[1];
    answer3 = currentQuestion.answers[2];
    answer4 = currentQuestion.answers[3];
    let correctAnswer = currentQuestion.correctAnswerIndex;

    $(".answer").click(function() {
        answerChoice = this.value;

        console.log(this.value);
        console.log(answerChoice);
        console.log(correctAnswer);

        if (answerChoice === correctAnswer) {
            correct.setAttribute("style", "display: inline-block;");
            wrong.setAttribute("style", "display: none;");
        } else if (answerChoice !== correctAnswer) {
            quizTimerCount = quizTimerCount - 10;
            console.log(quizTimerCount);
            correct.setAttribute("style", "display: none;");
            wrong.setAttribute("style", "display: inline-block;");
        }
    });

    // $(".answer").click(function() {

    // })
}

finalScore.textContent = quizTimerCount + 1;
clearInterval(timer)


function codingQuiz() {

    for (let i = 0; i < questionArray.length; i++) {
        const currentQuestion = questionArray[i];

        question = currentQuestion.question;
        answer1 = currentQuestion.answers[0];
        answer2 = currentQuestion.answers[1];
        answer3 = currentQuestion.answers[2];
        answer4 = currentQuestion.answers[3];
        let correctAnswer = currentQuestion.correctAnswerIndex;



        $(".answer").click(function() {
            answerChoice = this.value;

            console.log(this.value);
            console.log(answerChoice);
            console.log(correctAnswer);

            if (answerChoice === correctAnswer) {
                correct.setAttribute("style", "display: inline-block;");
                wrong.setAttribute("style", "display: none;");
            } else if (answerChoice !== correctAnswer) {
                quizTimerCount = quizTimerCount - 10;
                console.log(quizTimerCount);
                correct.setAttribute("style", "display: none;");
                wrong.setAttribute("style", "display: inline-block;");
            }
        });

        // $(".answer").click(function() {

        // })

    };
};


function waitListener(Element, ListenerName) {
    return new Promise(function(resolve, reject) {
        var listener = event => {
            resolve(event);
        };
    });
}

async function codingQuiz() {

    for (let i = 0; i < questionArray.length; i++) {
        const currentQuestion = questionArray[i];

        question = currentQuestion.question;
        answer1 = currentQuestion.answers[0];
        answer2 = currentQuestion.answers[1];
        answer3 = currentQuestion.answers[2];
        answer4 = currentQuestion.answers[3];
        correctAnswer = currentQuestion.correctAnswerIndex;

        let element = $(".answer");

        await waitListener(element, "click")
            .then(function answerResults() {
                answerChoice = this.value;

                console.log(this.value);
                console.log(answerChoice);
                console.log(correctAnswer);

                if (answerChoice === correctAnswer) {
                    correct.setAttribute("style", "display: inline-block;");
                    wrong.setAttribute("style", "display: none;");
                } else if (answerChoice !== correctAnswer) {
                    quizTimerCount = quizTimerCount - 10;
                    console.log(quizTimerCount);
                    correct.setAttribute("style", "display: none;");
                    wrong.setAttribute("style", "display: inline-block;");
                };
            });
    }
    console.log("last Question");
};