// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// BRUTE FORCE APPROACH
var trap = function (height) {
    function left(index) {
        let max = height[index];
        for (let i = index; i >= 0; i--) {
            if (height[i - 1] > max) {
                max = height[i - 1];
            }
        }

        return max;
    }

    function right(index) {
        let max = height[index];
        for (let i = index; i < height.length - 1; i++) {
            if (height[i + 1] > max) {
                max = height[i + 1];
            }
        }

        return max;
    }

    let water = 0;
    for (let i = 0; i < height.length - 1; i++) {
        let leftM = left(i);
        let rightM = right(i);
        let curr = Math.min(leftM, rightM) - height[i];

        water = water + curr;
    }
    return water;
};

// Optimized Solution
// Two Pointer

var trap2 = function (height) {
    // Total Water
    let water = 0;

    let left = 0;
    let right = height.length - 1;

    let leftM = 0;
    let rightM = 0;

    while (left <= right) {
        if (height[left] >= leftM) {
            leftM = height[left];
        }

        if (height[right] >= rightM) {
            rightM = height[right];
        }

        if (leftM > rightM) {
            water = water + rightM - height[right];
            right--;
        }else{
            water = water + leftM - height[left];
            left++;
        }
    }

    return water;
};

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)

*/
