// Write a function that reverses a string. The input string
// is given as an array of characters char[].
//
// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.
//
// You may assume all the characters consist of printable ascii characters.
//
// Example 1:
//
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
//
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
const reverseString = (s) => {
  let n = s.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let tmp = s[i]
    s[i] = s[n - 1 - i]
    s[n - 1 - i] = tmp
  }

  return s
};


// Runtime: 124 ms, faster than 99.13% of JavaScript online
// submissions for Reverse String.
// Memory Usage: 46.8 MB, less than 76.04% of JavaScript online
// submissions for Reverse String.

module.exports = reverseString
