// Given an integer array with no duplicates. A maximum tree
// building on this array is defined as follow:
//
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left
// part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right
// part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the
// root node of this tree.
//
// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following
// tree:
//
//       6
//     /   \
//    3     5
//     \    /
//      2  0
//        \
//         1
// Note:
// The size of the given array will be in the range [1,1000].

const constructMaximumBinaryTree = (nums) => {
  if(nums.length === 0) return null
  if(nums.length === 1) {
    return new TreeNode(nums[0])
  }

  // get maxIndex maxVal of the given array, construct a tree
  // node from it, and then construct a tree by slicing left of the
  // max value and right of the max value.
  const maxIndex = getMaxIndex(nums)
  const maxVal = nums[maxIndex]
  const rootNode = new TreeNode(maxVal)
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length))

  return rootNode
};

const getMaxIndex = (arr) => {
  let maxIndex = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[maxIndex] ) {
      maxIndex = i
    }
  }

  return maxIndex
}

module.exports = constructMaximumBinaryTree

// Runtime: 104 ms, faster than 79.97% of JavaScript online submissions
// for Maximum Binary Tree.
// Memory Usage: 41.5 MB, less than 44.00% of JavaScript online
// submissions for Maximum Binary Tree.
