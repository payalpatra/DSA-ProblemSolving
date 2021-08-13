// Given an unsorted array of size n. Array elements are in the range from 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// To Find the number which is missing and the NUMBER which is repeating

// BRUTE FORCE APPROACH - Hashing Technique

function repeatingAndMissing(arr) {
    let numArr = new Array(arr.length).fill(0);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        numArr[index] = count
        count = count + 1;
    }

    // Traverse through the array
    for (let i = 1; i < numArr.length; i++) {
        // Index Having the value 0 is the missing number
        if (numArr[i] == 0) {
            console.log("Missing Number", i)
        }

        // Index having value 2 is the repeated number
        if (numArr[i] == 2) {
            console.log("Repeated Number", i)
        }
    }

    return;
}

console.log(repeatingAndMissing([3, 1, 3]))


// OUTPUT

/*

TIME COMPLEXITY - O(N) + 0(N) = O(2N) ----> O(N)
SPACE COMPLEXITY - O(N)

*/

