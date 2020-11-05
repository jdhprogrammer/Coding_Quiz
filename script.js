let introPage = document.querySelector("#introPage");
let questionPage = document.querySelector("#questionPage");
let gameOverPage = document.querySelector("#gameOverPage");

let startQuizBtn = document.querySelector("#startQuizBtn");
let finalScore = document.querySelector("#finalScore");

let userNameInput = document.querySelector("#userName-text");
let userNameForm = document.querySelector("#userName-form");
let submituserNames = document.querySelector("#submituserNames");
let userNameCountSpan = document.querySelector("#userName-count");
let userNameList = document.querySelector("#userName-list");
let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");

let question = document.querySelector("#question");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");

let questionArray = [{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console log"],
    correctAnswerIndex: 3
}, {
    question: "The condition in an if / esle statement is enclosed within _____.",
    answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswerIndex: 2
}, {
    question: "Arrays in JavaScript can be used to store _____",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswerIndex: 3
}, {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1. quotes", "2. curly brackets", "3. commas", "4. parentheses"],
    correctAnswerIndex: 0
}, {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. alerts", "3. booleans", "4. numbers"],
    correctAnswerIndex: 1
}]

let i = 0;
let answerChoice = "";
let correctAnswer = "";

let listOfAnswers = [];
let userNames = [];
let highScores = [];

let quizTimerStart = 75;
let quizTimerFinish = document.querySelector("#countdown").textContent;

function codingQuiz() {

    let currentQuestion = questionArray[i];
    question.textContent = currentQuestion;
    answer1.textContent = currentQuestion.answers[0];
    answer2.textContent = currentQuestion.answers[1];
    answer3.textContent = currentQuestion.answers[2];
    answer4.textContent = currentQuestion.answers[3];
    correctAnswer = currentQuestion.correctAnswerIndex;

}

$(".answer").click(function() {
    answerChoice = this.value;

    console.log(this.value);
    console.log(answerChoice);
    console.log(correctAnswer);

    if (answerChoice === correctAnswer) {
        correct.setAttribute("style", "display: inline-block;");
        wrong.setAttribute("style", "display: none;");
    } else if (answerChoice !== correctAnswer) {
        // quizTimerCount = quizTimerCount - 10;
        // console.log(quizTimerCount);
        correct.setAttribute("style", "display: none;");
        wrong.setAttribute("style", "display: inline-block;");
    }

    return i = i + 1, codingQuiz();
});


function quizTimer() {

    introPage.setAttribute("style", "display: none;")
    questionPage.setAttribute("style", "display: inline-block;")
        // quizTimerCount = quizTimerStart;
    let quizTimerCount = quizTimerStart
    timer = setInterval(function() {

        $("#countdown").html(quizTimerCount--);
        if (quizTimerCount === -1) clearInterval(timer)

        if (quizTimerCount === -1) {

            questionPage.setAttribute("style", "display: none;");
            gameOverPage.setAttribute("style", "display: block;");
        }

        if (listOfAnswers.length === 5) clearInterval(timer)
    }, 1000);
    finalQuizTime = quizTimerCount;
    finalScore.textContent = finalQuizTime + 1;
};

function storeHighscores() {
    // Sort highScores in Descending order - most time left is highest score
    highScores.sort((a, b) => b - a);
    // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

startQuizBtn.addEventListener("click", codingQuiz);
startQuizBtn.addEventListener("click", quizTimer);

// When form is submitted...
userNameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(userNameCountSpan);
    let userNameText = userNameInput.value.trim().toUpperCase();
    let userNames = [];
    // Return from function early if submitted userNameText is blank
    if (userNameText === "") {
        return;
    };

    // Add new userNameText to userNames array, clear the input
    userNames.push(userNameText);
    console.log(userNames);
    userNameInput.value = "";

    generateNewHighScore();

    function generateNewHighScore() {

        // Clear userNameList element and update userNameCountSpan
        userNameList.textContent = "";
        // userNameCountSpan.textContent = userNames.length;

        let newPlayer = document.createElement("li");
        let userNumber = userNames.length;
        let lastUser = userNames[(userNames.length - 1)];
        let userScore = finalScore.textContent;
        userNameCountSpan.textContent = userNames.length;

        newPlayer.textContent = userNumber + ". " + lastUser + " -- " + userScore;
        userNameList.appendChild(newPlayer);

        let newHighscore = { user: lastUser, score: userScore, stats: ". " + " " + this.user + " -- " + this.score }
        highScores.push(newHighscore);

        storeHighscores();

    };
});