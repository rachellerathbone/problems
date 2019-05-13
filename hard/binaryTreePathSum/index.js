// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// Example 1:
//
// Input: [1,2,3]
//
//        1
//       / \
//      2   3
//
// Output: 6
// Example 2:
//
// Input: [-10,9,20,null,null,15,7]
//
//    -10
//    / \
//   9  20
//     /  \
//    15   7
//
// Output: 42

const maxPathSum = (root) => {
  let max = -Number.MAX_VALUE
  getMaxSum(root)

  return max

  function getMaxSum(node) {
    if (!node) return 0

    const leftSum = getMaxSum(node.left)
    const rightSum = getMaxSum(node.right)

    max = Math.max(max, node.val + leftSum + rightSum)

    return Math.max(0, node.val + leftSum, node.val + rightSum)
  }
};

// Runtime: 72 ms, faster than 99.14% of JavaScript online 
// submissions for Binary Tree Maximum Path Sum.
// Memory Usage: 41.7 MB, less than 42.42% of JavaScript
// online submissions for Binary Tree Maximum Path Sum.
