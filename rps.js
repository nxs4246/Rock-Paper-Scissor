
function playGame() {
    let human_score = 0;
    let computer_score = 0;

    for(let i = 1; i <= 5; i++) {
        document.getElementById('rock').addEventListener('click', function() {
            let scores;
            scores = playRound("rock", getComputerChoice());
            human_score = human_score + scores.humanScore;
            computer_score = computer_score + scores.computerScore;
        });

        document.getElementById('paper').addEventListener('click', function() {
            let scores;
            scores = playRound("paper", getComputerChoice());
            human_score = human_score + scores.humanScore;
            computer_score = computer_score + scores.computerScore;
        });

        document.getElementById('scissor').addEventListener('click', function() {
            let scores;
            scores = playRound("scissor", getComputerChoice());
            human_score = human_score + scores.humanScore;
            computer_score = computer_score + scores.computerScore;
        });
    }
}

function updateScore(human_score, computer_score) {
    const scoreElem = document.querySelector("#scoreboard");

}


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

playGame();