function getComputerChoice() {
  if (Math.random() > 0 && Math.random() < 0.25) {
    return "Rock";
  } else if (Math.random() > 0.25 && Math.random() < 0.50) {
    return "Paper";
  } else {
    return "Scissors";
  }
  
}

function getHumanChoice() {
  let choice = prompt("Enter your choice here: ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;
