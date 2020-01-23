// html elements declartions
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("score");
const diceimage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");

diceimage.style.visibility= "hidden";

// function declarions
let numberRolled;
let pointscore = 0;


const rolls = () => {
    numberRolled = Math.ceil (Math.random() * 6);
    console.log(numberRolled);
}

const winOrLose = () => {
    // numberRolled = 1;
    // pointscore = 0;
    if(numberRolled == 1){
        console.log("You lose");
        pointscored = 0;
    } else if (pointscore >= 20){
        console.log("how did you know? Did you cheat?");
        pointscored = 0;
    } else {
        console.log("Play Agina?");
        pointscored = 0;
    }
    scoreAddition()
}

const scoreAddition = () => {
    rolls()
    pointscore += numberRolled;
    console.log(`Total score: ${pointscore}`);
}

rollButton.addEventListener("click", () => {
    rolls()
    totalScore.textContent = pointscore += numberRolled;
    playerScore.textContent = numberRolled;
    diceimage.style.visibility = "visible";
    diceimage.src = `Images/dice${numberRolled}.png`
    console.log("This button works.");
})


// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
// rolls()
// rolls()
// rolls()
// rolls()
// winOrLose()
