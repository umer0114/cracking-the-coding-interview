/* Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to O. */

function zeroMatrix (matrice) {
    const rowIndexes = new Set(), colIndexes = new Set();
    for (let row = 0; row < matrice.length; row++) {
        for (let col = 0; col < matrice[0].length; col++) {
            if (matrice[row][col] === 0) {
                rowIndexes.add(row);
                colIndexes.add(col);
                break;
            }
        }
    }

    for (var it = rowIndexes.values(), rowToDelete = null; rowToDelete=it.next().value; ) {
        for (let col = 0; col < matrice[0].length; col++) {
            matrice[rowToDelete][col] = 0;

        }
    }

    for (var it = colIndexes.values(), colToDelete = null; colToDelete=it.next().value;) {
        for (let row = 0; row < matrice.length; row++) {
            matrice[row][colToDelete] = 0;
        }
    }

    return matrice;
}


console.log('zeroMatrix');
console.log('([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 0, 3, 4 ], [ 3, 4, 6, 8 ] ])');

console.log(zeroMatrix ([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 0, 3, 4 ], [ 3, 4, 6, 8 ] ]))
