let introPage = document.querySelector("#introPage");
let questionPage = document.querySelector("#questionPage");
let gameOverPage = document.querySelector("#gameOverPage");

let startQuizBtn = document.querySelector("#startQuizBtn");
let finalScore = document.querySelector("#finalScore");

let userNameInput = document.querySelector("#userName-text");
let userNameForm = document.querySelector("#userName-form");
let submituserNames = document.querySelector("#submituserNames");
let userNameCountSpan = parseInt(document.querySelector("#userName-count").textContent);
let userNameList = document.querySelector("#userName-list");

let question = document.querySelector("#question").textContent;
let answer1 = document.querySelector("#answer1").textContent;
let answer2 = document.querySelector("#answer2").textContent;
let answer3 = document.querySelector("#answer3").textContent;
let answer4 = document.querySelector("#answer4").textContent;

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

let userNames = [];
let highScores = [];

let quizTimerStart = 75;
let quizTimerFinish = document.querySelector("#countdown").textContent;

function codingQuiz() {

    introPage.setAttribute("style", "display: none;")


    questionPage.setAttribute("style", "display: inline-block;")


    let quizTimerCount = 5;

    timer = setInterval(function() {

        $("#countdown").html(quizTimerCount--);
        if (quizTimerCount === -1) clearInterval(timer)

        if (quizTimerCount === -1) {

            questionPage.setAttribute("style", "display: none;");
            gameOverPage.setAttribute("style", "display: block;");

        }
        finalScore.textContent = quizTimerCount + 1;


    }, 1000);

}

function storeHighscores() {
    // Sort highScores in Descending order - most time left is highest score
    highScores.sort((a, b) => b - a);
    // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

startQuizBtn.addEventListener("click", codingQuiz)

// When form is submitted...
userNameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    userNameCountSpan++;
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

        newPlayer.textContent = userNumber + ". " + lastUser + " -- " + userScore;
        userNameList.appendChild(newPlayer);

        let newHighscore = { user: lastUser, score: userScore, stats: ". " + " " + this.user + " -- " + this.score }
        highScores.push(newHighscore);

        storeHighscores();

    }
});