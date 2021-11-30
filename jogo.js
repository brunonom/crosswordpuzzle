let board = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", "0"],
    ["0", "0", "0", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0", "0", "0"],
    ["0", " ", " ", " ", "0", " ", " ", " ", "0", " ", " ", " ", "0"],
    ["0", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "0"],
    ["0", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", "0", " ", " ", " ", " ", " ", "0", " ", " ", " ", " ", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
];
let answer = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', 'V', 'I', 'C', 'E', '0', 'A', 'U', 'L', 'A', 'S', '0', '0'],
    ['0', 'E', 'D', 'E', 'N', '0', 'P', 'R', 'E', 'G', 'O', '0', '0'],
    ['0', 'D', 'E', 'F', 'E', 'N', 'E', 'S', 'T', 'R', 'A', 'R', '0'],
    ['0', 'A', 'M', 'A', '0', 'A', 'N', 'A', '0', 'I', 'R', 'A', '0'],
    ['0', '0', '0', 'L', 'A', 'T', 'A', '0', 'A', 'C', 'E', 'M', '0'],
    ['0', 'I', 'D', 'O', 'L', 'O', '0', 'C', 'A', 'U', 'S', 'O', '0'],
    ['0', 'N', 'E', 'T', 'A', '0', 'A', 'V', 'A', 'L', '0', '0', '0'],
    ['0', 'C', 'C', 'O', '0', 'U', 'S', 'A', '0', 'T', 'R', 'A', '0'],
    ['0', 'H', 'O', 'M', 'O', 'S', 'S', 'E', 'X', 'U', 'A', 'L', '0'],
    ['0', '0', 'R', 'I', 'M', 'E', 'I', '0', 'I', 'R', 'M', 'A', '0'],
    ['0', '0', 'O', 'A', 'S', 'I', 'S', '0', 'S', 'A', 'I', 'R', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];
let cluesacross = [
    ["segundo cargo mais alto do executivo"],
    ["lições"],
    ["paraíso bíblico"],
    ["espécie de macaco da amazônia"],
    ["jogar pela janela"],
    ["sente paixão"],
    ["___ maria braga: apresentadora de televisão brasileira"],
    ["cólera"],
    ["resíduo da cerveja e do refrigerante"],
    ["corte magro do boi"],
    ["alvo da adimração"],
    ["faço acontecer"],
    ["filha da filha"],
    ["aprovação"],
    ["email enviado que preserva o anonimato dos destinitários"],
    ["os estados unidos, como eles se conhecem"],
    ["onomatopéia da metralhadora"],
    ["aquele que é atraído por pessoas do mesmo gênero"],
    ["combinei"],
    ["furacão ____: atingiu a flórida em 2017"],
    ["região fértil do deserto"],
    ["ir embora"]
];
let cluesdown = [
    ["proíbe"],
    ["igualmente"],
    ["decapitação do feto morto para facilitar a saída da bacia"],
    ["n"],
    ["vale _ ____: digno do esforço necessário"],
    ["____ maior: constelação setentrional"],
    ["deixe, em inglês"],
    ["cultivo do solo"],
    ["jô ______: apresentador de televisão brasileiro"],
    ["congênito"],
    ["galho"],
    ["deus no islã"],
    ["padrão de pilha"],
    ["nine ____ nails: banda de rock industrial americana"],
    ["compostura"],
    ["consoantes e vogais de \"cave\", respesctivamente"],
    ["machado de _____: escritor brasileiro"],
    ["consumi"],
    ["____ malek: ator americano de mr. robot"],
    ["organização mundial da saúde"],
    ["elevar, erguer"],
    ["x"]
];
let boardsize;
let squaresize;
let sidelength = board.length - 2;
let typingacross = true;
let selectedrow = 1;
let selectedcol = 1;
let selectedclue = 1;
let boarddiv;
let cluesdiv;

function setclues() {
    let marks = [];
    for (let i = 0; i <= sidelength; i++) {
        for (let j = 0; j <= sidelength; j++) {
            if (board[i][j] != "0") {
                const clueisdown = (board[i - 1][j] == "0" && board[i + 1][j] != "0");
                const clueisacross = (board[i][j - 1] == "0" && board[i][j + 1] != "0");
                if (clueisacross || clueisdown) {
                    marks.push([clueisacross, clueisdown, i, j]);
                }
            }
        }
    }

    acrosscounter = 0;
    downcounter = 0;
    for (let i = 0; i < marks.length; i++) {
        let sq = getsquare(marks[i][2], marks[i][3]);
        let cluenumber = document.createElement("span");
        cluenumber.innerHTML = i + 1;
        sq.appendChild(cluenumber);
        if (marks[i][0]) {
            cluesacross[acrosscounter].unshift(i + 1);
            cluesacross[acrosscounter].push(marks[i][2], marks[i][3]);
            acrosscounter++;
        }
        if (marks[i][1]) {
            cluesdown[downcounter].unshift(i + 1);
            cluesdown[downcounter].push(marks[i][2], marks[i][3]);
            downcounter++;
        }
    }

    cluesdiv = document.createElement("div");
    document.body.insertBefore(cluesdiv, boarddiv);
    cluesdiv.style.height = `${boardsize}px`;
    cluesdiv.style.width = `${boardsize * 0.5}px`;
    cluesdiv.style.border = "10px solid black";
    cluesdiv.style.marginRight = "10px";
    cluesdiv.style.flexDirection = "column";

    for (let i = 0; i < 2; i++) {
        const section = document.createElement("div");
        cluesdiv.appendChild(section);
        section.style.display = "block";
        section.style.height = "50%";
        section.style.width = "100%";
        section.style.backgroundColor = "white";
        section.style.overflowY = "scroll";
        section.style.boxSizing = "border-box";
        const header = document.createElement("h1");
        section.appendChild(header);
        header.style.marginLeft = "10px";

        if (!i) {
            section.style.borderBottom = "5px solid black";
            header.innerHTML = "horizontal";
            for (let j = 0; j < cluesacross.length; j++) {
                const p = document.createElement("p");
                section.appendChild(p);
                p.innerHTML = `${cluesacross[j][0]}: ${cluesacross[j][1]}`;
                p.style.fontSize = "16px";
                p.style.padding = "10px 10px 10px 30px";
                p.id = `clueacross${getsquare(cluesacross[j][2], cluesacross[j][3]).id}`;
            }
        } else {
            section.style.borderTop = "5px solid black";
            header.innerHTML = "vertical";
            for (let j = 1; j < cluesdown.length; j++) {
                const p = document.createElement("p");
                section.appendChild(p);
                p.innerHTML = `${cluesdown[j][0]}: ${cluesdown[j][1]}`;
                p.style.fontSize = "16px";
                p.style.padding = "10px 10px 10px 30px";
                p.id = `cluedown${getsquare(cluesdown[j][2], cluesdown[j][3]).id}`;
            }
        }
    }
}

function updateboard(dont) {
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            let sq = getsquare(i, j);
            if (board[i][j] == "0") {
                sq.style.backgroundColor = "black";
            } else {
                sq.style.backgroundColor = "white";
                sq.children[0].innerHTML = board[i][j];
            }
            let clue = document.getElementById(`clueacross${sq.id}`);
            if (clue != null) clue.style.backgroundColor = "white";
            clue = document.getElementById(`cluedown${sq.id}`);
            if (clue != null) clue.style.backgroundColor = "white";
        }
    }
    if (!dont) hihglight();
}

