// Choices
let playerChoice = ''
let computerChoice = ''

// Variables to update 
const buttons = document.querySelectorAll('li')
const playerPoint = document.querySelector('#playerPoint')
const ComputerPoint = document.querySelector('#computerPoint')

// Other Variables
let playerScore = 0
let computerScore = 0
let roundMessage = ''

// function playRound 
const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    roundMessage = "Tie"
  } else if (
    (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK')
  ) {
    playerScore++
    roundMessage = "Player"
  } else {
    computerScore++
    roundMessage = "Computer"
  }
  console.log("PlayerScore: " + playerScore)
  console.log("ComputerScore: " + computerScore)
  updateMessage(roundMessage, playerChoice, computerChoice)
}

// Update Message
let resultMessage = document.getElementById('result')
const updateMessage = (winner, playerChoice, computerChoice) => {
  if (winner === 'Player') {
    resultMessage.textContent = `${capitalizeFirstLetter(playerChoice)
      } beats ${computerChoice.toLowerCase()}`
    return
  }
  else if (winner === 'Computer') {
    resultMessage.textContent = `${capitalizeFirstLetter(playerChoice)
      } is beaten by ${computerChoice.toLowerCase()}`
    return
  } else {
    resultMessage.textContent = `${capitalizeFirstLetter(playerChoice)
      } ties with ${computerChoice.toLowerCase()}`
  }
}

// Capitalize 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
// Update Score 
const updateScore = () => {
  playerPoint.textContent = playerScore
  ComputerPoint.textContent = computerScore
}

// Outro From Game
const outro = () => {
  if (playerScore > computerScore) {
    return 'You Won'
  } else {
    return 'You Lost'
  }
}

// Restart Game
const restartGame = () => {
  window.location.reload()
}

// Turns For Computer and Player
let computerPlay = () => {
  let compChoice = ''
  let randomValue = Math.ceil(Math.random() * 3)
  switch (randomValue) {
    case 1:
      compChoice = 'ROCK'
      break;
    case 2:
      compChoice = 'PAPER'
      break;
    case 3:
      compChoice = 'SCISSORS'
      break;
  }
  return compChoice
}

let playerPlay = (input) => {
  let plyrChoice = ''
  if (input == 1) {
    plyrChoice = 'ROCK'
  } else if (input == 2) {
    plyrChoice = 'PAPER'
  } else {
    plyrChoice = 'SCISSORS'
  }
  return plyrChoice
}

// Rounds Playing
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerInput = button.id.charAt(button.id.length - 1)
    console.log(playerInput)
    playerChoice = playerPlay(playerInput)
    computerChoice = computerPlay()
    playRound(playerChoice, computerChoice)
    updateScore()
    
    // Game Over
    if(playerScore === 5 || computerScore === 5){
      const popUp = setTimeout(() => {
        resultMessage.textContent = outro();
      }, 2000);
      const showMsg = setTimeout(() => {
        alert( outro()+ " Game restarting");
      }, 4000);
      const reload = setTimeout(() => {
        restartGame()
      }, 6000);
    }
  })
})
