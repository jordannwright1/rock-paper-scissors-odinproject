const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));
const container = document.querySelector(".container");
const div = document.createElement('div');
const scoreBoard = document.createElement('div');
container.appendChild(div);







function getComputerChoice() {
  if (Math.random() > 0 && Math.random() < 0.25) {
    return  "rock";
  } else if (Math.random() > 0.25 && Math.random() < 0.50) {
    return  "paper";
  } else {
    return  "scissors";
  }
  
}

function getHumanChoice() {
  let choice = prompt("Enter your choice here: ").toLowerCase();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }
  
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    div.textContent = 'You win!  Rock beats scissors!';
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    div.textContent = 'You lost!  Rock beats scissors!';
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    div.textContent = 'You lost!  Scissors beats paper!';
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    div.textContent = 'You win!  Scissors beats paper!';
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    div.textContent = 'You win!  Paper beats rock!';
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    div.textContent = 'You lost!  Paper beats rock!';
    computerScore++;
  } else if (humanChoice === computerChoice) {
    div.textContent =`It's a tie! You both picked ${humanChoice}`;
  } else {
    div.textContent = "Invalid input! Please choose rock, paper, or scissors.";
  }
  scoreBoard.textContent = `${humanScore} : ${computerScore}`
  container.appendChild(scoreBoard);
  if (humanScore === 5) {
    div.textContent = "Congrats! You won!"
  } else if (computerScore === 5) {
    div.textContent = "Sorry, You lost!"
  } 
  if (humanScore > 5 || computerScore > 5) {
    div.textContent = "Reload to play again!"
  }

}






