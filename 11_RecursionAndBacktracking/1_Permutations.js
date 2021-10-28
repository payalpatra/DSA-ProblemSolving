// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]


var permute = function (nums) {

    // Results  array
    let results = [];

    function swap(nums, i1, i2) {
        let temp = nums[i1];
        nums[i1] = nums[i2];
        nums[i2] = temp;
    }

    function permutation(nums, idx, results) {

        if (idx === nums.length) results.push([...nums])

        for (let i = idx; i < nums.length; i++) {
            swap(nums, idx, i)
            permutation(nums, idx + 1, results);
            swap(nums, idx, i);
        }
    }

    permutation(nums, 0, results)
    return results
};

console.log(permute([1, 2, 3]))

/*

TIME COMPLEXITY - N ! * N
SPACE COMPLEXITY - N(1)

*/