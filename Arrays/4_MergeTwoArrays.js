// Merge Two Sorted Arrays 

// We are given two sorted array. We need to merge these two arrays such that the initial numbers (after complete sorting are in the first array and the remaining numbers are in the second array. Extra space allowed in 0(1)).

// GAP METHOD - Initially takes the gap to be 8/2 (i.e - arr1.length + arr2.length )

// Initially One pointer stays at index 0 and the other one at index 4

// Step 1
// i = 1 and j = 4
// Value check 1 < 10  (Do Not Swap)

// Step 2
// i = 2 and j = 5
// Value Check - 4 < 2 ?  (Swap)

// Next Gap --> 4 / 2

// [1, 4, 7, 8, 10, 2, 3, 9]

function mergeTwoArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    newArray.sort((a, b) => a - b)


    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = newArray[i]
        count += 1
    }
    for(let i = 0; i < arr2.length; i++) {
        arr2[i] = newArray[count]
        count++;
    }

    return [...arr1 , ...arr2];
}

console.log(mergeTwoArrays([1, 4, 7, 8, 10], [2, 3, 9]));


// OUTPUT

/*

TIME COMPLEXITY - O(N) + 0(N) = O(2N) ----> O(N)
SPACE COMPLEXITY - O(N)

*/