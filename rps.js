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

let f = getComputerChoice();

console.log(f);