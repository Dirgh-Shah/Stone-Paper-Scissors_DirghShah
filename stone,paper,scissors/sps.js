//selecting individual elements
document.addEventListener('DOMContentLoaded',() => {
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const response = document.getElementById('response');
const yourScoreDiv = document.getElementById('yourScore');
const compScoreDiv = document.getElementById('compScore');

let yourScore = 0;
let compScore = 0;

    stone.addEventListener('click', () => choice('stone'));
    paper.addEventListener('click', () => choice('paper'));
    scissor.addEventListener('click', () => choice('scissor'));

//creating a function to perform the calculations
function choice(theChoice){
    const choices = ['stone','paper','scissor'];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    let result = '';

    if (theChoice === computerChoice) {
        result = "It is a Draw";
        response.textContent = result;
        response.style.color = "black"
    } else if (
        (theChoice === 'stone' && computerChoice === 'scissor') ||
        (theChoice === 'paper' && computerChoice === 'stone') ||
        (theChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = `You Win! Your ${theChoice} beats the computer's ${computerChoice}`;
        response.textContent = result;
        response.style.color = "#4ef037"
        yourScore++;
        yourScoreDiv.textContent = yourScore;
    } else {
        result = `You lose.The computer's ${computerChoice} beats your ${theChoice}`;
        response.textContent = result;
        response.style.color = "red"
        compScore++;
        compScoreDiv.textContent = compScore;
    }
  }
});