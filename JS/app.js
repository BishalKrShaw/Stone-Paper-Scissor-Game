// STEPS VARIABLES 
const playerStep = document.querySelector("#player-step");
const computerStep = document.querySelector("#computer-step");
const playerMove = document.querySelectorAll("#player .option-col");
const computerMove = document.querySelectorAll("#computer .option-col");

// SCORE VARIABLES
const computerScore = document.querySelector("#computer-score span");
const playerScore = document.querySelector("#player-score span");
let scoreOfComputer = Number(computerScore.innerHTML);
let scoreOfPlayer = Number(playerScore.innerHTML);

// IMAGE STORED
const paper = playerMove[0].innerHTML;
const scissor = playerMove[1].innerHTML;
const stone = playerMove[2].innerHTML;

// WINNER DISPLAY
const winner = document.querySelector("#winner-area");
const winnerName = document.querySelector("#winner-area h2");
const winnerEmoji = document.querySelector("#winner-area p");

// COMPUTER MOVE FUNCTION 
function computerStepsFunc() {
    let randomValue = Math.floor((Math.random()/4)*10);
    computerStep.innerHTML = computerMove[randomValue].innerHTML;
}

// SCORE LOGIC
function Score() {
    if((computerStep.innerHTML == paper) && (playerStep.innerHTML == stone)) {
        scoreOfComputer++;
        computerScore.innerHTML = scoreOfComputer;
    }
    else if((computerStep.innerHTML == stone) && (playerStep.innerHTML == paper)) {
        scoreOfPlayer++;
        playerScore.innerHTML = scoreOfPlayer;
    }
    else if((computerStep.innerHTML == stone) && (playerStep.innerHTML == scissor)) {
        scoreOfComputer++;
        computerScore.innerHTML = scoreOfComputer;
    }
    else if((computerStep.innerHTML == scissor) && (playerStep.innerHTML == stone)) {
        scoreOfPlayer++;
        playerScore.innerHTML = scoreOfPlayer;
    }
    else if((computerStep.innerHTML == scissor) && (playerStep.innerHTML == paper)) {
        scoreOfComputer++;
        computerScore.innerHTML = scoreOfComputer;
    }
    else if((computerStep.innerHTML == paper) && (playerStep.innerHTML == scissor)) {
        scoreOfPlayer++;
        playerScore.innerHTML = scoreOfPlayer;
    }
}

// WINNER LOGIC
function Winner() {
    if(scoreOfComputer == 5) {
        winner.style.display = "block";
        winnerName.innerHTML = "YOU LOSE!";
        winnerEmoji.innerHTML = "&#128543";
    }
    else if(scoreOfPlayer == 5) {
        winner.style.display = "block";
        winnerName.innerHTML = "YOU WIN!";
        winnerEmoji.innerHTML = "&#127881; &#129395;";
    }
}

// PLAYER MOVE and COMPUTER MOVE LOGIC
playerMove[0].addEventListener("click", function() {
    playerStep.innerHTML = playerMove[0].innerHTML;
    computerStepsFunc();
    Score();
    Winner()
});
 playerMove[1].addEventListener("click", function() {
    playerStep.innerHTML = playerMove[1].innerHTML;
    computerStepsFunc();
    Score();
    Winner()
});
 playerMove[2].addEventListener("click", function() {
    playerStep.innerHTML = playerMove[2].innerHTML;
    computerStepsFunc();
    Score();
    Winner()
});