// Majority Element (N/3 Elements)

var majorityElement = function (nums) {
    let hash = {}
    let elements = []
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        if (!hash[ele]) {
            hash[ele] = 1;
        } else {
            hash[ele] = hash[ele] + 1
        }
        if (hash[ele] >= Math.floor(nums.length / 3)) {
            elements.push(ele)
        }
    }
    return elements
};

console.log("OUTPUT 1 :", majorityElement([1, 2]))

/*

Moore Voting Algorithm :

1) Takes count1 and Count2 as 0 AND an ele1 and ele2 as -1
2) Linearly iterate from first element to the last element
3) Change the value element to be 7 
4) When we face the same element , we increment the count
5) When we found a new element we decreament the count 
6) if the count is zero we update the value of the element

Primary Intution --> No of Majority = Minority

*/
 
var majorityElement2 = function (nums) {
    let num1 = null;
    let num2 = null;
    let count1 = 0;
    let count2 = 0;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] === num1) {
            count1++;
        } else if (nums[i] === num2) {
            count2++;
        } else if (count1 === 0) {
            num1 = nums[i]
            count1++
        } else if (count2 === 0) {
            num2 = nums[i]
            count2++
        } else {
            count1--;
            count2--;
        }
    }
    let ans = []
    count1 = nums.filter(z => z === num1).length;
    count2 = nums.filter(z => z === num2).length;

    if (count1 > len / 3) ans.push(num1)
    if (count2 > len / 3) ans.push(num2)

    return ans
};

console.log("OUTPUT 2 :", majorityElement2([1, 2]))

/*

TIME COMPLEXITY - O(N) + O(N)
SPACE COMPLEXITY - O(1)

*/