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
   const map = new Map()
   const result = []

   for (let num of nums1) {
     map.set(num, map.get(num) + 1 || 1)
   }

   for (let num of nums2) {
     if (map.get(num) >= 1) {
       result.push(num)
       map.set(num, map.get(num) -1)
     }
   }

   return result
}

module.exports = intersection
