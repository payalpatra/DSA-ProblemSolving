// Maximum Profit in Job Scheduling

/*
We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.
*/

/*

Example 1:

Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

*/
/*

Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.

*/

// Sort by end time and find the job previous to it which can be non conflicting.
// Property is either to include particular job or not and getting maximum out of it.

var jobScheduling = function (startTime, endTime, profit) {
    // Array of job [start,end,proft]
    let jobs = []
    let n = startTime.length
    for (let i = 0; i < n; i++) {
        jobs.push({ s: startTime[i], e: endTime[i], p: profit[i] });
    }

    // Sort the jobs according to the ascending order of their start time
    let sortedJobs = sort(jobs)

    let dp = new Array(n)


    // Add first job's profit to the dp 
    dp[0] = sortedJobs[0].p

    for (let i = 1; i < n; i++) {
        let profit = sortedJobs[i].p
        let task = -1;

        // If prev of end less than start 
        for (let j = i - 1; j >= 0; j--) {
            if (sortedJobs[j].e <= sortedJobs[i].s) {
                task = j;
                break;
            }
        }

        if (task !== -1) {
            profit += dp[task];
        }
        dp[i] = Math.max(profit, dp[i - 1]);
    }



    // Sorting according to the increasing order of their end time
    function sort(array) {
        array.sort(function (a, b) {
            return a.e - b.e
        })
        return array
    }



    return dp[n - 1] 
};
console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]))