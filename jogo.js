let board = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', '0', '0'],
    ['0', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', '0', '0'],
    ['0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0'],
    ['0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0'],
    ['0', '0', '0', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0'],
    ['0', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', '0'],
    ['0', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0', '0', '0'],
    ['0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0'],
    ['0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0'],
    ['0', '0', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0'],
    ['0', '0', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
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
let cluenumbers = [
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 01, 02, 03, 04, 00, 05, 06, 07, 08, 09, 00, 00],
    [00, 10, 99, 99, 99, 00, 11, 99, 99, 99, 99, 00, 00],
    [00, 12, 99, 99, 99, 13, 99, 99, 99, 99, 99, 14, 00],
    [00, 15, 99, 99, 00, 16, 99, 99, 00, 17, 99, 99, 00],
    [00, 00, 00, 18, 19, 99, 99, 00, 20, 99, 99, 99, 00],
    [00, 21, 22, 99, 99, 99, 00, 23, 99, 99, 99, 99, 00],
    [00, 24, 99, 99, 99, 00, 25, 99, 99, 99, 00, 00, 00],
    [00, 26, 99, 99, 00, 27, 99, 99, 00, 28, 29, 30, 00],
    [00, 31, 99, 99, 32, 99, 99, 99, 33, 99, 99, 99, 00],
    [00, 00, 34, 99, 99, 99, 99, 00, 35, 99, 99, 99, 00],
    [00, 00, 36, 99, 99, 99, 99, 00, 37, 99, 99, 99, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
];
let cluesacross = [
    [1, 'segundo cargo mais alto do executivo'],
    [5, 'lições'],
    [10, 'paraíso bíblico'],
    [11, 'espécie de macaco da amazônia'],
    [12, 'jogar pela janela'],
    [15, 'sente paixão'],
    [16, '___ maria braga: apresentadora de televisão brasileira'],
    [17, 'cólera'],
    [18, 'resíduo da cerveja e do refrigerante'],
    [20, 'corte magro do boi'],
    [21, 'alvo da adimração'],
    [23, 'faço acontecer'],
    [24, 'filha da filha'],
    [25, 'aprovação'],
    [26, 'email enviado que preserva o anonimato dos destinitários'],
    [27, 'os estados unidos, como eles se conhecem'],
    [28, 'onomatopéia da metralhadora'],
    [31, 'aquele que é atraído por pessoas do mesmo gênero'],
    [34, 'combinei'],
    [35, 'furacão ____: atingiu a flórida em 2017'],
    [36, 'região fértil do deserto'],
    [37, 'ir embora'],
];
let cluesdown = [
    [1, 'proíbe'],
    [2, 'igualmente'],
    [3, 'decapitação do feto morto para facilitar a saída da bacia'],
    [4, 'n'],
    [5, 'vale _ ____: digno do esforço necessário'],
    [6, '____ maior: constelação setentrional'],
    [7, 'deixe, em inglês'],
    [8, 'cultivo do solo'],
    [9, 'jô ______: apresentador de televisão brasileiro'],
    [13, 'congênito'],
    [14, 'galho'],
    [19, 'deus no islã'],
    [20, 'padrão de pilha'],
    [21, 'nine ____ nails: banda de rock industrial americana'],
    [22, 'compostura'],
    [23, 'consoantes e vogais de \'cave\', respesctivamente'],
    [25, 'machado de _____: escritor brasileiro'],
    [27, 'consumi'],
    [29, '____ malek: ator americano de mr. robot'],
    [30, 'organização mundial da saúde'],
    [32, 'elevar, erguer'],
    [33, 'x'],
];
let boardsize;
let squaresize;
let sidelength = board.length - 2;

let typingacross = true;
let selectedrow = 1;
let selectedcol = 1;
let alreadywon = false;

let highlightedsquares = [];
let highlightedclue;

function setclues() {
    const getsqid = (num) => {
        for (let i = 1; i <= sidelength; i++) {
            for (let j = 1; j <= sidelength; j++) {
                if (cluenumbers[i][j] == num) return (i * (sidelength + 2) + j);
            }
        }
    };
    cluesdiv = document.createElement('div');
    document.body.appendChild(cluesdiv);
    cluesdiv.style.height = `${boardsize}px`;
    cluesdiv.style.width = `${boardsize * 0.5}px`;
    cluesdiv.style.border = '10px solid black';
    cluesdiv.style.marginRight = '10px';
    cluesdiv.style.flexDirection = 'column';

    for (let i = 0; i < 2; i++) {
        const section = document.createElement('div');
        cluesdiv.appendChild(section);
        section.style.boxSizing = 'border-box';
        section.style.display = 'block';
        section.style.height = '50%';
        section.style.width = '100%';
        section.style.backgroundColor = 'white';

        const header = document.createElement('h1');
        section.appendChild(header);
        header.style.boxSizing = 'border-box';
        header.style.marginLeft = '10px';
        header.style.height = '20%';
        header.style.margin = 0;
        header.style.borderBottom = '1px solid black';
        header.style.padding = '15px 0 0 20px';

        const scrollable = document.createElement('div');
        section.appendChild(scrollable);
        scrollable.style.display = 'block';
        scrollable.style.boxSizing = 'border-box';
        scrollable.style.overflowY = 'scroll';
        scrollable.style.height = '80%';
        scrollable.style.width = '100%';

        if (!i) {
            section.style.borderBottom = '5px solid black';
            header.innerHTML = 'horizontal';
            for (let j = 0; j < cluesacross.length; j++) {
                const p = document.createElement('p');
                scrollable.appendChild(p);
                p.innerHTML = `${cluesacross[j][0]}: ${(cluesacross[j][1])}`;
                p.style.fontSize = '16px';
                p.style.lineHeight = '1.5';
                p.style.padding = '20px 10px 10px 40px';
                p.id = `cla${getsqid(cluesacross[j][0])}`;
                p.style.borderBottom = '1px solid black';
                p.addEventListener('click', (e) => {
                    const n = e.target.id.slice(3);
                    selectedrow = Math.floor(n / (sidelength + 2));
                    selectedcol = n % (sidelength + 2);
                    typingacross = true;
                    highlight();
                });
            }
        } else {
            section.style.borderTop = '5px solid black';
            header.innerHTML = 'vertical';
            for (let j = 0; j < cluesdown.length; j++) {
                const p = document.createElement('p');
                scrollable.appendChild(p);
                p.innerHTML = `${cluesdown[j][0]}: ${(cluesdown[j][1])}`;
                p.style.fontSize = '16px';
                p.style.lineHeight = '1.5';
                p.style.padding = '20px 10px 10px 40px';
                p.id = `cld${getsqid(cluesdown[j][0])}`;
                p.style.borderBottom = '1px solid black';
                p.addEventListener('mousedown', (e) => {
                    const n = e.target.id.slice(3);
                    selectedrow = Math.floor(n / (sidelength + 2));
                    selectedcol = n % (sidelength + 2);
                    typingacross = false;
                    highlight();
                });
            }
        }
    }
}

function checkwin() {
    if (alreadywon) return false;
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            if (board[i][j] != answer[i][j]) {
                return false;
            }
        }
    }
    alreadywon = true;
    return true;
}

function updateboard() {
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            let sq = getsquare(i, j);
            if (board[i][j] == '0') {
                sq.style.backgroundColor = 'black';
            } else {
                sq.style.backgroundColor = 'white';
                sq.children[0].innerHTML = board[i][j];
            }
        }
    }
}

function solveboard() {
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            board[i][j] = answer[i][j];
        }
    }
}

