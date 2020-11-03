let userNameList = document.querySelector("#highScoreslist");

let highScores = [];

init();

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    }

    // Render todos to the DOM
    renderHighScores();
};

function renderHighScores() {

    for (let i = 0; i < highScores.length; i++) {
        // let newUser = highScores[i];

        let newHighScore = document.createElement("li");
        let userNumber = i++;
        let userName = highScores[i].user;
        let userScore = highScores[i].score;

        newHighScore.textContent = userNumber + ". " + userName + " -- " + userScore;

    }

    let newUser = document.createElement("li");

    let userNumber = userNames.length;
    let lastUser = userNames[(userNames.length - 1)];
    let userScore = finalScore.textContent;

    newUser.textContent = userNumber + ". " + lastUser + " -- " + userScore;
    userNameList.appendChild(newPlayer);
}