
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

// set variables to contain scores
let computerScore = 0;
let userScore = 0;

//this function evaluates the selections and returns the result of the round and adds to scores. 
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase(); //turns playerselection into lowercase
    if (playerSelection == computerSelection) {
        results.textContent = 'The game is a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore +=1;
        results.textContent = 'The computer won! Paper beats rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore +=1;
        results.textContent = 'You won! Rock beats scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore +=1;
        results.textContent = 'You won! Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore +=1;
        results.textContent = 'The computer won! Scissors beats paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore +=1;
        results.textContent = 'The computer won! Rock beats scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore +=1;
        results.textContent = 'You won! Scissors beats paper.';
    }
    compScoreDisp.innerHTML = computerScore;
    userScoreDisp.innerHTML = userScore;
}


const game = () => {
    const playerSelection = prompt('rock, paper, or scissors?', 'rock'); //pop up window to get playerselection
    const computerSelection = computerPlay() //runs random choice generating function
    console.log(playRound(playerSelection, computerSelection)); //logs results of round
    //determine result of game
    if (userScore > computerScore) {
        console.log(`You won! The score is user: ${userScore}, computer: ${computerScore}`);
    } else if (userScore < computerScore) {
        console.log(`The computer won! The score is user: ${userScore}, computer: ${computerScore}`)
    } else if (userScore == computerScore) {
        console.log(`The game is a Tie! The score is user: ${userScore}, computer: ${computerScore}`)
    }
}
//game(); //run game function

const rock = document.querySelector('#rockBtn');
const paper = document.querySelector('#paperBtn');
const scissors = document.querySelector('#scissorsBtn');
const results = document.querySelector('#results');
const compScoreDisp = document.querySelector('#comp-score');
const userScoreDisp = document.querySelector('#user-score');



rock.addEventListener('click', function () {playRound('rock', computerPlay())});
paper.addEventListener('click', function () {playRound('paper', computerPlay())});
scissors.addEventListener('click', function () {playRound('scissors', computerPlay())});


