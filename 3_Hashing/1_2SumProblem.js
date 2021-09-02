/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]
*/

function TwoSum(nums, target) {
    let map = {}
    let required;

    for (let i = 0; i < nums.length; i++) {
        required = target - nums[i]
        if (map[required] !== undefined) {
            return [map[required], i]
        }
        map[nums[i]] = i

    }

}

console.log(TwoSum([2, 7, 11, 15], 9))