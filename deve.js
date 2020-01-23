let numberRolled;
let pointscore = 0;


const rolls = () => {
    numberRolled = Math.ceil (Math.random() * 6);
    console.log(numberRolled);
}

// rolls()
// rolls()
// rolls()

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

rolls()
rolls()
rolls()
rolls()
winOrLose()


winOrLose()
winOrLose()
winOrLose()
winOrLose()
