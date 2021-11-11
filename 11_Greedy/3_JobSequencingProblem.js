// Given a set of N jobs where each jobi has a deadline and profit associated with it. Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit if and only if the job is completed by its deadline. The task is to find the number of jobs done and the maximum profit.

// Example 1:

// Input:
// N = 4
// Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}
// Output:
// 2 60
// Explanation:
// Job1 and Job3 can be done with
// maximum profit of 60 (20+40).

// Example 2:

// Input:
// N = 5
// Jobs = {(1,2,100),(2,1,19),(3,2,27),
//         (4,1,25),(5,1,15)}
// Output:
// 2 127
// Explanation:
// 2 jobs can be done with
// maximum profit of 127 (100+27).

function jobScheduling(arr, n) {
    // Sort the array according to the decreasing order of the profit
    let sortedArray = sortProfit(arr);
    let results = new Array(n).fill(-1);
    // Keeps track of Total profit
    let Tprofit = 0;
    // Total Number of jobs that can be done
    let currentJob = 0;

    // Perform the job at its deadline so that we can accomodate more jobs
    for (let i = 0; i < n; i++) {
        [id, deadline, profit] = sortedArray[i];

        // This loop is to find a pkace in the results array (i.e === deadline or previous to deadline)
        for (let j = deadline; j > 0; j--) {

            if (results[j ] === -1) {
                results[j ] = sortedArray[i][0];
                Tprofit = Tprofit + profit
                currentJob++
                break
            }
        }

    }

    return [currentJob, Tprofit]

    // Sort the array in descending order of their profits;
    function sortProfit(array) {
        array.sort(
            (function (index) {
                return function (a, b) {
                    return a[index] === b[index] ? 0 : a[index] < b[index] ? 1 : -1;
                };
            })(2)
        );
        return array;
    }
}

console.log(
    jobScheduling(
        [
            [6, 2, 80],
            [3, 6, 70],
            [4, 6, 65],
            [2, 5, 60],
            [5, 4, 25],
            [8, 2, 22],
            [1, 4, 20],
            [7, 2, 10],
        ],
        8
    )
);

/*

TIME COMPLEXITY - O(N log N) + O(N * M)
SPACE COMPLEXITY - o(M)

*/