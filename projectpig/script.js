'use strict';

let currentScore;

//initializing active player
let activePlayer;
// settung up scores(total)
let scores;

//setting game state

let playing;

//selecting the scores elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

//selcting butons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//selecting currect scores element
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//selecting the players element
const player0Cl = document.querySelector('.player--0');
const player1Cl = document.querySelector('.player--1');

//setting scores to initial value of 0
score0El.textContent = 0;
score1El.textContent = 0;

// hiding the dice

const diceEl = document.querySelector('.dice');
//diceEl.classList.add('hidden');

//switching activeplayers
const switcPlayer = function () {
    //display current score as zero on activeplayer
        
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //set current score to zero
    currentScore = 0;

    //switch to next place

    activePlayer = activePlayer === 0 ? 1 : 0;
    //swicth the active class to different players
    player0Cl.classList.toggle('player--active');
    player1Cl.classList.toggle('player--active');
};

//function for resetting and initializing the game

const initreset = function () {

     currentScore = 0;

    //initializing active player
     activePlayer = 0;
    // settung up scores(total)
     scores = [0, 0];

    //setting game state

     playing = true;

    


    //adding all original elements
    diceEl.classList.add('hidden');
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');

    //setting scores to 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    //removing the winner classs
    player0Cl.classList.remove('player--winner');
    player1Cl.classList.remove('player--winner');
    player0Cl.classList.add('player--active');
    player1Cl.classList.remove('player--active');

};

initreset();

//implementing functionalities

//rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        
        // 1. generate random dice role
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display the dice rolled by removing the hidden class
        diceEl.classList.remove('hidden');
        

        diceEl.src = `dice-${dice}.png`;
        console.log(dice);
        // 3. check if dice == 1 if so switch user
        if (dice !== 1) {
            //add dice number to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            //current0El.textContent = currentScore;FIXME //TO RECLECT ON EACH PLAYER
        }else{
            //switch to other player
            switcPlayer();
        }
    }

});

// implement the hold 

btnHold.addEventListener('click', function () {

    if (playing) {
        // 1. Add current score to active players total score
        scores[activePlayer] += currentScore;

        //set the scores to the score element
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if players score >= 100 if true the player wins and it is game over
        if (scores[activePlayer] >= 100) {

            playing = false;
            //remove all elemnts apart from new game
            diceEl.classList.add('hidden');
            btnHold.classList.add('hidden');
            btnRoll.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{

            // if not switch to next player
                switcPlayer();
        }
    }


});

// resetting the game

btnNew.addEventListener('click',initreset );