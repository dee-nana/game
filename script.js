"use strict"
const secretNumder = Math.trunc(Math.random() * 20) + 1;

let score = 20


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// .textContent = 13;

// document.querySelector('.score').textContent= 20;

// document.querySelector('.guess').value= 30;

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value)

    let guess = Number(document.querySelector('.guess').value)
    console.log(guess)
   if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number'
    }
    else if (guess === secretNumder) {
        document.querySelector('.message').textContent = 'Correct number'
        document.querySelector('body').style.backgroundColor = #606357
        document.querySelector('.number').style.width = '30ren'
    }

    else if (guess > secretNumder) {
        if (score>0){
            document.querySelector('.message').textContent = 'Too High'
            --score;
            document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent = 'Game Over'
        }
        
    }
    else if (guess < secretNumder) {
        if(score>0){
            document.querySelector('.message').textContent = 'Too Low'
            --score;
            document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent = 'Game Over'
        }
     
})


