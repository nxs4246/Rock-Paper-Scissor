function getComputerChoice() {
    let max = 3;
    let min = 0;
    return Math.random() * (max - min) + min;
}

let f = getComputerChoice();

console.log(f);