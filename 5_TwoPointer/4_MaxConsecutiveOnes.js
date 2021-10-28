// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    let maxC = 0;
    let currC = 0;
    
    for(let i =0; i < nums.length; i++){
        if(nums[i] === 1){
            currC = currC + 1;
        }else{
            currC = 0;
        }
        
        maxC = Math.max(maxC, currC)
    }
    
    return maxC ;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))


/*

TIME COMPLEXITY - O(N) 
SPACE COMPLEXITY - O(1)

*/