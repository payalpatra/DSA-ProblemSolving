
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

var threeSum = function(nums) {
    // --- Two Pointer Approach --- \\
    
    // Sort The array
   nums.sort((a,b) => a - b)
    let res = new Array()
    
  // Loop till third last index 
    for(let i = 0; i < nums.length - 2; i ++){
        
        // Avoiding Dublicates
        if( i === 0 || i !== 0 && nums[i] !== nums[i-1]) {
         
            let low = i + 1;
            let high = nums.length - 1;
            let sum = 0 - nums[i];
            let subset = []
            
            // Search for sum
            while(low < high){
                
                // Index low and high add up to give sum
                if((nums[low] + nums[high]) === sum){
                   
                    subset = []
                    subset.push(nums[i])
                    subset.push(nums[low])
                    subset.push(nums[high])
                    res.push(subset)
                    
                    // Ignore duplicates
                    while(low < high && nums[low] === nums[low + 1]) low ++;
                    while(low < high && nums[high] === nums[high - 1]) high --;
                    
                    low ++;
                    high--;
                    
                }else if((nums[low] + nums[high]) < sum){
                    low ++
                }else{
                    high--
                }
            }
        } 
    }
    
    return res
    
};

console.log(threeSum([-1,0,1,2,-1,-4]))