function clearboard() {
    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            board[i][j] = board[i][j] == '0' ? '0' : ' ';
        }
    }
}

function getsquare(r, c) {
    if (r) {
        if (c) {
            return document.getElementById(`sq${r * (sidelength + 2) + c}`);
        } else {
            return document.getElementById(`sq${r}`);
        }
    }
    return document.getElementById(`sq${selectedrow * (sidelength + 2) + selectedcol}`);
}

function highlight() {
    clearhighlight();
    highlightedsquares = [getsquare()];
    let copy = selectedcol;
    if (typingacross) {
        copy = selectedcol - 1;
        while (board[selectedrow][copy] != '0') {
            highlightedsquares.unshift(getsquare(selectedrow, copy));
            copy--;
        }

        highlightedclue = document.getElementById(`cla${highlightedsquares[0].id.slice(2)}`);

        copy = selectedcol + 1;
        while (board[selectedrow][copy] != '0') {
            highlightedsquares.push(getsquare(selectedrow, copy));
            copy++;
        }
    } else /*typingdown*/ {
        copy = selectedrow - 1;
        while (board[copy][selectedcol] != '0') {
            highlightedsquares.unshift(getsquare(copy, selectedcol));
            copy--;
        }

        highlightedclue = document.getElementById(`cld${highlightedsquares[0].id.slice(2)}`);

        copy = selectedrow + 1;
        while (board[copy][selectedcol] != '0') {
            highlightedsquares.push(getsquare(copy, selectedcol));
            copy++;
        }
    }

    for (let i = 0; i < highlightedsquares.length; i++) {
        highlightedsquares[i].style.backgroundColor = 'lightblue';
    }
    getsquare().style.backgroundColor = 'lightskyblue';

    highlightedclue.style.backgroundColor = 'lightblue';
    highlightedclue.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
}

