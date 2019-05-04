// The Hamming distance between two integers is the number
// of positions at which the corresponding bits are
// different.
//
// Given two integers x and y, calculate the Hamming
// distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the
// corresponding bits are different.

const hammingDistance = (x, y) => {
  let bits = x ^ y
  let count = 0

  while (bits > 0) {
    bits = bits & (bits - 1)
    count++
  }

  return count
};

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.7 MB, less than 67.47% of JavaScript online submissions
// for Hamming Distance.
