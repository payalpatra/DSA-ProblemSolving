var findDuplicate = function(nums) {
    
    let repeated = {}
    
    for(let i = 0; i< nums.length ; i++){
        let num = nums[i]
        if(!repeated[num]){
            repeated[num] = 1
        }else{
            repeated[num] = 2
            
            if(repeated[num] === 2) return num
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]))

// OUTPUT - 2

/*

TIME COMPLEXITY - O(N) 
SPACE COMPLEXITY - O(1)

*/