function clearhighlight() {
    for (let i = 0; i < highlightedsquares.length; i++) {
        highlightedsquares[i].style.backgroundColor = 'white';
    }
    if (highlightedclue) highlightedclue.style.backgroundColor = 'white';
}

function setboard() {
    boarddiv = document.createElement('div');
    document.body.appendChild(boarddiv);
    boarddiv.style.height = `${boardsize}px`;
    boarddiv.style.width = `${boardsize}px`;
    boarddiv.style.border = '10px solid black';

    for (let i = 1; i <= sidelength; i++) {
        for (let j = 1; j <= sidelength; j++) {
            const square = document.createElement('div');
            boarddiv.appendChild(square);
            square.id = `sq${i * (sidelength + 2) + j}`;
            square.style.height = `${squaresize}px`;
            square.style.width = `${squaresize}px`;
            square.style.border = '1px solid black';
            square.appendChild(document.createElement('p'));

            const span = document.createElement('span');
            square.appendChild(span);

            if (board[i][j] != '0') {
                span.innerHTML = `${cluenumbers[i][j] != 99 ? cluenumbers[i][j] : ''}`;
                square.addEventListener('mousedown', (e) => {
                    const src = (e.target.tagName.toLocaleLowerCase() == 'div') ? e.target : e.target.parentElement;
                    const n = parseInt(src.id.slice(2));
                    selectedrow = Math.floor(n / (sidelength + 2));
                    selectedcol = n % (sidelength + 2);
                    highlight();
                });
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
    boardsize = Math.min(window.innerHeight, window.innerWidth) * 0.7;
    squaresize = boardsize / sidelength - 2;

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'Space': typingacross = !typingacross; highlight(); break;
            case 'ArrowUp': movecursor('up'); highlight(); break;
            case 'ArrowDown': movecursor('down'); highlight(); break;
            case 'ArrowRight': movecursor('right'); highlight(); break;
            case 'ArrowLeft': movecursor('left'); highlight(); break;
            case 'Backspace':
                if (board[selectedrow][selectedcol] == ' ') {
                    typingacross ? movecursor('left') : movecursor('up');
                } else {
                    board[selectedrow][selectedcol] = ' ';
                }
                updateboard(); highlight(); break;
            case 'Delete': board[selectedrow][selectedcol] = ' '; updateboard(); highlight(); break;
        }
        if (itsaletter(event.key)) {
            board[selectedrow][selectedcol] = event.key.toLocaleUpperCase();
            typingacross ? movecursor('right') : movecursor('down');
            updateboard(); highlight();
            if (checkwin()) {alert('You Won!');}
        }
    });

    const banner = document.createElement('h1');
    document.body.appendChild(banner);
    banner.innerHTML = 'palavras cruzadas';
    banner.style.color = 'white';
    banner.style.height = `10vh`;
    banner.style.width = `90vw`;
    banner.style.display = 'flex';
    banner.style.margin = '0';
    banner.style.alignItems = 'center';
    banner.style.justifyContent = 'center';

    const instructions = document.createElement('p');
    document.body.appendChild(instructions);
    instructions.innerHTML = `controles: setas e barra de espaço`;
    instructions.style.position = 'absolute';
    instructions.style.bottom = '40px';
    instructions.style.left = '40px';
    instructions.style.color = 'white';
    instructions.style.fontSize = '20px';

    setclues();
    setboard();
    highlight();
    setbuttons();
    return;
}

