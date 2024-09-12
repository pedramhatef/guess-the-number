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

// Connect Wallet and Back buttons functionality
document.getElementById("connect-wallet").addEventListener("click", function() {
    // Split the screen when Connect Wallet is pressed
    document.querySelector(".bottom-section").style.display = "block";
    document.getElementById("connect-wallet").style.display = "none";
    document.getElementById("back-button").style.display = "inline"; // Show the back button
});

document.getElementById("back-button").addEventListener("click", function() {
    // Restore to the single screen layout
    document.querySelector(".bottom-section").style.display = "none";
    document.getElementById("connect-wallet").style.display = "inline";
    document.getElementById("back-button").style.display = "none"; // Hide the back button
});

// Initialize the game
generateButtons();
