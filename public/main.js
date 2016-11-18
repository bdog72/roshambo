// Shortcuts so we don't have to keep typing things like
//
//  document.querySelector(".scores .player")
//
// instead we can use the Shortcut
//
//  $(".scores .player")

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// defines a method called `incrementPlayerCount` that takes no arguments

//    method name            arguments
const incrementPlayerCount = () => {
  // code starts here

  console.log('PLAYER WINS')

  // Get the text that is current in the browser where the player's score is on screen
  const playerTextScore = $('.scores .player').textContent

  // Turn that string into a number and then add one to it, store the result in `playerScore`
  const playerScore = parseInt(playerTextScore) + 1

  // Take that new score and shove it back into where the player score is on screen
  $('.scores .player').textContent = playerScore

  // Brian --
}

const incrementComputerCount = () => {
  console.log('COMPUTER WINS')
  const computerTextScore = $('.scores .computer').textContent
  const computerScore = parseInt(computerTextScore) + 1

  $('.scores .computer').textContent = computerScore

  // Brian --
}

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  console.log('player is', player)
  console.log('computer is', computer)

  if (player === 'rock') {
    if (computer === 'scissors') {
      incrementPlayerCount()
    }

    if (computer === 'paper') {
      incrementComputerCount()
    }

    if (computer === 'rock') {
      console.log('TIE')
    }
  }

  if (player === 'paper') {
    if (computer === 'rock') {
      incrementPlayerCount()
    }

    if (computer === 'scissors') {
      incrementComputerCount()
    }

    if (computer === 'paper') {
      console.log('TIE')
    }
  }

  if (player === 'scissors') {
    if (computer === 'paper') {
      incrementPlayerCount()
    }

    if (computer === 'rock') {
      incrementComputerCount()
    }

    if (computer === 'scissors') {
      console.log('TIE')
    }
  }
  const playerScore = parseInt($('.scores .player').textContent)
  const computerScore = parseInt($('.scores .computer').textContent)

  if (computerScore === 2) {
    gameOver(false)
  }
  if (playerScore === 2) {
    gameOver(true)
  }
  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

    // HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
        // TODO: Probably need to do more to reset the game here...
  $('.scores .computer').textContent = 0
  $('.scores .player').textContent = 0
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = 'main'
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
