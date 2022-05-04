// Rock Paper Scissors browser game

function playRound() {
  const humanChoice = this.dataset.item;
  const computerChoice = computerPlay();

  // Check the results and display the outcome
  const outcome = checkResults(humanChoice, computerChoice);
  displayResults(outcome);

  // Update the score with the winner and display
  const winner = checkRoundWinner(outcome);
  updateScore(winner);
  displayScores();

  // Check for a game winner
  checkGameWinner();

  return outcome;
}

function computerPlay() {
  // Computer plays a turn, returns 'rock', 'paper', or 'scissors'
  // Randomly choose a number between 1 and 3
  // 1 = rock
  // 2 = paper
  // 3 = scissors
  let number = Math.floor((Math.random() * 3)) + 1;
  let choice = '';

  switch (number) {
    case 1:
    choice = 'ROCK';
    break;

    case 2:
    choice = 'PAPER';
    break;

    case 3:
    choice = 'SCISSORS';
    break;

    default:
    break;
  }

  return choice;
}

// Display the results of a round in a div
function checkResults(humanChoice, computerChoice) {
  // Compare choices and return string with winner and description
  let outcome = '';
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice === 'ROCK') {
    // Rock outcomes
    if (computerChoice === 'ROCK') {
      outcome = 'Draw! Rock ties with Rock';
    } else if (computerChoice === 'PAPER') {
      outcome = 'You lose! Paper beats Rock';
    } else if (computerChoice === 'SCISSORS') {
      outcome = 'You win! Rock beats Scissors';
    }
  } else if (humanChoice === 'PAPER') {
    // Paper outcomes
    if (computerChoice === 'ROCK') {
      outcome = 'You win! Paper beats Rock';
    } else if (computerChoice === 'PAPER') {
      outcome = 'Draw! Paper ties with Paper';
    } else if (computerChoice === 'SCISSORS') {
      outcome = 'You lose! Scissors beats Paper';
    }
  } else if (humanChoice === 'SCISSORS') {
    // Scissor outcomes
    if (computerChoice === 'ROCK') {
      outcome = 'You lose! Rock beats Scissors';
    } else if (computerChoice === 'PAPER') {
      outcome = 'You win! Scissors beats Paper';
    } else if (computerChoice === 'SCISSORS') {
      outcome = 'Draw! Scissors draws with Scissors';
    }
  }

  return outcome;
}

function displayResults(result) {
  const roundResultsDiv = document.querySelector('#round-results');
  roundResultsDiv.textContent = result;
}

// Extract the winner from the round outcome string
function checkRoundWinner(gameText) {
  let winner = '';

  // Checks the string text to see if the player won or lost.
  if (gameText.includes('win')) {
    winner = 'human';
  } else if (gameText.includes('lose')) {
    winner = 'computer';
  } else {
    winner = 'draw';
  }

  return winner;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function displayScores() {
  const scoresDiv = document.querySelector('#scores');
  scoresDiv.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
}

// If there is a winner, announce them and remove the button event listener
function checkGameWinner() {
  // If no one has won, return from the function
  if (humanScore === scoreToWin) {
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.textContent = 'Human wins!';
  } else if (computerScore === scoreToWin) {
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.textContent = 'Computer wins!';
  } else {
    return;
  }

  buttons.forEach(button => button.removeEventListener('click', playRound));
}

// Global variables to handle scores
let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;

// Initialise divs on webpage with text
displayScores();

// Event listeners for each button to play a round
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));

