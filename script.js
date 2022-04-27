
//assigns random number to computer choice string
const computerPlay = () => {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//this function evaluates the selections and returns the result of the round.
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'The game is a tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'The computer won! Paper beats rock.'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You won! Rock beats scissors.'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You won! Paper beats rock.'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'The computer won! Scissors beats paper.'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'The computer won! Rock beats scissors'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You won! Scissors beats paper.'
    }
}

const playerSelection = 'RoCk';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));