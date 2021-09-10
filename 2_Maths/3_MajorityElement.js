// Majority Element (>N/2 times)     

var majorityElement = function (nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        if (!hash[ele]) {
            hash[ele] = 1;
        } else {
            hash[ele] = hash[ele] + 1
            if (hash[ele] > Math.floor(nums.length / 2)) {
                return ele
            }
        }
    }

};

console.log("OUTPUT 1 :", majorityElement([2, 2, 1, 1, 1, 2, 2]))

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)

*/

/*

Moore Voting Algorithm :

1) Takes count as 0 AND an element as 0
2) Linearly iterate from first element to the last element
3) Change the value element to be 7 
4) When we face the same element , we increment the count
5) When we found a new element we decreament the count 
6) if the count is zero we update the value of the element

Primary Intution --> No of Majority = Minority

*/

var majorityElement2 = function (nums) {
    let count = 0;
    let element = 0;

    for (let i = 0; i < nums.length; i++) {

        if(count === 0) {
            element = nums[i];
        }
        if(nums[i] === element) {
            count++;
        }else{
            count = count -1
        }

    }
    return element;

};

console.log("OUTPUT 2 :", majorityElement2([2, 2, 1, 1, 1, 2, 2]))

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)

*/