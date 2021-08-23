// Given an m x n integer matrix , if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

// Example 1: 

// Input: matrix = [[1,1,1],
//                  [1,0,1],
//                  [1,1,1]]

// Output:           [[1,0,1],
//                   [0,0,0],
//                   [1,0,1]]

// Example 2: 

// Input: matrix = [[0, 1, 2, 0],
//                  [3, 4, 5, 2],
//                  [1, 3, 1, 5]

// Output:           [ [ 0, 0, 0, 0 ], 
//                     [ 0, 4, 5, 0 ], 
//                     [ 0, 3, 1, 0 ]
//                   ]



function setMatrixZeros(matrix) {

    const dimensions = [matrix.length, matrix[0].length];

    let [m, n] = dimensions

    let Row = new Array(m)
    let Col = new Array(n)


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                // console.log(row, col)
                Row[row] = 0;
                Col[col] = 0;

            }

        }
    }


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (Row[row] === 0 || Col[col] === 0) {
                matrix[row][col] = 0;
            }

        }
    }
    return matrix;

}

console.log(setMatrixZeros([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))

// OUTPUT - [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

/*

TIME COMPLEXITY - O(M * N) + 0(M * N) = 2(M * N)
SPACE COMPLEXITY - O(N) + 0(M)

*/