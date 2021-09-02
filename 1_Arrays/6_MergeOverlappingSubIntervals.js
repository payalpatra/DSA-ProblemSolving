// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input : [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

var merge = function (intervals) {
    
    // Base Case
    if (intervals.length === 0) return [];

    // Sort the intervals
    intervals.sort((a, b) => (a - b))

    // Initially we push the first Interval
    let result = [intervals[0]]
    let l = result.length

    for (let [start, end] of intervals) {

        // Compare Current start with previous end
        if (start < result[l - 1][1]) {
            const [startPrev, endPrev] = result.pop()
            let endInterval = Math.max(endPrev, end)
            result.push([startPrev, endInterval])
        } else {
            result.push([start, end])
        }
    }
    return result

};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))

// OUTPUT - [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

/*

TIME COMPLEXITY - O(N LOG N) + O(N)
SPACE COMPLEXITY - O(N)

*/