function setbuttons() {
    const buttondiv = document.createElement('div');
    document.body.appendChild(buttondiv);
    buttondiv.style.height = `10vh`;
    buttondiv.style.width = `90vw`;

    const clearbutton = document.createElement('div');
    buttondiv.appendChild(clearbutton);
    clearbutton.style.backgroundColor = 'white';
    clearbutton.appendChild(document.createElement('p'));
    clearbutton.children[0].innerHTML = 'limpar tudo';
    clearbutton.style.border = '10px solid black';
    clearbutton.style.padding = '10px';
    clearbutton.style.marginRight = '10px';
    clearbutton.children[0].style.userSelect = 'none';
    clearbutton.addEventListener('mouseover', (e) => {
        const src = e.target.tagName.toLocaleLowerCase() == 'div' ? e.target : e.target.parentElement;
        src.style.backgroundColor = 'lightgray';
    });
    clearbutton.addEventListener('mouseout', (e) => {
        const src = e.target.tagName.toLocaleLowerCase() == 'div' ? e.target : e.target.parentElement;
        src.style.backgroundColor = 'white';
    });
    clearbutton.addEventListener('click', (e) => {
        clearboard();
        updateboard();
        clearhighlight();
    });
    const solvebutton = document.createElement('div');
    buttondiv.appendChild(solvebutton);
    solvebutton.style.backgroundColor = 'white';
    solvebutton.appendChild(document.createElement('p'));
    solvebutton.children[0].innerHTML = 'mostrar resposta';
    solvebutton.style.border = '10px solid black';
    solvebutton.style.padding = '10px';
    solvebutton.style.marginRight = '10px';
    solvebutton.children[0].style.userSelect = 'none';
    solvebutton.addEventListener('mouseover', (e) => {
        const src = e.target.tagName.toLocaleLowerCase() == 'div' ? e.target : e.target.parentElement;
        src.style.backgroundColor = 'lightgray';
    });
    solvebutton.addEventListener('mouseout', (e) => {
        const src = e.target.tagName.toLocaleLowerCase() == 'div' ? e.target : e.target.parentElement;
        src.style.backgroundColor = 'white';
    });
    solvebutton.addEventListener('click', (e) => {
        solveboard();
        alreadywon = true;
        updateboard();
        clearhighlight();
    });
    // buttondiv.style.display = `${boardsize + boardsize * 0.5}`;
}

function movecursor(direction) {
    switch (direction) {
        case 'up':
            if (selectedrow == 1);
            do {
                selectedrow = ((sidelength - 1) + selectedrow - 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == '0');
            break;
        case 'down':
            do {
                selectedrow = ((sidelength - 1) + selectedrow + 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == '0');
            break;
        case 'left':
            do {
                selectedcol = ((sidelength - 1) + selectedcol - 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == '0');
            break;
        case 'right':
            do {
                selectedcol = ((sidelength - 1) + selectedcol + 1) % sidelength + 1;
            } while (board[selectedrow][selectedcol] == '0');
            break;
    }
}