function fillanswers() {
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            board[i][j] = answer[i][j];
        }
    }
}

function getsquare(r, c) {
    if (r) {
        if (c) {
            // console.log(r, c);
            return document.getElementById(`sq${r * (sidelength + 2) + c}`);
        } else {
            return document.getElementById(`sq${r}`);
        }
    }
    return document.getElementById(`sq${selectedrow * (sidelength + 2) + selectedcol}`);
}

function hihglight() {
    let line = [getsquare()];
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
    getsquare().style.backgroundColor = "lightskyblue";

    console.log(line[0].id);
    let clue = typingacross ? document.getElementById(`clueacross${line[0].id}`) : document.getElementById(`cluedown${line[0].id}`);
    clue.style.backgroundColor = "lightblue";
    clue.scrollIntoView();

}

function setboard() {
    boarddiv = document.createElement("div");
    document.body.appendChild(boarddiv);
    boarddiv.style.height = `${boardsize}px`;
    boarddiv.style.width = `${boardsize}px`;
    boarddiv.style.border = "10px solid black";

    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            let square = document.createElement("div");
            boarddiv.appendChild(square);
            square.id = `sq${i * (sidelength + 2) + j}`;
            square.style.height = `${squaresize}px`;
            square.style.width = `${squaresize}px`;
            square.style.border = "1px solid black";
            square.appendChild(document.createElement("p"));
            if (board[i][j] != "0") {
                square.addEventListener("mousedown", (e) => {
                    const src = (e.target.tagName.toLocaleLowerCase() == "div") ? e.target : e.target.parentElement;
                    const n = parseInt(src.id.slice(2));
                    selectedrow = Math.floor(n / (sidelength + 2));
                    selectedcol = n % (sidelength + 2);
                    updateboard();
                });
            }
        }
    }
    updateboard(1);
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
    boardsize = Math.min(window.innerHeight, window.innerWidth) * 0.7;
    squaresize = boardsize / sidelength - 2;

    document.addEventListener("keyup", (event) => {
        switch (event.code) {
            case "Space":
                typingacross = !typingacross;
                updateboard();
                break;
            case "ArrowUp":
                movecursor("up");
                updateboard();
                break;
            case "ArrowDown":
                movecursor("down");
                updateboard();
                break;
            case "ArrowRight":
                movecursor("right");
                updateboard();
                break;
            case "ArrowLeft":
                movecursor("left");
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
                fillanswers();
                updateboard();
                break;
        }
        if (itsaletter(event.key)) {
            // console.log(event.key.toLocaleUpperCase().length);
            board[selectedrow][selectedcol] = event.key.toLocaleUpperCase();
            typingacross ? movecursor("right") : movecursor("down");
            updateboard();
        }
    });

    setboard();
    setclues();
    return;
}

