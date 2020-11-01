let count = 75,
    timer = setInterval(function() {
        $("#countdown").html(count--);
        if (count == 1) clearInterval(timer);
    }, 1000);

_________________________________________________________


let initialInput = document.querySelector("#initial-text");
let initialForm = document.querySelector("#initial-form");
let initialList = document.querySelector("#initial-list");
let initialCountSpan = document.querySelector("#initial-count");

let initials = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderinitials();

function renderinitials() {
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