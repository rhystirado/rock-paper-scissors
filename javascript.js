//---- Function Definitions ----//

function computerPlay() {
  // Computer plays a turn, returns "rock", "paper", or "scissors"
  // Randomly choose a number between 1 and 3
  // 1 = rock
  // 2 = paper
  // 3 = scissors
  let number = Math.floor((Math.random() * 3)) + 1;
  let choice = "";

  switch (number) {
    case 1:
    choice = "ROCK";
    break;

    case 2:
    choice = "PAPER";
    break;

    case 3:
    choice = "SCISSORS";
    break;

    default:
    break;
  }

  return choice;
}

function playRound() {
  const humanChoice = this.textContent;
  const computerChoice = computerPlay();

  // Compare choices and return string with winner and description
  let outcome = "";

  if (humanChoice === "ROCK") {
    // Rock outcomes
    if (computerChoice === "ROCK") {
      outcome = "Draw! Rock ties with Rock";
    } else if (computerChoice === "PAPER") {
      outcome = "You lose! Paper beats Rock";
    } else if (computerChoice === "SCISSORS") {
      outcome = "You win! Rock beats Scissors";
    }
  } else if (humanChoice === "PAPER") {
    // Paper outcomes
    if (computerChoice === "ROCK") {
      outcome = "You win! Paper beats Rock";
    } else if (computerChoice === "PAPER") {
      outcome = "Draw! Paper ties with Paper";
    } else if (computerChoice === "SCISSORS") {
      outcome = "You lose! Scissors beats Paper";
    }
  } else if (humanChoice === "SCISSORS") {
    // Scissor outcomes
    if (computerChoice === "ROCK") {
      outcome = "You lose! Rock beats Scissors";
    } else if (computerChoice === "PAPER") {
      outcome = "You win! Scissors beats Paper";
    } else if (computerChoice === "SCISSORS") {
      outcome = "Draw! Scissors draws with Scissors";
    }
  }

  // Display the outcome
  displayResults(outcome);

  // Check the winner
  const result = checkRoundWinner(outcome);

  // Update the scores
  updateScore(result);

  // Display the new scores
  displayScores()

  // Update rounds played
  updateRoundsPlayed();

  return outcome;
}

function updateScore(result) {
  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }
}

function displayScores() {
  const scoresDiv = document.querySelector('#scores');
  scoresDiv.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
}

function updateRoundsPlayed() {
  roundsPlayed++;
  const roundsPlayedDiv = document.querySelector('#rounds-played');
  roundsPlayedDiv.textContent = `Rounds played: ${roundsPlayed}`;
}

function checkRoundWinner(gameText) {
  let winner = "";

  // Checks the string text to see if the player won or lost.
  if (gameText.includes("win")) {
    winner = "human";
  } else if (gameText.includes("lose")) {
    winner = "computer";
  } else {
    winner = "draw";
  }

  return winner;
}

function game() {
  // Number of rounds to play
  let numRounds = 1;

  // How many games each player has won
  let humanScore = 0;
  let computerScore = 0;

  // Play 5 rounds of Rock Paper Scissors
  for (let i = 0; i < numRounds; i++) {
    let gameText = playRound(humanPlay(), computerPlay());
    let result = checkRoundWinner(gameText);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }
}

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

// Event listeners for each button to play a round
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));

// Display the results of a round in a div
function displayResults(result) {
  const roundResultsDiv = document.querySelector('#round-results');
  roundResultsDiv.textContent = result;
}


//

//---- Main ----//
// game();