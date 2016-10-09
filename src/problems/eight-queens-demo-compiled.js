/**
 * Created by enrique.munguia on 10/8/16.
 */

function createBoard() {
    let board = new Array(8);
    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8);
        board[i].fill('-');
    }
    return board;
}

function placeQueen(board, i, j) {
    for (let a = 0; a < 8; a++) {
        board[i][a] = '*';
        board[a][j] = '*';
    }

    for (let a = i, b = j; a >= 0; a--, b--) {
        if (board[a][b]) {
            board[a][b] = '*';
        }
    }

    for (let a = i, b = j; a < 8; a++, b--) {
        if (board[a] && board[a][b]) {
            board[a][b] = '*';
        }
    }

    for (let a = i, b = j; a >= 0; a--, b++) {
        if (board[a][b]) {
            board[a][b] = '*';
        }
    }

    for (let a = i, b = j; a < 8; a++, b++) {
        if (board[a] && board[a][b]) {
            board[a][b] = '*';
        }
    }

    board[i][j] = 'Q';
}

function printBoard(board) {
    for (let i = 0; i < 8; i++) {
        let row = '';
        for (let j = 0; j < 8; j++) {
            row += `${ board[i][j] } `;
        }
        console.log(row);
    }
}

const board = createBoard();
// placeQueen(board, 0, 0);
// printBoard(board);

function eightQueens(board, n) {}

//# sourceMappingURL=eight-queens-demo-compiled.js.map