// Given a non-empty array of integers, every element appears
// twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity.
// Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4
const singleNumber = (nums) => {
  const sorted = nums.sort()
  let start = 0
  let end = 1

  while (end !== sorted.length - 1) {
    if(sorted[start] !== sorted[end]) {
      return sorted[start]
    }

    start += 2
    end += 2
  }

  return sorted[sorted.length - 1]
}

module.exports = singleNumber
