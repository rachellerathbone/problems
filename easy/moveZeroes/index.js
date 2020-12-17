// Given an array nums, write a function to move all 0's to the
// end of it while maintaining the relative order of the non-zero
// elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = function(nums) {
    let anchor = 0;

    for (let explorer = 0; explorer < nums.length; explorer++) {
        if (nums[explorer] !== 0) {
            let temp = nums[anchor]
            nums[anchor] = nums[explorer]
            nums[explorer] = temp

            anchor++
        }
    }

    return nums
};


module.exports = moveZeroes
