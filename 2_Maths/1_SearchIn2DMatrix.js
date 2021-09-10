// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

function SearchIn2DMatrix(matrix, target) {
    if (matrix.length === 0) return [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === target) return true
        }
    }
    return false

}

console.log(SearchIn2DMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))

// INPUT = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3
// OUTPUT = true

/*

TIME COMPLEXITY - O(M * N)
SPACE COMPLEXITY - O(N) + 0(M)

*/

function SearchIn2DMatrix2(matrix, target) {
    let length = matrix.length
    let found = false;

    // Binary Search
    function isFound(arr) {
        let l = 0;
        let r = arr.length - 1
        let mid = Math.floor((l + r) / 2)

        while (arr[mid] !== target && l <= r) {
            if (target < arr[mid]) r = mid - 1
            else l = mid + 1

            mid = Math.floor((l + r) / 2)
        }
        return arr[mid] === target ? true : false

    }

    // Traversing through the matrix
    for (let i = 0; i < length; i++) {
        if (isFound(matrix[i]) === true) {
            found = true
            break;
        }
    }
    return found;


}

console.log(SearchIn2DMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))

// INPUT = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3
// OUTPUT = true

/*

TIME COMPLEXITY - O(N * Log N)
SPACE COMPLEXITY - O(N) + 0(M)

*/

function SearchIn2DMatrix3(matrix, target) {
    let row = 0;
    let col = matrix[0].length -1
    let found = false;

    while (row < matrix.length && col >=0) {
        if (target === matrix[row][col]) {
            found = true;
            break;
        }
        if (target < matrix[row][col]) {
            col--;
        } else {
            row++;
        }
    }
    return found;

}

console.log(SearchIn2DMatrix3([[1]], 1))
