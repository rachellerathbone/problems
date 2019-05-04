// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
// find the one that is missing from the array.
//
// Example 1:
//
// Input: [3,0,1]
// Output: 2
// Example 2:
//
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement
// it using only constant extra space complexity?
const missingNumber = (nums) => {
  let max = Math.max(...nums)
  let min = Math.min(...nums)

  const total = (max * (max + 1) - (min - 1) * min) / 2
  const numTotal = nums.reduce((a, b) => a + b)

  if (nums.length > 1 && nums[0] !== 0 && min !== 0) {
    return 0
  }

  if (nums.length === 1) {
    if (nums[0] === 1) {
      return 0
    } else
      return 1
  }

  if (total === numTotal) {
    return max + 1
  }

  return total - numTotal
};

// Runtime: 80 ms, faster than 53.44% of JavaScript online 
// submissions for Missing Number.
// Memory Usage: 35.9 MB, less than 76.67% of JavaScript online
// submissions for Missing Number.
