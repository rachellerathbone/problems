// Given an array nums of n integers, are there elements a,
// b, c in nums such that a + b + c = 0? Find all unique
// triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]

    if (a > 0) return result
    if (a === nums[i - 1]) continue

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const b = nums[j]
      const c = nums[k]

      if (a + b + c === 0) {
        result.push([a, b, c])
      }

      if (a + b + c >= 0) {
        while (nums[k - 1] === c) { k--; }
        k--
      }

      if(a + b + c <= 0) {
        j++
      }
    }
  }

  return result
};

module.exports = threeSum
