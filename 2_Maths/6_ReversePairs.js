// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].

// Input: nums = [1,3,2,3,1]
// Output: 2
// PAIRS : (3,2) & (3,1)

// ------------ METHOD 1 ------------ \\
var reversePairs = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j > i; j--) {
            if (nums[i] > 2 * nums[j]) {
                count++
            }
        }
    }
    return count;
};

console.log(reversePairs([2, 4, 3, 5, 1]))

/*

TIME COMPLEXITY - O(N2)
SPACE COMPLEXITY - O(1)

*/




