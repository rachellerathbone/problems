// Given a string, determine if it is a palindrome, considering only
// alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as
// valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false

const isPalindrome = (s) => {
  let re = /[^A-Za-z0-9]/g
  s = s.toLowerCase().replace(re, '')

  for (let i = 0; i < s.length/2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome
// Runtime: 76 ms, faster than 91.70% of JavaScript online submissions
// for Valid Palindrome.
// Memory Usage: 37 MB, less than 75.18% of JavaScript online submissions
// for Valid Palindrome.
