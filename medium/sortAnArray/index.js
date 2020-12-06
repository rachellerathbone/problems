// Given an array of integers nums, sort the array in ascending order.
// Example 1:
//
// Input: [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:
//
// Input: [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
const sortArray = (nums) => {
  if (nums.length < 2) {
    return nums
  }

  let pivot = nums[0]
  let lesser = []
  let greater = []

  for (let i = 1; i < nums.length; i++) {
    if(nums[i] < pivot) {
      lesser.push(nums[i])
    } else {
      greater.push(nums[i])
    }
  }

  return sortArray(lesser).concat(pivot, sortArray(greater))
}

// Runtime: 140 ms, faster than 35.39% of JavaScript online submissions
// for Sort an Array.
// Memory Usage: 54.7 MB, less than 100.00% of JavaScript online submissions
// for Sort an Array.

module.exports = sortArray
