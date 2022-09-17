const game_box = document.querySelectorAll(".game_box");
const turn = document.querySelectorAll(".turn");
const reset = document.querySelector(".btn");
const won_text = document.querySelector(".won");
let counter;
let player = "X";
let move = [];

function won(i, j, k) {
    won_text.innerText = `${player} won the match`;
    game_box[i].classList.add("won-game");
    game_box[j].classList.add("won-game");
    game_box[k].classList.add("won-game");
    game_box.forEach((ele) => {
        ele.classList.remove("active");
    });
    move.forEach((ele, index) => {
        move[index] = "T";
    });
    turn[0].classList.remove("a_turn");
    turn[1].classList.remove("a_turn");
}

function match_status() {
    if (move[0] == player) {
        if (move[1] == player && move[2] == player) {
            won(0, 1, 2);
            return;
        } else if (move[3] == player && move[6] == player) {
            won(0, 3, 6);
            return;
        } else if (move[4] == player && move[8] == player) {
            won(0, 4, 8);
            return;
        }
    }
    if (move[2] == player) {
        if (move[4] == player && move[6] == player) {
            won(2, 4, 6);
            return;
        } else if (move[5] == player && move[8] == player) {
            won(2, 5, 8);
            return;
        }
    }
    if (move[4] == player) {
        if (move[1] == player && move[7] == player) {
            won(4, 1, 7);
            return;
        } else if (move[3] == player && move[5] == player) {
            won(3, 4, 5);
            return;
        }
    }
    if (move[6] == player) {
        if (move[7] == player && move[8] == player) {
            won(6, 7, 8);
            return;
        }
    }

    if (counter == 9) {
        won_text.innerText = `Match Tie!`;
        turn[0].classList.remove("a_turn");
        turn[1].classList.remove("a_turn");

    }
}

function start() {
    counter = 0;
    player = "X";
    for (i = 0; i < 9; i++) {
        move[i] = null;
    }
    won_text.innerText = "";
    game_box.forEach((box) => {
        box.classList.remove("won-game");
        box.innerText = "";
        box.classList.add("active");
        box.addEventListener('click', () => {
            if (move[parseInt(box.id)] == null) {
                move[parseInt(box.id)] = player;
                box.innerText = player;
                counter++;
                box.classList.remove("active");
                if (player === "X") {
                    turn[0].classList.remove("a_turn");
                    turn[1].classList.add("a_turn");
                    match_status();
                    player = "O";
                } else {
                    turn[0].classList.add("a_turn");
                    turn[1].classList.remove("a_turn");
                    match_status();
                    player = "X";
                }
            }
        });
    });
    turn[0].classList.add("a_turn");
    turn[1].classList.remove("a_turn");
}


start();
reset.addEventListener('click', () => {
    start();
});