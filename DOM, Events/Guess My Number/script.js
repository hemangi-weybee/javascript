'use strict';

let secretNumber = 18;
let score = 20;
let highscore = 0;

// document.querySelector('body').style.backgroundColor = '#40E0D0';
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);

    if(!guess){
        displayMessage("No number!");
    } else if (guess === secretNumber) {
        displayMessage(`Congratulations 🎉`);        
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#40E0D0';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        score--;
        if(score>0){
            guess<secretNumber ?  displayMessage("Number is too low 📉") : displayMessage("Number is too high 📈");            
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage("You lost the game");
            document.querySelector('.number').textContent = secretNumber;
        }
    }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});