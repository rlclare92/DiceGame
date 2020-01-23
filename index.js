// html elements declartions
const resetButton = document.getElementById("resetButton");
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("score");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const statement = document.getElementById("statement");

diceImage.style.visibility = "hidden";

// function declarions
let numberRolled;
let pointScore = 0;


const startGame = () => {
    pointScore = 0;
    diceImage.src = (`Images/dice${numberRolled}.png`);
    diceImage.style.visibility = "hidden";
    statement.textContent = "";
    totalScore.textContent = "";
    // numberRolled.textContent = "";
    playerScore.textContent = "";
}

const rolls = () => {
    numberRolled = (Math.ceil (Math.random() * 6));
    console.log(numberRolled);
}

const winOrLose = () => {
    // numberRolled = 1;
    // pointScore = 0;
    if(numberRolled == 1){
        statement.textContent = ("You lose, keep going!");
        pointScore = 0;
    } else if (pointScore >= 20){
        statement.textContent = ("You Win");
        pointScore = 0;
    } else {
        statement.textContent = ("Play Again?");
    }
    scoreAddition()
}

const scoreAddition = () => {
    // rolls()
    pointScore += numberRolled;
    // totalScore.textContent = (`Total score: ${pointScore}`);
}

rollButton.addEventListener("click", () => {
    rolls()
    winOrLose()
    console.log("pont score " +  pointScore);
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = (`Images/dice${numberRolled}.png`);
    totalScore.textContent = (`Your total score is ${pointScore}`);
})

resetButton.addEventListener("click", () => {
    startGame();
})
