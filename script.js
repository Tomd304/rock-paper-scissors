function computerPlay() {
    let rand = Math.floor(Math.random() * 3) 
    return rand >= 2 ? "rock" : rand >= 1 ? "paper" : "scissors";
}

function playRound(playerChoice) {
    let computerChoice = computerPlay();
    updateIMG(playerChoice, computerChoice);

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

function updateIMG(playerChoice, computerChoice) {
    console.log(document.querySelector('#playerIMG').src = `${playerChoice}.png`)
    console.log(document.querySelector('#computerIMG').src = `${computerChoice}.png`)
}

function init() {
    document.querySelector('.result').style.display = 'flex'
    document.querySelector('.scores').style.display = 'flex'
}

let winner;
let winnerMsg;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

let btns = document.querySelectorAll('button')
btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        winner = playRound(e.target.id)
        init()
        updateStats()
        updateDOM()
    })
});

function updateStats() {
    switch (winner) {
        case 'player':
            winnerMsg = 'Player Wins!'
            playerScore++
            break;
        case 'computer':
            winnerMsg = 'Computer Wins!'
            computerScore++
            break;
        default:
            winnerMsg = 'Draw!'
            drawCount++
            break;
    }
}

function updateDOM() {
    document.querySelector('.winner').textContent = winnerMsg
    document.querySelector('#playerScore').textContent = playerScore
    document.querySelector('#computerScore').textContent = computerScore
    document.querySelector('#drawCount').textContent = drawCount
    
}
