// Given an array of integers A sorted in non-decreasing order,
// return an array of the squares of each number, also in sorted
// non-decreasing order.
//
// Example 1:
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
//
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// const sortedSquares = (A) => {
//   let sortedArr = A.map((x) => {
//     return Math.pow(x, 2);
//   })

//   return sortedArr.sort((a, b) => a - b)
// }

// in place solution with O(n) time, 0(1) space

const sortedSquares = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i] ** 2
  }

  nums.sort((a, b) => a - b)

  return nums
};

module.exports = sortedSquares

