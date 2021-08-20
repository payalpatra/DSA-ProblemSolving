// Given an arr having both positive and negative integers. The task is to compute the length of the largest subarr with sum 0.

// Largest Subarr having sum 0
function LargestSubArr(arr, n) {
    if (arr.length === 0) return arr;
    let hashMap = {}
 
    let maxLength = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + arr[i]

        if (arr[i] === 0 && maxLength === 0) {
            maxLength = 1;
        }
        if (sum === 0) {
            maxLength = i + 1
        }
        // We store the sum value and the index at which we got the sum (if that sum value is not present)
        if (hashMap[sum] !== undefined) {
            maxLength = Math.max(maxLength, i - hashMap[sum])
        } else {
            hashMap[sum] = i;
        }

    }
    return maxLength;

}

console.log(LargestSubArr([15, -2, 2, -8, 1, 7, 10, 23], 8))


/*

TIME COMPLEXITY -  O(N log N)
SPACE COMPLEXITY - O(N)

*/