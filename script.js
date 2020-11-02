let startQuizBtn = document.querySelector("#startQuizBtn")

startQuizBtn.addEventListener("click", quizTimer)

function quizTimer() {
    let introPage = document.querySelector("#introPage")
    introPage.setAttribute("style", "display: none;")

    let questionPage = document.querySelector("#questionPage")
    questionPage.setAttribute("style", "display: inline-block;")


    let count = 5;

    timer = setInterval(function() {

        $("#countdown").html(count--);
        if (count === -1) clearInterval(timer)

        if (count === -1) {

            let questionPage = document.querySelector("#questionPage");
            questionPage.setAttribute("style", "display: none;");

            let gameOverPage = document.querySelector("#gameOverPage");
            gameOverPage.setAttribute("style", "display: block;");

        }

    }, 1000);

}

let submitInitials = document.querySelector("#submitInitials");

submitInitials.addEventListener("click", renderInitials);



let initialInput = document.querySelector("#initial-text");
let initialForm = document.querySelector("#initial-form");
let initialList = document.querySelector("#initial-list");
let initialCountSpan = document.querySelector("#initial-count");

let initials = ["ABC", "DEF", "GHI"];


renderInitials();

function renderInitials(event) {
    event.preventDefault;
    // Clear initialList element and update initialCountSpan
    initialList.innerHTML = "";
    initialCountSpan.textContent = initials.length;

    // Render a new li for each initial
    for (let i = 0; i < initials.length; i++) {
        let initial = initials[i];

        let li = document.createElement("li");
        li.textContent = initial;
        initialList.appendChild(li);
    }
}

// When form is submitted...
initialForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let initialText = initialInput.value.trim();

    // Return from function early if submitted initialText is blank
    if (initialText === "") {
        return;
    }

    // Add new initialText to initials array, clear the input
    initials.push(initialText);
    initialInput.value = "";

    // Re-render the list
    renderinitials();
});

_________________________________________________________