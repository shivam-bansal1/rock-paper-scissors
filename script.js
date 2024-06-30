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

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice :");
    return humanChoice;
}
console.log(getHumanChoice());

