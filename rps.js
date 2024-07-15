document.getElementById('rock').addEventListener('click', function() {
    playRound("rock", getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    playRound("paper", getComputerChoice());
});

document.getElementById('scissor').addEventListener('click', function() {
    playRound("scissor", getComputerChoice());
});

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

/*function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissor:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        choice = prompt("Wrong input! Please try again!\nChoose between rock, paper or scissor:");
    }
    return choice;
}*/

function updateResult(message) {
    const resultElem = document.querySelector("#result");
    resultElem.textContent = message;
}

function playRound(humanChoice, computerChoice) {

    let humanScore = 0; 
    let computerScore = 0;
    let msg = "";

    switch(humanChoice) {
        case "rock":
            if(computerChoice == "rock") {
                console.log("It's a draw!");
                msg = "It's a draw!";
                computerScore++;
                humanScore++;
            } else if(computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                msg = "You lose! Paper beats Rock.";
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissor.");
                msg = "You win! Rock beats Scissor.";
                humanScore++;
            }
            break;
        
        case "paper":
            if(computerChoice == "paper") {
                console.log("It's a draw!");
                msg = "It's a draw!";
                computerScore++;
                humanScore++;
            } else if(computerChoice == "scissor") {
                console.log("You lose! Scissor beats Paper.");
                msg = "You lose! Scissor beats Paper.";
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock.");
                msg = "You win! Paper beats Rock.";
                humanScore++;
            }
            break;

        case "scissor":
            if(computerChoice == "scissor") {
                console.log("It's a draw!");
                msg = "It's a draw!";
                computerScore++;
                humanScore++;
            } else if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissor.");
                msg = "You lose! Rock beats Scissor.";
                computerScore++;
            } else {
                console.log("You win! Scissor beats Paper.");
                msg = "You win! Scissor beats Paper.";
                humanScore++;
            }
            break;
    }

    updateResult(msg);
    return {humanScore, computerScore};
}



/*function playGame() {

    let humanScore = 0; 
    let computerScore = 0;

    for(let i = 1; i <= 1; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let scores = playRound(humanChoice, computerChoice);
        humanScore += scores.humanScore;
        computerScore += scores.computerScore;

        console.log("Scores after round " + i + ":");
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("\n");
    }
}

playGame();*/