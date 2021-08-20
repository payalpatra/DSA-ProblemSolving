// Given an array of integers arr[] and a number m, count the number of subarrays having XOR of their elements as m.

function subarrayXor(arr, m) {
    if (arr.length === 0) return arr;

    let hashMap = {};
    let xorSum = 0;
    let count = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // XOR elements as you move
        xorSum = xorSum ^ arr[i];

        if (arr[i] === m) {
            count = count + 1;
        }else if(xorSum === m) {
            count = count + 1;
        } 

        if (hashMap[xorSum ^ m] !== undefined) {
            count = count + hashMap[xorSum ^ m];
        } else {
            hashMap[xorSum] = 1;
        }
    }

    return count;
}

console.log(subarrayXor([4, 2, 2, 6, 4], 6));

/*
Input : arr[] = {4, 2, 2, 6, 4}, m = 6
Output : 4
Explanation : The subarrays having XOR of
              their elements as 6 are {4, 2},
              {4, 2, 2, 6, 4}, {2, 2, 6},
               and {6}
*/

/*

TIME COMPLEXITY -  O(N log N)
SPACE COMPLEXITY - O(N)

*/
