let vw;
let vh;
let boardsize;
let squaresize;
let freespace = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let typingacross = true;
let selectedrow = 1;
let selectedcol = 1;
let board = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", "0", "0", "0"],
    ["0", "0", "0", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", "0", " ", " ", " ", " ", " ", " ", " ", "0", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", "0", "0", "0"],
    ["0", "0", "0", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
];

function setclues() {
    const across = [

    ];
    const down = [

    ];
}

function updateboard() {
    for (let i = 1; i <= 15; i++) {
        for (let j = 1; j <= 15; j++) {
            let sq = getsquare(i, j);
            if (board[i][j] == "0") {
                sq.style.backgroundColor = "black";
            } else {
                sq.style.backgroundColor = "white";
                sq.innerHTML = `${board[i][j]}`;
                // console.log(sq, board[i][j]);
            }
        }
    }
    hihglightsquare();
}

function getsquare(r, c) {
    if (r) {
        if (c) {
            return document.getElementById(`sq${r * 17 + c}`);
        } else {
            return document.getElementById(`sq${r}`);
        }
    }
    return document.getElementById(`sq${selectedrow * 17 + selectedcol}`);
}

function clearhighlights() {
    for (let i = 1; i <= 15; i++) {
        for (let j = 1; j <= 15; j++) {
            if (board[i][j] != "0") {
                getsquare(i, j).style.backgroundColor = "white";
            }
        }
    }
}

function hihglightsquare() {
    clearhighlights();
    let line = [getsquare()];
    line[0].style.backgroundColor = "lightskyblue";
    line.pop();
    let copy = selectedcol;
    if (typingacross) {
        copy = selectedcol;
        copy++;
        while (board[selectedrow][copy] != "0") {
            line.push(getsquare(selectedrow, copy));
            copy++;
        }
        copy = selectedcol;
        copy--;
        while (board[selectedrow][copy] != "0") {
            line.unshift(getsquare(selectedrow, copy));
            copy--;
        }
    } else /*typingdown*/ {
        copy = selectedrow;
        copy++;
        while (board[copy][selectedcol] != "0") {
            line.push(getsquare(copy, selectedcol));
            copy++;
        }
        copy = selectedrow;
        copy--;
        while (board[copy][selectedcol] != "0") {
            line.unshift(getsquare(copy, selectedcol));
            copy--;
        }
    }
    for (let i = 0; i < line.length; i++) {
        line[i].style.backgroundColor = "lightblue";
    }
}

function setboard() {
    let boarddiv = document.createElement("div");
    document.body.appendChild(boarddiv);
    boarddiv.style.height = `${boardsize}px`;
    boarddiv.style.width = `${boardsize}px`;
    boarddiv.style.border = "10px solid black";

    for (let i = 1; i <= 15; i++) {
        for (let j = 1; j <= 15; j++) {
            let square = document.createElement("div");
            boarddiv.appendChild(square);
            square.id = `sq${i * 17 + j}`;
            square.style.height = `${squaresize}px`;
            square.style.width = `${squaresize}px`;
            square.style.border = "1px solid black";
            if (board[i][j] != "0") {
                square.addEventListener("mousedown", (e) => {
                    const n = parseInt(e.srcElement.id.slice(2));
                    selectedrow = Math.floor(n / 17);
                    selectedcol = n % 17;
                    updateboard();
                });
                // square.addEventListener("mouseout", () => {getsquare(i, j).style.backgroundColor = "white";});
                // square.addEventListener("mouseover", (e) => {getsquare(i, j).style.backgroundColor = "lightgray";});
            }
        }
    }
    updateboard();
    return;
}

function itsaletter(str) {
    return (
        str.length == 1 &&
        (
            ('a'.charCodeAt(0) <= str.charCodeAt(0) && str.charCodeAt(0) <= 'z'.charCodeAt(0))
            ||
            ('A'.charCodeAt(0) <= str.charCodeAt(0) && str.charCodeAt(0) <= 'Z'.charCodeAt(0))
        )
    );
}

function setgame() {
    vh = window.innerHeight;
    vw = window.innerWidth;
    boardsize = Math.min(vh, vw) * 70 / 100;
    squaresize = boardsize / 15 - 2;

    document.addEventListener("keyup", (event) => {
        // console.log(event);
        switch (event.code) {
            case "Space":
                typingacross = !typingacross;
                updateboard();
                break;
            case "ArrowUp":
                typingacross ? typingacross = false : movecursor("up");
                updateboard();
                break;
            case "ArrowDown":
                typingacross ? typingacross = false : movecursor("down");
                updateboard();
                break;
            case "ArrowRight":
                typingacross ? movecursor("right") : typingacross = true;
                updateboard();
                break;
            case "ArrowLeft":
                typingacross ? movecursor("left") : typingacross = true;
                updateboard();
                break;
            case "Backspace":
                if (board[selectedrow][selectedcol] == " ") {
                    typingacross ? movecursor("left") : movecursor("up");
                } else {
                    board[selectedrow][selectedcol] = " ";
                }
                updateboard();
                break;
            case "Delete":
                board[selectedrow][selectedcol] = " ";
                updateboard();
                break;
            case "NumpadEnter":
                console.log(board);
                break;
        }
        if (itsaletter(event.key)) {
            board[selectedrow][selectedcol] = event.key.toLocaleUpperCase();
            typingacross ? movecursor("right") : movecursor("down");
            updateboard();
        }
    });

    setclues();
    setboard();
    return;
}

function movecursor(direction) {
    switch (direction) {
        case "up":
            do {
                selectedrow = (14 + selectedrow - 1) % 15 + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "down":
            do {
                selectedrow = (14 + selectedrow + 1) % 15 + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "left":
            do {
                selectedcol = (14 + selectedcol - 1) % 15 + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "right":
            do {
                selectedcol = (14 + selectedcol + 1) % 15 + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        default:
            console.log("unknown direction");
            break;
    }
}
