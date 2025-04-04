function getComputerChoice() {
  if (Math.random() > 0 && Math.random() < 0.25) {
    console.log( "Rock");
  } else if (Math.random() > 0.25 && Math.random() < 0.50) {
    console.log( "Paper");
  } else {
    console.log( "Scissors");
  }
  
}

function getHumanChoice() {
  let choice = prompt("Enter your choice here: ");
  console.log(choice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log( 'You win!  Rock beats scissors!');
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log( 'You lost!  Rock beats scissors!');
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log( 'You lost!  Scissors beats paper!');
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log( 'You win!  Scissors beats paper!');
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log( 'You win!  Paper beats rock!');
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log( 'You lost!  Paper beats rock!');
    computerScore++;
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();



function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(humanSelection, computerSelection)
  }
}
