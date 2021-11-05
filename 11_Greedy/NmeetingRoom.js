// N meetings in one room

/*
There is one meeting room in a firm.There are N meetings in the form of(start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time ?

Note : Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.
*/

/*
Example 1:

Input: N = 6
       start[] = {1,3,0,5,8,5}
       end[] =  {2,4,6,7,9,9}
Output:  4

Explanation:
Maximum four meetings can be held with
given start and end timings.
The meetings are - (1, 2),(3, 4), (5,7) and (8,9)
*/


/*

Perform meetings first which has lesser finishing time
*/

class Solution {
  maxMeetings(n, s, e) {
    let meet = []

    let ans = []

    // A start, end time and 1 base index to meet
    for (let i = 0; i < n; i++) {
      let curr = [s[i], e[i], i + 1]
      meet.push(curr)

    }

    // Sort the datastructure according to the end time
    meet = this.sortEndTime(meet)

    // Push the first meeting
    ans.push(meet[0])
    let limit = meet[0][1]

    // Loop through the sorted meeting 
    for (let i = 1; i < meet.length; i++) {
      if (meet[i][0] > limit) {
        limit = meet[i][1]
        ans.push(meet[i])

      }
    }

    return ans.length

  }

  sortEndTime(arr) {
    arr.sort((function (index) {
      return function (a, b) {
        return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
      };
    })(1));
    return arr
  }

}

let solution = new Solution();

console.log(solution.maxMeetings(6, [1, 0, 3, 8, 5, 8], [2, 6, 4, 9, 7, 9]));

/*

TIME COMPLEXITY - O(N) + O(N log N) + O(N)
SPACE COMPLEXITY - o(N)

*/