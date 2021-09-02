// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


function LongestSubstring(string) {
    let map = {}
    let start = 0
    let end = 0
    let maxLen = 0
    let arr = string.split('')

    for (end = 0; end < string.length; end++) {
        // Current element
        let char = arr[end]
        // value of current element in the map
        let current = map[char]
        // Current element is present in the map 
        if (current != undefined) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, (end - start) + 1)
        }

        map[char] = end
    }
    return maxLen
}
console.log(LongestSubstring("pwxckew"))

// TIME COMPLEXITY -  O(N)
// SPACE COMPLEXITY - O(N)