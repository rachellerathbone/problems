// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

const findDuplicates = (nums) => {
  let numHash = {}

  for (let i = 0; i < nums.length; i++) {
    numHash[nums[i]] = numHash[nums[i]] + 1 || 1
  }

  let dupes = []

  for (let key in numHash) {
    if (numHash[key] === 2) {
      dupes.push(parseInt(key))
    }
  }

  return dupes
};

// Runtime: 144 ms, faster than 53.42% of JavaScript online 
// submissions for Find All Duplicates in an Array.
// Memory Usage: 54.4 MB, less than 7.84% of JavaScript online
// submissions for Find All Duplicates in an Array.
