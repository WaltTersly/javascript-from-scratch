'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

// generate random number

let num = Math.trunc(Math.random() *30 ) + 1;


//set up the score
 let score = 30;

// set up highscore
 let highScore = 0;

// set up funtions for refractoring

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const bodynumberSettings = function (bod, numb) {
    document.querySelector('body').style.backgroundColor = bod;
    document.querySelector('.number').style.width = numb;
};



// handle click events

document.querySelector('.check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.guess').value) ;

    // when there is no input
    if (!guess) {
        displayMessage(' ⛔ no number');
       
        //when guess is correct
    }else if ( guess === num) {
        displayMessage(' 👌 correct number!');
        document.querySelector('.number').textContent = num;
        // document.querySelector('body').style.backgroundColor = '#40E0D0';
        // document.querySelector('.number').style.width = '30rem';
        bodynumberSettings('#40E0D0', '30rem');

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            
        }

    // refractored code

    // if guess is wrong

    }else if (guess !== num) {
        if (score > 1) {
            // use of tenery operator to check if guess is high or lower than rhe num.
            displayMessage(guess > num ? ' 📈 too high' : '📉 too low');
            // reduces score for every wrong guess
            score--;
            displayScore(score);
            
        }else{
            displayMessage(' 💥 sorry you have lost !! try again');
            
            displayMessage(0);
        } 

    }
    //original code beefor refractoring

    // when guess is greator
    // else if (guess > num) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' 📈 too high';
    //         // reduces score for every wrong guess
    //         score--;
    //         document.querySelector('.score').textContent = score;
            
    //     }else{
    //         document.querySelector('.message').textContent = ' 💥 sorry you have lost !! try again';
            
    //         document.querySelector('.score').textContent = 0;
    //     }
        
        
    // }else if (guess < num ) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' 📉 too low ';
    //         // reduces score for every wrong guess
    //         score--;
    //         document.querySelector('.score').textContent = score;
            
    //     }else{
    //         document.querySelector('.message').textContent = ' 💥 sorry you have lost !! try again';
            
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
});

// Again button resets everything to original
document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    num = Math.trunc(Math.random() *30 ) + 1;
   displayMessage('Start guessing');
   displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // document.querySelector('body').style.backgroundColor = '#9c6e54';
    // document.querySelector('.number').style.width = '15rem';

    bodynumberSettings('#9c6e54', '15rem');



});
