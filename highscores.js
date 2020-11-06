let userNameList = document.querySelector("#highScoresList");

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
        let userNumber = i + 1;
        let userName = highScores[i].user;
        let userScore = highScores[i].score;

        newHighScore.textContent = userNumber + ". " + userName + " -- " + userScore;
        userNameList.appendChild(newHighScore);
    }
}

let goBack = document.querySelector("#goBack");
goBack.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "./index.html";
});

let clearQuiz = document.querySelector("#clearQuiz");
clearQuiz.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.clear();
    return highScores = [];

});

app.directive('blur', [function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.on('click', function() {
                element.blur();
            });
        }
    };
}]);