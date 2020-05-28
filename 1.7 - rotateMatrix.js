/* Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?
Hints: #51, #100 */

/* 
[1 2 3 4
 5 6 7 8
 9 2 3 4
 3 4 6 8]

 [1 5 9 3
  2 6 2 4
  3 7 3 6
  4 8 4 8]
  */

function swap (val1, val2) {
    let temp = val2;
    val2 = val1;
    val1 = temp;
}

function rotateMatrix(matrix) {
    let x = matrix.length;
    
    let rotatedMatrice = new Array (x);

    for (let i = 0; i < x; i++) {
        rotatedMatrice[i] = new Array (x);
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            let buffer = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = buffer;
        }
    }

    return matrix;
}

//rotateMatrix
console.log('rotateMatrix');
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 2, 3, 4], [3, 4, 6, 8]]));