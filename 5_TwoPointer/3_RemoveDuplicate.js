// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.


var removeDuplicates = function (nums) {
    let results = [];
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            i++
        nums[i] = nums[j];
    }
    i++
    for (let j = 0; j < i; j++) results.push(nums[j]);
    return results;
};

console.log(removeDuplicates([1, 1, 2]))

/*

TIME COMPLEXITY - O(N) + O(N) = O(N)
SPACE COMPLEXITY - O(N)

*/