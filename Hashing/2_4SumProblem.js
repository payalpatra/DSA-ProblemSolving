// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

var fourSum = function (nums, target) {
    let res = new Array()
    // Base Case 
    if (nums === null || nums.length === 0) return res

    // Sort the array
    nums.sort((a, b) => a - b)

    let n = nums.length

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            let target2 = target - nums[j] - nums[i]

            let left = j + 1;
            let right = n - 1

            while (left < right) {
                let currSum = nums[left] + nums[right]

                if (currSum < target2) {
                    left++;
                } else if (currSum > target2) {
                    right--;
                } else {

                    let quad = new Array()

                    quad.push(nums[i])
                    quad.push(nums[j])
                    quad.push(nums[left])
                    quad.push(nums[right])

                    // Push the Quad to result array
                    res.push(quad)
                    while (left < right && nums[left] === quad[2]) {
                        ++left
                    }

                    while (left < right && nums[right] === quad[3]) {
                        --right
                    }

                }
            }
            // Remove Duplicates
            while (j + 1 < n && nums[j + 1] === nums[j]) {
                ++j;
            }
            // Remove Duplicates
            while (i + 1 < n && nums[i + 1] === nums[i]) {
                ++i;
            }
        }
    }
    return res
};

console.log(fourSum([2, 2, 2, 2, 2], 8))

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

/*

TIME COMPLEXITY - O(N) + O(N) + O(N)
SPACE COMPLEXITY - O(1)

*/