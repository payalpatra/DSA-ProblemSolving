// Given an integer array nums , find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// BRUTE FORCE APPROACH -
function bruteForce(arr) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let j = i; j < arr.length; j++) {
            // Sum of sub arrays
            sum = sum + arr[j]
            // Max sum of subarray
            max = Math.max(max, sum)
        }
    }
    return max;
}

// console.log(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



// LINEAR SOLUTION
function KadaneAlgorithm(arr) {
    let sum = 0;
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
       sum = sum + arr[i];
       max = Math.max(max, sum);

       // When the sum is 0 
       if(sum < 0) sum = 0;
    }
    return max;

}

console.log(KadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]))