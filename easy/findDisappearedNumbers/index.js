// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in
// this array.

// Could you do it without extra space and in O(n) runtime? You may
// assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

const findDisappearedNumbers = function(nums) {
    let res = []

     for (let i = 0; i < nums.length; i++) {
         let num = Math.abs(nums[i])
         let idx = num - 1

         nums[idx] = Math.abs(nums[idx]) * -1
     }

     for (let i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
             res.push(i+1)
         }
     }

     return res
 };

 module.exports = findDisappearedNumbers

