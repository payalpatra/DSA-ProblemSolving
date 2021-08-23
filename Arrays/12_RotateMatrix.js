// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation

// APPROACH 
// -- STEP 1- Transpose 
// -- STEP 2 - REVERSE EACH ROW

var rotate = function (matrix) {
    // Transpose - Columns become the rows

    // No of Colums
    let col = matrix[0].length
    // No of Rows
    let row = matrix.length

    // Transpose
    for (let i = 0; i < row; i++) {
        for (let j = i; j < col; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // Reverse Every Row
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [matrix[i][matrix.length - 1 - j], matrix[i][j]]
        }
    }
    return matrix

};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))

// INPUT = [[1,2,3],[4,5,6],[7,8,9]]
// OUTPUT = [[7,4,1],[8,5,2],[9,6,3]]

/*

TIME COMPLEXITY - O(N2) + O(N2)
SPACE COMPLEXITY - O(1)

*/