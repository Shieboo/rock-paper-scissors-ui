function computerPlay() {
  var move = ["rock", "paper", "scissors"];
  return move[Math.floor(Math.random() * 3)];
}

var playerScore = 0,
  computerScore = 0;

const gameLog = document.querySelector('#gameLog');
const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
  var playerSelection = 'rock';
  playRound(playerSelection, computerPlay());
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
  var playerSelection = 'paper';
  playRound(playerSelection, computerPlay());
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
  var playerSelection = 'scissors';
  playRound(playerSelection, computerPlay());
});

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case ('rock'):
      if (computerSelection === 'rock') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', it\'s a draw!';
      }
      if (computerSelection === 'paper') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you lose this round! Paper beats Rock';
        computerScore++;
      }
      if (computerSelection === 'scissors') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you win this round! Rock beats Scissors';
        playerScore++;
      }
      checkWin();
      break;
    case ('paper'):
      if (computerSelection === 'rock') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you win this round! Paper beats Rock';
        playerScore++;
      }
      if (computerSelection === 'paper') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', it\'s a draw!';
      }
      if (computerSelection === 'scissors') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you lose this round! Scissors beats Paper';
        computerScore++;
      }
      checkWin();
      break;
    case ('scissors'):
      if (computerSelection === 'rock') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you lose this round! Rock beats Scissors';
        computerScore++;
      }
      if (computerSelection === 'paper') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', you win this round! Scissors beats Paper';
        playerScore++;
      }
      if (computerSelection === 'scissors') {
        gameLog.textContent = 'Computer played ' + computerSelection + ', it\'s a draw!';
      }
      checkWin();
      break;
  }
}

function checkWin() {
  displayPlayerScore.textContent = 'Your score: ' + playerScore;
  displayComputerScore.textContent = 'Computer score: ' + computerScore;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      gameLog.textContent = 'Congratulations! you won the game!';
    } else {
      gameLog.textContent = 'The computer won!';
    }
    playerScore = 0;
    computerScore = 0;
  }
}
