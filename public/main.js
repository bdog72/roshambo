const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const incrementPlayerCount = () => {
  console.log('PLAYER WINS')
  const playerTextScore = $('.scores .player').textContent
  const playerScore = parseInt(playerTextScore) + 1

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
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
