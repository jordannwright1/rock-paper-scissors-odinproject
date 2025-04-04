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
  } else if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both picked ${humanChoice}`);
  } else {
    console.log("Invalid input! Please choose rock, paper, or scissors.");
  }
}





function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
    console.log('----------------------------');
  }
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😞 You lost the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
  
}

playGame()
