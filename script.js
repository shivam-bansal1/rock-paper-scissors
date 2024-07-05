function getComputerChoice() {
    const num = Math.random();
    console.log(num);

    if(num>=0 && num<1/3)   
        return "rock";
    else if(num>=1/3 && num<2/3)   
        return "paper";
    else if(num>=2/3 && num<=1)   
        return "scissors";
}

let capitalize = (choice) => choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
let humanScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);

    let resultPara = document.createElement('p');
    
    if(humanChoice === computerChoice) {
        console.log(`It's a tie.`);
        resultPara.innerHTML = "It's a tie.";
    }
    else if((humanChoice==='Rock' && computerChoice==='Scissors') || 
    (humanChoice==='Paper' && computerChoice==='Rock') ||
    (humanChoice==='Scissors' && computerChoice==='Paper')) {
        humanScore += 1;
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        resultPara.innerHTML = `You won! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        resultPara.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    console.log(`Your score:${humanScore}, computer score: ${computerScore}`);
    resultDiv.appendChild(resultPara);
    resultDiv.innerHTML += `Your score:${humanScore}, computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        displayResult();
    }
}

function displayResult() {
    console.log(`Your score ${humanScore}`);
    console.log(`Computer's score ${computerScore}`);
    let gameResult = document.createElement('p');

    if(computerScore > humanScore) {
        console.log("You lost the game");
        gameResult.innerHTML = "You lost the game";
    }
    else if(computerScore === humanScore) {
        console.log("Game tied");
        gameResult.innerHTML = "Game tied";
    }
    else {
        console.log("You won the game");
        gameResult.innerHTML = "You won the game";
    }

    resultDiv.appendChild(gameResult);
    humanScore = 0;
    computerScore = 0;
}


document.querySelector('.rock-button').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});
document.querySelector('.paper-button').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});
document.querySelector('.scissors-button').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
