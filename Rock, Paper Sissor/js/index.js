const theResult = document.querySelector('.js-results')

const moves = document.querySelector('.js-moves')


let score = JSON.parse(localStorage.getItem('theScore')) || { Win: 0, Lose: 0, Tie: 0 };
updateScore()

function pickMove(){

let randomNumber = Math.random();
let computerMove = '';

if (randomNumber < 1/3)
    computerMove = 'rock';

else if(randomNumber < 2/3)
    computerMove = 'paper';

else{
    computerMove = 'scissors';
}

return computerMove;

}

function playerGame(playermove){

    const computerMove = pickMove();
    let result;
    
    
    if (playermove === 'paper'){
        if (computerMove === 'paper'){
            result = 'Tie.'
            score.Tie ++}
        
        else if (computerMove === 'scissors'){
            result = 'You lose.'
            score.Lose ++}
        else {
            result = 'You Won.'
            score.Win ++
        }


    }else if(playermove === 'scissors'){
        if (computerMove === 'scissors'){
            result = 'Tie.'
            score.Tie ++}
        else if (computerMove === 'paper'){
            result = 'You lose.'
            score.Lose ++}
        else {
            result = 'You Won.'
            score.Win ++
    }

    }else if(playermove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie.'
            score.Tie ++}
        else if (computerMove === 'paper'){
            result = 'You lose.'
            score.Lose ++}
        else {
            result = 'You Won.'
            score.Win ++
        }

    }
        

    localStorage.setItem('theScore', JSON.stringify(score));

    updateScore()

    theResult.innerText = result
    moves.innerHTML = `You : <img src='images/${playermove}-emoji.png' class="themove"> <img src='images/${computerMove}-emoji.png' class="themove">
    : Computer`

}

function updateScore(){
    const ScoreBord = document.querySelector('.js-scores')
    ScoreBord.innerHTML = `Wins: ${score.Win}, Loses: ${score.Lose}, Ties: ${score.Tie}`

}