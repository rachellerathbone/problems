// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in
// the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size;
};

// creating new map solution
// const containsDuplicate = function(nums) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
//     return map.size !== nums.length;
// };


module.exports = containsDuplicate
