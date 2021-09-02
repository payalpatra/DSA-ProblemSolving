// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

function SearchIn2DMatrix(matrix, target) {
    if(matrix.length === 0) return [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === target) return true
        }
    }
    return false

}

console.log(SearchIn2DMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))


function SearchIn2DMatrix2(matrix, target) {


}

console.log(SearchIn2DMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))

// INPUT = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3
// OUTPUT = true

/*

TIME COMPLEXITY - O(M * N)
SPACE COMPLEXITY - O(N) + 0(M)

*/ 