'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');


//Initializing...
let score, currentScore, activePlayer, playing;

const initialization = function () {
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    diceEL.classList.add('hidden');

    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    document.querySelector(`.player--0`).classList.add('player--active');  
    document.querySelector(`.player--1`).classList.remove('player--active');      
}

initialization();

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

//Genrate Random dice roll
btnRoll.addEventListener('click', function () {
    
    if(playing){
        // Generate Number
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);

        // Display dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;

        let x = score[activePlayer];
        // Check roll
        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            console.log('current ',currentScore);
            
            x += currentScore;
            console.log('score ',x);

            //check if score<= 20
            if(currentScore >= 10){
                document.getElementById(`score--${activePlayer}`).textContent = x;
                document.getElementById(`current--${activePlayer}`).textContent = 0;
                alert(`winner ${activePlayer+1}`)
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                playing = false;
            } 
        } else {        
            switchPlayer();
        }
    }
    
});



btnHold.addEventListener('click', function(){
    
    if(playing){
        //add active player score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        //check if score<= 100
        if(score[activePlayer] >= 10){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function (){
    initialization();    
});