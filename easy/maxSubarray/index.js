// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum
// and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
//
// If you have figured out the O(n) solution, try coding
// another solution using the divide and conquer approach,
// which is more subtle.

const maxSubArray = (nums) => {
  let max = nums[0]
	let sum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i])
    max = Math.max(max, sum)
  }

  return max
};

// Runtime: 64 ms, faster than 97.71% of JavaScript online submissions 
// for Maximum Subarray.
// Memory Usage: 35.3 MB, less than 36.58% of JavaScript online submissions
// for Maximum Subarray.
