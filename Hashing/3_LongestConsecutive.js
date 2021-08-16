function LongestConsecutive(nums) {

    if (nums == null || nums.length === 0) return 0;


    const set = new Set(nums);
    let max = 0;

    for (let num of set) {

        // We check if its previous consecutive exist
        if (set.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;

        // If the current Number's previous consecutive doesn't exist
        // We Increament currNum  to currentNum + 1 and currMax

        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }

    return max;

}

console.log(LongestConsecutive([1, 2, 0, 1]));


// OUTPUT

/*

TIME COMPLEXITY - O(N) + 0(N) + 0(N) = O(3N) ----> O(N)
SPACE COMPLEXITY - O(N)

*/