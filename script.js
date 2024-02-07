function getComputerChoice() {
  const optionsArr = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * optionsArr.length);
  const randomOption = optionsArr[randomIndex];
  return randomOption;
}

function playRound(playerOption, computerOption, currentRound) {
  playerOption.toLowerCase();

  if (playerOption === "rock" && computerOption === "paper") {
    computerScore++;
    return `Round ${currentRound}: computer wins!`;
  } else if (playerOption === "paper" && computerOption === "scissors") {
    computerScore++;
    return `Round ${currentRound}: computer wins!`;
  } else if (playerOption === "scissors" && computerOption === "rock") {
    computerScore++;
    return `Round ${currentRound}: computer wins!`;
  } else if (playerOption === "rock" && computerOption === "scissors") {
    playerScore++;
    return `Round ${currentRound}: you win!`;
  } else if (playerOption === "paper" && computerOption === "rock") {
    playerScore++;
    return `Round ${currentRound}: you win!`;
  } else if (playerOption === "scissors" && computerOption === "paper") {
    playerScore++;
    return `Round ${currentRound}: you win!`;
  } else if (playerOption === computerOption){
    return `Round ${currentRound}: It's a draw!`;
  } else {
    console.log(`Round ${currentRound}: Invalid option. Please try again.`)
    return false;
  }
}

function playGame() {
  const maxRounds = 5;
  let round = 1;
  let result = "";

  while (round <= maxRounds) {
    const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors': ");
    const computerSelection = getComputerChoice().toLowerCase();
    result = playRound(playerSelection, computerSelection, round);
    if (!result) {
      --round;
    }
    console.log(result);
    round++;
  }

  if (playerScore > computerScore) return "Results: You win the game!";
  else if (playerScore < computerScore) return "Results: The computer wins the game.";
  else {
    return "Results: It was a draw!";
  }
}

let playerScore = 0;
let computerScore = 0;
console.log(playGame());