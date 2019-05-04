// Implement int sqrt(int x).
//
// Compute and return the square root of x, where x is guaranteed to
// be a non-negative integer.
//
// Since the return type is an integer, the decimal digits are truncated
// and only the integer part of the result is returned.
//
// Example 1:
//
// Input: 4
// Output: 2
// Example 2:
//
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
//              the decimal part is truncated, 2 is returned.

const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x))
}

// WITHOUT USING A LIBRARY
// const mySqrt = (n) => {
//   if (n === 0) return 0
//
//   let t,
//     sqrt = n / 2
//
// 	do {
// 		t = sqrt
// 		sqrt = (t + (n / t)) / 2
// 	} while ((t - sqrt) !== 0)
//
// 	return Math.floor(sqrt)
// }

module.exports = mySqrt

// Runtime: 80 ms, faster than 99.51% of JavaScript online
// submissions for Sqrt(x).
// Memory Usage: 35.5 MB, less than 91.96% of JavaScript online
// submissions for Sqrt(x).
