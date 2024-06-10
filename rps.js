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
    let choice = prompt("Choose between rock, paper or scissor:");
    while (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        choice = prompt("Wrong input! Please try again!\nChoose between rock, paper or scissor:");
    }
    return choice;
}

let h = getHumanChoice();
let c = getComputerChoice();

console.log(h);
console.log(c);