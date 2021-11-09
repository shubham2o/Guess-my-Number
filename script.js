'use strict';

// Selecting and Manipulating Elements
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */



// Handling Click Events
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    if(!guess) {                                                 // guess is equal to 0 at this point and 0 as a boolean always return false and   
        document.querySelector(".message").textContent =         // we want this false to be true so that's why we used !guess (!false, i.e, true).
        "⛔No Number!" ;                     
    }
});