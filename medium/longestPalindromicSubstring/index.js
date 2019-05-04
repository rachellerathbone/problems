// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

const longestPalindrome = (s) => {
  if (!s || s.length <= 1) {
    return s
  }

  let longest = s.substring(0, 1)

  for (let i = 0; i < s.length; i++) {
    let tmp = expand(s, i, i)

    if(tmp.length >= longest.length) {
      longest = tmp
    }

    tmp = expand(s, i, i + 1)

    if(tmp.length >= longest.length) {
      longest = tmp
    }
  }

  return longest
}

const expand = (s, begin, end) => {
  while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }

  return s.substring(begin + 1, end)
}

// Runtime: 84 ms, faster than 89.20% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.1 MB, less than 66.81% of JavaScript online submissions
// for Longest Palindromic Substring.

module.exports = longestPalindrome
