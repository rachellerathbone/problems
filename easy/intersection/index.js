// Given two arrays, write a function to compute their
// intersection.
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
//
// Each element in the result must be unique.
// The result can be in any order.

// FIRST SOLUTION O(n)
const intersection = (nums1, nums2) => {
   const n1Hash = createHash(nums1)
   const n2Hash = createHash(nums2)

   let res = []

   for (let key in n1Hash) {
      if (n1Hash[key] === n2Hash[key]) {
        res.push(key)
      }
   }

  return res
}

const createHash = (arr) => {
  let arrHash = {}

  for (let i of arr) {
    arrHash[i] = 1
  }

  return arrHash
}

// Runtime: 64 ms, faster than 72.23% of JavaScript online submissions
// for Intersection of Two Arrays.
// Memory Usage: 35.9 MB, less than 17.04% of JavaScript online submissions
// for Intersection of Two Arrays.



// Runtime: 60 ms, faster than 98.69% of JavaScript online submissions for
// Intersection of Two Arrays.
// Memory Usage: 34.5 MB, less than 63.64% of JavaScript
// online submissions for Intersection of Two Arrays.

module.exports = intersection
