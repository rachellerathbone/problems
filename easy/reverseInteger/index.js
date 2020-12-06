// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store
// integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0
// when the reversed integer overflows.
const reverse = (x) => {
  let arr = x.toString().split('')
  let num

  if (a[0] === '-') {
    let minus = arr.shift()
    num = parseInt(minus + arr.reverse().join(''))
  } else {
    num = parseInt(arr.reverse().join(''))
  }

  if (Math.abs(num) > Math.pow(2, 31)) {
    num = 0
  }

  return num
};

// Runtime: 88 ms, faster than 60.02% of JavaScript online submissions
// for Reverse Integer.
// Memory Usage: 35.9 MB, less than 42.55% of JavaScript online submissions
// for Reverse Integer.

module.exports = reverse
