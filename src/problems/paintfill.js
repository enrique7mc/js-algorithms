/**
 * Created by enrique.munguia on 10/12/16.
 */

const grid = [
    [0, 2, 2, 2, 3],
    [0, 2, 4, 4, 3],
    [2, 4, 4, 4, 3],
    [1, 4, 4, 4, 4],
    [1, 1, 1, 3, 4]
];

const min = 0;
const max = grid.length - 1;

function isInBoundaries(coord) {
    return coord >= min && coord <= max;
}

/*
    Complexity
    Time: O(n) n number of cells
    Space: O(n) call stack
 */

function paintFill(row, col, startColor, newColor) {
    if(!isInBoundaries(row) || !isInBoundaries(col)) return;
    if(grid[row][col] !== startColor) return;

    grid[row][col] = newColor;
    paintFill(row + 1, col, startColor, newColor);
    paintFill(row - 1, col, startColor, newColor);
    paintFill(row, col + 1, startColor, newColor);
    paintFill(row, col - 1, startColor, newColor);
}

console.log(grid);
paintFill(2, 1, 4, 5);
console.log(grid);