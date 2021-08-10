// Sort an Array of 0's 1's and 2's without using extra space or sorting algorithm

// All the elements from 0 to low - 1 are 0
// All the elements from high + 1 to array length is 2
// Loop unless the high is > mid

// BRUTE FORCE APPROACH - SORT THE ARRAY 

// DUTCH NATIONAL FLAG
function sort(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    // If the mid points to 0 -> Swap the Value
    if (nums[mid] === 0) {
      // swap mid value with low

      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low = low + 1;
      mid = mid + 1;
      // Increament low and mid
    } else if (nums[mid] === 1) {
      // Increament the mid
      mid = mid + 1;
    } else if (nums[mid] === 2) {
      // swap high with mid
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high = high - 1;
    }
  }
  return nums;
}

console.log(sort([2, 0, 2, 1, 1, 0]));

// OUTPUT - 2

/*

TIME COMPLEXITY - O(N) 
SPACE COMPLEXITY - O(1)

*/