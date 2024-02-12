// const rockBtn = document.querySelector(".rock-btn");
// const paperBtn = document.querySelector(".paper-btn");
// const scissorsBtn = document.querySelector(".scissors-btn");
const currentRound = document.querySelector("#currentRound");
const yourScore = document.querySelector(".yourScore");
const opponentScore = document.querySelector(".opponentScore");
const gameOptionBtns = document.querySelectorAll(".game-btn");
let round = 0;
let playerScore = 0;
let computerScore = 0;

gameOptionBtns.forEach(btn => {
  btn.addEventListener('click', playGame);
})

function getComputerChoice() {
  const optionsArr = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * optionsArr.length);
  const randomOption = optionsArr[randomIndex];
  return randomOption;
}

function playRound(playerOption, computerOption) {
  if (playerOption === "rock" && computerOption === "paper") {
    computerScore++;
    return "Opponent Wins!"
  } else if (playerOption === "paper" && computerOption === "scissors") {
    computerScore++;
    return "Opponent Wins!"
  } else if (playerOption === "scissors" && computerOption === "rock") {
    computerScore++;
    return "Opponent Wins!"
  } else if (playerOption === "rock" && computerOption === "scissors") {
    playerScore++;
    return "You Win!"
  } else if (playerOption === "paper" && computerOption === "rock") {
    playerScore++;
    return "You Win!"
  } else if (playerOption === "scissors" && computerOption === "paper") {
    playerScore++;
    return "You Win!"
  } else if (playerOption === computerOption){
    return "It's a draw!";
  }
}

function playGame(e) {
  if (round < 5) {
    let playerOption = e.target.dataset.option.toLowerCase();
    let computerOption = getComputerChoice().toLowerCase();
    let result = playRound(playerOption, computerOption);
    round++;
    currentRound.innerText = round;
    console.log(playerScore, computerScore);
  } else if (round === 5) {
  }
}