function movecursor(direction) {
    switch (direction) {
        case "up":
            do {
                selectedrow = ((sidelength - 1) + selectedrow - 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "down":
            do {
                selectedrow = ((sidelength - 1) + selectedrow + 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "left":
            do {
                selectedcol = ((sidelength - 1) + selectedcol - 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        case "right":
            do {
                selectedcol = ((sidelength - 1) + selectedcol + 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == "0");
            break;
        default:
            console.log("unknown direction");
            break;
    }
}

// let prevanswer = [
//     ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', ' ', ' ', 'J', ' ', '0', ' ', ' ', ' ', 'G', ' ', '0', 'L', ' ', ' ', ' ', '0'],
//     ['0', ' ', ' ', 'A', ' ', '0', ' ', ' ', ' ', 'U', ' ', '0', 'A', ' ', ' ', ' ', '0'],
//     ['0', 'R', 'E', 'V', 'E', 'R', 'S', 'I', 'B', 'I', 'L', 'I', 'D', 'A', 'D', 'E', '0'],
//     ['0', ' ', ' ', 'A', '0', ' ', ' ', ' ', '0', 'L', 'O', 'R', 'O', 'T', 'A', 'S', '0'],
//     ['0', ' ', ' ', 'S', ' ', ' ', ' ', '0', 'V', 'H', ' ', ' ', 'B', '0', '0', '0', '0'],
//     ['0', '0', '0', 'C', ' ', ' ', '0', 'D', 'I', 'O', '0', ' ', 'O', 'R', ' ', ' ', '0'],
//     ['0', ' ', ' ', 'R', ' ', '0', 'C', 'E', 'N', 'T', 'R', 'O', 'M', 'E', 'R', 'O', '0'],
//     ['0', ' ', ' ', 'I', '0', 'D', 'E', 'S', 'T', 'I', 'N', 'O', '0', 'Q', ' ', ' ', '0'],
//     ['0', 'N', 'A', 'P', 'O', 'L', 'I', 'T', 'A', 'N', 'O', '0', ' ', 'U', ' ', ' ', '0'],
//     ['0', ' ', ' ', 'T', 'R', ' ', '0', 'E', 'G', 'A', '0', ' ', ' ', 'I', '0', '0', '0'],
//     ['0', '0', '0', '0', 'L', ' ', ' ', 'M', 'E', '0', ' ', ' ', ' ', 'S', ' ', ' ', '0'],
//     ['0', ' ', ' ', ' ', 'E', ' ', ' ', 'P', '0', ' ', ' ', ' ', '0', 'I', ' ', ' ', '0'],
//     ['0', 'C', 'A', 'R', 'A', 'C', 'T', 'E', 'R', 'I', 'S', 'T', 'I', 'C', 'A', 'S', '0'],
//     ['0', ' ', ' ', ' ', 'N', '0', ' ', 'R', ' ', ' ', ' ', '0', ' ', 'A', ' ', ' ', '0'],
//     ['0', ' ', ' ', ' ', 'S', '0', ' ', 'A', ' ', ' ', ' ', '0', ' ', 'O', ' ', ' ', '0'],
//     ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
// ];
// let freespace = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
