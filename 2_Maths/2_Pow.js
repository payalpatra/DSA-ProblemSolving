var Pow = function (x, n) {
    let isNegative = false

    // If the power to find is negative
    if (n < 0) {
        n = -n;
        isNegative = true;
    }
    let pow = 1;
    for (let i = 1; i <= n; i++) {
        pow = pow * x;
    }

    // To Keep track of the power
    if (isNegative === true) {
        return 1 / pow;
    }
    return pow
};
console.log("Output 1 :", Pow(4, -2))

var Pow2 = function (x, n) {
    let ans = 1;
    let N = n;

    // If n is -ve make it +ve
    if (n < 0) N = -n;
    while (N > 0) {
        // Odd Power
        if (N % 2 === 1) {
            ans = ans * x;
            N = N - 1;

        } else {
            // Even Power
            x = x * x;
            N = N / 2
        }
    }
    if (n < 0) ans = 1 / ans;
    return ans

};
console.log("Output 2 :", Pow2(2, 5))

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)

*/