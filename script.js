// Game logic
let correctNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function generateButtons() {
    const container = document.getElementById("buttons-container");
    for (let i = 1; i <= 10; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", function() {
            checkGuess(i);
        });
        container.appendChild(button);
    }
}

function checkGuess(guess) {
    attempts++;
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
    if (guess === correctNumber) {
        document.getElementById("message").textContent = `Congrats! ${guess} is correct!`;
        document.getElementById("reset").style.display = "inline";
        disableGuessButtons();
    } else {
        document.getElementById("message").textContent = `Try again! ${guess} is incorrect.`;
    }
}

function disableGuessButtons() {
    const buttons = document.getElementById("buttons-container").getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}

document.getElementById("reset").addEventListener("click", function() {
    correctNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("reset").style.display = "none";
    const buttons = document.getElementById("buttons-container").getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = false;
    }
});

// Redirect to wallet connection URL
document.getElementById("connect-wallet").addEventListener("click", function() {
    window.location.href = "https://pedramhatef.github.io/my-twa";
});

// Initialize the game
generateButtons();
