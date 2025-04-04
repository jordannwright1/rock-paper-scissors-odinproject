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
  let choice = prompt("Enter your choice here: ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log( 'You win!  Rock beats scissors!');
    return humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log( 'You lost!  Rock beats scissors!');
    return computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log( 'You lost!  Scissors beats paper!');
    return computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log( 'You win!  Scissors beats paper!');
    return humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log( 'You win!  Paper beats rock!');
    return humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log( 'You lost!  Paper beats rock!');
    return computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
}

playGame()
