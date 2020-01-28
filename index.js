// html elements declartions
const resetButton = document.getElementById("resetButton");
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("score");
const diceImage = document.getElementById("diceImage");
const totalScorePlayer1 = document.getElementById("totalScorePlayer1");
const totalScorePlayer2 = document.getElementById("totalScorePlayer2");
const statement = document.getElementById("statement");
const player = document.getElementById("player")

diceImage.style.visibility = "hidden";

// function declarions
let numberRolled;
let pointScorePlayer1 = 0;
let pointScorePlayer2 = 0;
let player1 = true;
/*let player2 = false; try to use a new varible to use player.eventListwners to switch players*/



const startGame = () => {
    player1 = true;
    pointScorePlayer1 = 0;
    pointScorePlayer2 = 0;
    // diceImage.src = (`Images/dice${numberRolled}.png`);
    diceImage.style.visibility = "hidden";
    statement.textContent = "";
    totalScorePlayer1.textContent = "";
    totalScorePlayer2.textContent = "";
    // numberRolled.textContent = "";
    playerScore.textContent = "";
}

let playerTurn = () => {
    player1 = !player1;
    console.log(playerTurn);
    
}

player.addEventListener("click", () => {
    playerTurn(player1) /*!= playerTurn(player2)*/
})


const rolls = () => {
    numberRolled = (Math.ceil (Math.random() * 6));
    console.log(numberRolled);
    // console.log("point score " +  pointScore);
    switch(player1){
        case true:
            pointScorePlayer1 += numberRolled;
            totalScorePlayer1.textContent = (`Player 1 score ${pointScorePlayer1}`);
            break;
        case false:
            pointScorePlayer2 += numberRolled
            totalScorePlayer2.textContent = (`Player 2 score ${pointScorePlayer2}`);
            break;
        default: break;
    }
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = (`Images/dice${numberRolled}.png`);

    // playerTurn.textcontent = pointScore += numberRolled;
    winOrLose()
}

const winOrLose = (player1) => {
    // numberRolled = 1;
    // pointScore = 0;
    if(numberRolled == 1){
        statement.textContent = ("You lose!");
        pointScorePlayer1 = 0;
        pointScorePlayer2 = 0;
        return
    } else if (pointScorePlayer1 /*|| != pointScorePlayer2*/  >= 20){
        statement.textContent = ("You Win!");
        pointScorePlayer1 = 0;
    } else if (pointScorePlayer2 /*|| != pointScorePlayer2*/  >= 20){
        statement.textContent = ("You Win!");
        pointScorePlayer2 = 0;
    } else {
        statement.textContent = ("Play Again?");
    }
    totalScorePlayer1.textcontent = pointScorePlayer1 += numberRolled;
    totalScorePlayer2.textcontent = pointScorePlayer2 += numberRolled;
}

rollButton.addEventListener("click", () => {
    rolls()
})

resetButton.addEventListener("click", () => {
    startGame();
})
