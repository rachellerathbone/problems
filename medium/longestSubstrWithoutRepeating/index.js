// Given a string, find the length of the longest substring without repeating
// characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence
//              and not a substring.

const lengthOfLongestSubstring = (s) => {
    let sMap = {}
    let start = 0
    let maxLen = 0
    let chars = s.split('')

    for (let i = 0; i < s.length; i++) {
        let curr = sMap[chars[i]]
        if (curr !== null && start <= curr) {
            start = curr + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }

        sMap[chars[i]] = i
    }

    return maxLen
};

// Runtime: 108 ms, faster than 73.82% of JavaScript online submissions for
// Longest Substring Without Repeating Characters.
// Memory Usage: 41.1 MB, less than 47.42% of JavaScript online submissions for
// Longest Substring Without Repeating Characters.
