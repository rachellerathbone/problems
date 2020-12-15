// Given an array of size n, find the majority element. The majority element
// is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element
// always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = function(nums) {
    let currNum = nums[0], count = 0;

    for(let num of nums) {
        if (currNum === num) {
            count++
        } else {
            count--

            if(!count) {
                currNum = num;
                count = 1;
            }
        }
    }

    return currNum;
};

// Runtime: 80 ms, faster than 90.83% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.9 MB, less than 72.90% of JavaScript online submissions for Majority Element.

module.exports = majorityElement
