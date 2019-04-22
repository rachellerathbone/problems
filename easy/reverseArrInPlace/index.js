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
    for (let i = 0; i <= Math.floor((s.length - 1) / 2); i++) {
      let el = s[i]
      s[i] = s[s.length - 1 - i]
      s[s.length - 1 - i] = el
  }

  return s
};


// Runtime: 124 ms, faster than 99.13% of JavaScript online
// submissions for Reverse String.
// Memory Usage: 46.8 MB, less than 76.04% of JavaScript online
// submissions for Reverse String.
