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

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice :");
    return humanChoice;
}

let capitalize = (choice) => choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = capitalize(humanChoice);
        computerChoice = capitalize(computerChoice);
        
        if(humanChoice === computerChoice) {
            console.log(`It's a tie.`);
            console.log(`Your score:${humanScore}, computer score: ${computerScore}`);
        }
        else if((humanChoice==='Rock' && computerChoice==='Scissors') || 
        (humanChoice==='Paper' && computerChoice==='Rock') ||
        (humanChoice==='Scissors' && computerChoice==='Paper')) {
            humanScore += 1;
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            console.log(`Your score:${humanScore}, computer score: ${computerScore}`);
        }
        else {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            console.log(`Your score:${humanScore}, computer score: ${computerScore}`);
        }
    }

    for(let i=0;i<5;i++) {
        humanChoice = capitalize(getHumanChoice());
        computerChoice = capitalize(getComputerChoice())
        console.log(humanChoice);
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    }

    if(computerScore > humanScore) {
        console.log("You lost the game");
    }
    else if(computerScore === humanScore) {
        console.log("Game tied");
    }
    else {
        console.log("You won the game");
    }
};

playGame();