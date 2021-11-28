function computerPlay() {
    let rand = Math.floor(Math.random() * 3) 
    return rand >= 2 ? "rock" : rand >= 1 ? "paper" : "scissors";
}

function playRound(playerChoice, computerChoice) {
    console.log(`player: ${playerChoice}`);
    console.log(`computer: ${computerChoice}`);

    switch (playerChoice) {
        case computerChoice:
            return "draw";            
        case "rock":
            return computerChoice == "scissors" ?  "player" : "computer";
        case "paper":
            return computerChoice == "scissors" ?  "computer" : "player";
        case "scissors":
            return computerChoice == "rock" ? "computer" : "player";
    }
}


let winner;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    winner = playRound(playerChoice, computerPlay());
    winner == "player" ? playerScore++ : winner == "computer" ? computerScore++ : drawCount++
}

console.log(`Player wins: ${playerScore}`);
console.log(`Computer wins: ${computerScore}`);
console.log(`Draws: ${drawCount}`);
