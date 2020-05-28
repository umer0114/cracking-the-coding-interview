/* 8.2 Robot in a Grid

Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that
the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
the bottom right. */

function findPathInGrid(grid, row, col, memo) {
    if (row === 0 && col === 0) {
        return 1;
    }

    if (row < 0 || col < 0) {
        return 0;
    }

    if (grid[row][col] === 'x') {
        return 0;
    }

    return findPathInGrid(grid, row-1, col) + findPathInGrid(grid, row, col-1);
}

let grid = [
    [0, 0, 0], [0, 0, 0], [0, 0, 0]
]

console.log(findPathInGrid(grid, 2, 2));