
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
    compScoreDisp.innerHTML = `Computer score: ${computerScore}`;
    userScoreDisp.innerHTML = `User Score: ${userScore}`;
    compChoice.innerHTML = `Computer choice: ${computerSelection}`;
    userChoice.innerHTML = `User choice: ${playerSelection}`;
    if (userScore === 5) {
        if(alert('You won!')){}
        else window.location.reload();
    } else if (computerScore === 5) {
        if(alert('Computer won!')){}
        else window.location.reload();
    }
}





const rock = document.querySelector('#rockBtn');
const paper = document.querySelector('#paperBtn');
const scissors = document.querySelector('#scissorsBtn');
const results = document.querySelector('#results');
const compScoreDisp = document.querySelector('#comp-score');
const userScoreDisp = document.querySelector('#user-score');
const userChoice = document.querySelector('#user-choice');
const compChoice = document.querySelector('#comp-choice');



rock.addEventListener('click', function () {playRound('rock', computerPlay())});
paper.addEventListener('click', function () {playRound('paper', computerPlay())});
scissors.addEventListener('click', function () {playRound('scissors', computerPlay())});
