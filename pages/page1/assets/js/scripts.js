function showVariable() {
    let message = "Hello, this is a declared variable!";
    document.getElementById("output").textContent = message;
}

function processInput() {
    const userInput = document.getElementById("userInput").value;
    const outputElement = document.getElementById("inputOutput");
    outputElement.textContent = `Hi: ${userInput}`;
}

function checkCondition() {
    var userInput = document.getElementById('conditionalInput').value;
    var outputDiv = document.getElementById('conditionalOutput');
    outputDiv.classList.remove('minor', 'adult', 'senior');

    if (isNaN(userInput) || userInput === "") {
        outputDiv.innerHTML = 'Please enter a valid age.';
    } else if (userInput < 18) {
        outputDiv.innerHTML = 'You are a minor.';
        outputDiv.classList.add('minor');
    } else if (userInput >= 18 && userInput < 65) {
        outputDiv.innerHTML = 'You are an adult.';
        outputDiv.classList.add('adult');
    } else {
        outputDiv.innerHTML = 'You are a senior.';
        outputDiv.classList.add('senior');
    }
}

function showLoopResult() {
    let num = document.getElementById("loopInput").value;
    let output = document.getElementById("loopOutput");

    if (isNaN(num) || num <= 0) {
        output.innerHTML = "Please enter a positive number.";
        return;
    }

    if (num > 5) {
        output.innerHTML = "Rate my Website.";
        return;
    }

    let result = "";
    for (let i = 1; i <= num; i++) {
        result += "★";
    }

    output.innerHTML = result;
}
