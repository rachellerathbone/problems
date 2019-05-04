// Given a string, find the first non-repeating character in it and return
// it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)

    if (s.indexOf(char) === i && s.indexOf(char, i + 1) === -1) {
      return i
    }
  }

  return - 1
}

// Runtime: 72 ms, faster than 99.37% of JavaScript online submissions
// for First Unique Character in a String.
// Memory Usage: 37.5 MB, less than 93.55% of JavaScript online submissions
// for First Unique Character in a String.
