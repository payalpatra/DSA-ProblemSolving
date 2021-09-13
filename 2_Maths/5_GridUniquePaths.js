// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// ------------ METHOD 1 ------------ \\
var uniquePaths = function (m, n) {

    if ((m === 1) || (n === 1)) return 1

    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)

};

console.log(uniquePaths(3, 3))

/*

TIME COMPLEXITY - Exponential 
SPACE COMPLEXITY - O(1)

*/


// ------------ METHOD 2 ------------ \\
var DpCountPaths = function (m, n ) {
    let i;
    let j;
    let dp = new Array(m + 1).fill()

    // Initialize DP
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(-1)
    }

    if (i === (n - 1) && j === (m - 1)) return 1;
    if (i >= n || j >= m) return 0
    if(dp[i][j] !== -1) return dp[i][j]
    else return dp[i][j] = DpCountPaths



};

console.log(DpCountPaths(7, 3))

/*

TIME COMPLEXITY - O(M * N)
SPACE COMPLEXITY - O(M * N)

*/

// ------------ METHOD 3 ------------ \\

// BASED ON COMBINATION (MOST OPTIMIZED):
/*

If there are M Rows and N Columns
then the number of right directions should be n - 1
and the number of buttom directions should be M - 1

// TOTAL NO OF DIRECTIONS THAT NEEDS BE TAKEN = M - 1(BUTTOM) + N - 1 (RIGHT)
// COMBINATIONS --> m + n - 2 C m-1 OR m + n - 2 C n - 1

*/

var uniquePaths2 = function (m, n) {
    let N = n + m - 2;
    let r = m - 1;
    let res = 1;

    for (let i = 1; i <= r; i++) {
        res = res * (N - r + i) / i
    }

    return res
};

console.log(uniquePaths2(3, 3))

/*

TIME COMPLEXITY - O(M - 1) or O(N -1 ) [Depending on the formula used]
SPACE COMPLEXITY - O(1)

*/