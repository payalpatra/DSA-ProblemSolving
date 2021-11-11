// Minimum Platforms

// Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.

// Example 1:

// Input: n = 6
// start[] = {0900, 0940, 0950, 1100, 1500, 1800}
// dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
// Output: 3
// Explanation:
// Minimum 3 platforms are required to
// safely arrive and depart all trains.

// Example 2:

// Input: n = 3
// start[] = {0900, 1100, 1235}
// dep[] = {1000, 1200, 1240}
// Output: 1
// Explanation: Only 1 platform is required to
// safely manage the arrival and departure
// of all trains.

class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(start, dep, n) {
        // Sort the starting time
        start.sort((a, b) => a - b);
        // Sort the ending time
        dep.sort((a, b) => a - b);

        // Arriving time pointer
        let s = 1;
        // Leaving time pointer
        let e = 0;
        // Keeps track of current platform used
        let curr = 1;
        // Keeps track of max platform used
        let max = 1;

        while (s < n && e < n) {

            if (start[s] <= dep[e]) {
                curr++;
                s++;
            } else if (start[s] > dep[e]) {
                curr--
                e++
            } 
            max = Math.max(curr, max)
        }
        return max;
    }

}

let solution = new Solution();

console.log(
    solution.findPlatform(
        [50, 120, 200, 550, 700, 850],
        [500, 550, 600, 700, 900, 1000],
        6
    )
);
// [0900, 0940, 0950, 1100, 1500, 1800],
// Output - 3


/*

TIME COMPLEXITY - O(2N logn) + O(2N)
SPACE COMPLEXITY - O(1)

*/