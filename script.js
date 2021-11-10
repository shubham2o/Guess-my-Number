'use strict';

// Selecting and Manipulating Elements
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */



// Implementing Game Logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector(".number").textContent = "?";


let score = 20;
let highScore = 0;



// Handling Click Events
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    // When there is no input (blank)
    if(!guess) {                                                               // guess is equal to 0 at this point and 0 as a boolean always return false and   
        document.querySelector(".message").textContent = "⛔ No Number!";      // we want this false to be true so that's why we used !guess (!false, i.e, true).                  
    }

    // When player wins
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    // When guess is higher than the secretNumber (Too High)
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too High!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = " 💥 You Lost the game!";
            document.querySelector(".score").textContent = 0;
            document.querySelector(".number").textContent = secretNumber;
        }
    }

    // When guess is lower than the secretNumber (Too Low)
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = " 💥 You Lost the game!";
            document.querySelector(".score").textContent = 0;
            document.querySelector(".number").textContent = secretNumber;
        }
    }
});



// Coding Challenge 1
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});