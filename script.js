// const rockBtn = document.querySelector(".rock-btn");
// const paperBtn = document.querySelector(".paper-btn");
// const scissorsBtn = document.querySelector(".scissors-btn");
const currentRound = document.querySelector("[data-id='currentRound']");
const yourScore = document.querySelector(".yourScore");
const opponentScore = document.querySelector(".opponentScore");
const gameOptionBtns = document.querySelectorAll(".game-btn");

gameOptionBtns.forEach(btn => {
  btn.addEventListener('click', playGame);
})

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

function playGame(e) {
  let playerOption = e.target.dataset.option;
  let computerOption = getComputerChoice().toLowerCase();

  console.log(playerOption, computerOption);
}

let playerScore = 0;
let computerScore = 0;