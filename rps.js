// Global variables using snake_case
let human_score = 0;
let computer_score = 0;
let rounds_played = 0;
const total_rounds = 5;

// Human input is read through the click of the buttons and passed onto playGame()
document.getElementById('rock').addEventListener('click', () => playGame("rock"));
document.getElementById('paper').addEventListener('click', () => playGame("paper"));
document.getElementById('scissor').addEventListener('click', () => playGame("scissor"));

// Taking human input and playing the game for 5 rounds
function playGame(humanChoice) {
    if (rounds_played >= total_rounds) {
        return; 
    }

    let scores = playRound(humanChoice, getComputerChoice());
    human_score += scores.humanScore;
    computer_score += scores.computerScore;
    rounds_played++;

    updateScore(human_score, computer_score);

    if (rounds_played >= total_rounds) {
        declareWinner();
    }
}

// Function to update scoreboard
function updateScore(human_score, computer_score) {
    const scoreElem = document.querySelector("#scoreboard");

    // Clear previous content
    scoreElem.innerHTML = '';

    // Create and append the round number element
    const textElem = document.createElement('div');
    textElem.textContent = `Scoreboard:`;
    scoreElem.appendChild(textElem);

    // Create and append the score element
    const scoreTextElem = document.createElement('div');
    scoreTextElem.className = 'textfield'; // Assign the class 'textfield'
    scoreTextElem.textContent = `Human: ${human_score} - Computer: ${computer_score}`;
    scoreElem.appendChild(scoreTextElem);
}


// Function to declare winner when 5 are played
function declareWinner() {
    const resultElem = document.querySelector("#winner");
    if (human_score > computer_score) {
        resultElem.textContent += " You are the overall winner!";
    } else if (human_score < computer_score) {
        resultElem.textContent += " The computer is the overall winner!";
    } else {
        resultElem.textContent += " It's an overall draw!";
    }
}

function resetButton() {

}

// Give a random choice between r/p/s
function getComputerChoice() {
    let rand = Math.random() * 3;
    if (rand < 1) {
        return "rock";
    } else if (rand < 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Plays one round of r/p/s
function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let msg = "";

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                msg = "This round ends in a draw!";
            } else if (computerChoice == "paper") {
                msg = "You lose this round! Paper beats Rock.";
                computerScore++;
            } else {
                msg = "You win this round! Rock beats Scissor.";
                humanScore++;
            }
            break;

        case "paper":
            if (computerChoice == "paper") {
                msg = "This round ends in a draw!";
            } else if (computerChoice == "scissor") {
                msg = "You lose this round! Scissor beats Paper.";
                computerScore++;
            } else {
                msg = "You win this round! Paper beats Rock.";
                humanScore++;
            }
            break;

        case "scissor":
            if (computerChoice == "scissor") {
                msg = "This round ends in a draw!";
            } else if (computerChoice == "rock") {
                msg = "You lose this round! Rock beats Scissor.";
                computerScore++;
            } else {
                msg = "You win this round! Scissor beats Paper.";
                humanScore++;
            }
            break;
    }

    updateResult(msg);
    return { humanScore, computerScore };
}

// Updates result of each round by displaying a message
function updateResult(message) {
    const resultElem = document.querySelector("#result");

    // Clear previous content
    resultElem.innerHTML = ''; 

    // Create and append the round number
    const roundElem = document.createElement('div');
    roundElem.textContent = `Round ${rounds_played + 1}:`;
    resultElem.appendChild(roundElem);

    // Create and append the message
    const messageElem = document.createElement('div');
    messageElem.className = 'textfield';
    messageElem.textContent = message;
    resultElem.appendChild(messageElem);
}

