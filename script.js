const currentRound = document.querySelector("#currentRound");
const yourScore = document.querySelector(".yourScore");
const opponentScore = document.querySelector(".opponentScore");
const gameOptionBtns = document.querySelectorAll(".game-btn");
const gameOutput = document.querySelector(".game-output");
const roundResults = document.querySelector(".round-results");
let round = 1;
let playerScore = 0;
let computerScore = 0;

currentRound.innerText = round;
yourScore.innerText = playerScore;
opponentScore.innerText = computerScore;

gameOptionBtns.forEach(btn => {
  btn.addEventListener('click', playGame);
});

function getComputerChoice() {
  const optionsArr = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * optionsArr.length);
  const randomOption = optionsArr[randomIndex];
  return randomOption;
}

function playRound(playerOption, computerOption) {
  if (playerOption === "rock" && computerOption === "paper") {
    computerScore++;
  } else if (playerOption === "paper" && computerOption === "scissors") {
    computerScore++;
  } else if (playerOption === "scissors" && computerOption === "rock") {
    computerScore++;
  } else if (playerOption === "rock" && computerOption === "scissors") {
    playerScore++;
  } else if (playerOption === "paper" && computerOption === "rock") {
    playerScore++;
  } else if (playerOption === "scissors" && computerOption === "paper") {
    playerScore++;
  }
}

function playGame(e) {
  e.stopPropagation();
  let playerOption = e.target.dataset.option.toLowerCase();
  let computerOption = getComputerChoice().toLowerCase();
  playRound(playerOption, computerOption);
  if (round < 5) {
    // update player or opponent score
    round++;
    yourScore.innerText = playerScore;
    opponentScore.innerText = computerScore;
    currentRound.innerText = round;
  } else if (round === 5) {
    // disable game option buttons
    gameOptionBtns.forEach(btn => btn.setAttribute('disabled', true));

    const promptDialog = document.querySelector('.end-game-modal');
    promptDialog.showModal();
    const playAgainBtns = document.querySelectorAll('.play-again-btn');
    playAgainBtns.forEach(btn => btn.addEventListener('click', (e) => playAgain(e, promptDialog)));


    currentRound.innerText = 5;
    // update player or opponent score
    yourScore.innerText = playerScore;
    opponentScore.innerText = computerScore;
    if (playerScore > computerScore) {
      gameOutput.appendChild(document.createTextNode("You win the game!"))
    } else if (playerScore === computerScore) {
      gameOutput.appendChild(document.createTextNode("It's a draw for this game."))
    } else {
      gameOutput.appendChild(document.createTextNode("Opponent wins this time."))
    }
  }
}

function playAgain(e, dialog) {
  e.stopPropagation();

  const option = e.target.dataset.option.toLowerCase();
  if (option === 'yes') {
    dialog.close();
  } else {
    e.preventDefault();
    dialog.close();
  }
}