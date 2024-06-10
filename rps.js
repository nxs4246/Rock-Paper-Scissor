function getComputerChoice() {
    let max = 3;
    let min = 0;
    let rand = Math.random() * (max - min) + min;

    if(rand >= 0 && rand < 1) {
        return "rock";
    } else if(rand >= 1 && rand < 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissor:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        choice = prompt("Wrong input! Please try again!\nChoose between rock, paper or scissor:");
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if(computerChoice == "rock") {
                console.log("It's a draw!");
            } else if(computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissor.")
                humanScore++;
            }
            break;
        
        case "paper":
            if(computerChoice == "paper") {
                console.log("It's a draw!");
            } else if(computerChoice == "scissor") {
                console.log("You lose! Scissor beats Paper.");
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock.")
                humanScore++;
            }
            break;

        case "scissor":
            if(computerChoice == "scissor") {
                console.log("It's a draw!");
            } else if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissor.");
                computerScore++;
            } else {
                console.log("You win! Scissor beats Paper.")
                humanScore++;
            }
            break;
    }
}

let humanScore = 0; 
let computerScore = 0;

const h = getHumanChoice();
const c = getComputerChoice();

playRound(h, c);

console.log(humanScore);
console.log(computerScore);