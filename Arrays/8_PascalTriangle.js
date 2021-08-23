// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// How To Find the value of an element at any given row and Column

// Formula - R-1 
//               C 
//                 c-1

// How To Compute Combination Values

// 4 C 2 = 4 * 3 / 2 * 1
// nCr = n! / r!( n -r)!


// How To Compute Permutation Values

// 4 P 2 = 4 * 3 * 2 / 2 * 1
// nPr = n! / ( n -r)!


function Combination(n, r) {
    let res = 1;
    for (let i = 0; i < r; ++i) {
        res = res * (n - i);
        res = res / (i + 1)
    }
    return res
}

console.log(Combination(4, 3))

function fact(n){
    if (n === 0|| n === 1) return 1
    return n * fact(n - 1)
}

function Permutation(n, r) {
    let P = 1;

    // Compute n*(n-1)*(n-2)....(n-k+1)
    for (let i = 0; i < r; i++)
        P = fact(n) / fact(r)


    return P;
}

console.log(Permutation(4, 3))

var generate = function (numRows) {

    // Initialize an Pascal with the given input length
    let pascal = new Array(numRows.length)

    // Initiallize first and last element of the row with 1
    for (let i = 0; i < numRows; i++) {

        pascal[i] = new Array(i + 1)

        // First element and last element initialized to 1
        pascal[i][0] = pascal[i][i] = 1;

        // Traverse till no of rows 
        // No elements = no of rows
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }

    }
    return pascal

};

console.log(generate(5))


// OUTPUT - [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]

/*

TIME COMPLEXITY - O(N2)
SPACE COMPLEXITY - O(N2)

*/