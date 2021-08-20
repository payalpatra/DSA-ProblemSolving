// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.


// How To Compute Permutation Values

// 4 P 2 = 4 * 3 * 2 / 2 * 1
// nPr = n! / ( n -r)!


// What is next permutation ?

// For 132 

// The following are the permutations

// 1 2 3 -- 132 -- 213 -- 231 -- 312 -- 321

// After 132 we get 213 hence it is the next permutation.

// Algorithm
// -- Linearly traverse through the Array Backwards
// -- Find the first index i such that the a[i] < a[i+1]
// -- Again traverse and find the index a[i] > nums[index1]
// -- Swap the first index and second index
// -- Reverse all the elements from first Index to Last element in the array

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]

var nextPermutation = function (nums) {
    if (nums === null || nums.length <= 1) return

    let index1, index2;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index1 = i;
            break;
        }
    }

    if (index1 === undefined) {
        nums.reverse();
    } else {
        for (let i = nums.length - 1; i > index1; i--) {
            if (nums[i] > nums[index1]) {
                index2 = i;
                break;
            }
        }
        // Swap indices
        [nums[index1], nums[index2]] = [nums[index2], nums[index1]]

        // Reverse all the elements from index1 to index2;
        let left = index1 + 1; right = nums.length - 1;
        
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            ++left;
            --right;
        }
    }

    return nums;
};

console.log(nextPermutation([1,3,2]))


// INPUT = [1, 3, 5, 4, 2]
// OUTPUT = [1, 4, 2, 3, 5]



/*

TIME COMPLEXITY - O(N) + 0(N) + O(N)
SPACE COMPLEXITY - O(1)

*/