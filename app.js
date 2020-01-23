let player1 = true;

let game = () => {
    if (player1) {
        console.log("player one turn")
        player1 = false
    } else {
        console.log("player 2 turn")
        player1 = true
    }
}

// console.log(game);

game();
game();
game();
game();
game();
game();



