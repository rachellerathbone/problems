// Given a binary tree, collect a tree's nodes as if you were doing this:
// Collect and remove all leaves, repeat until the tree is empty.
// Example:
//
// Input: [1,2,3,4,5]
//
//           1
//          / \
//         2   3
//        / \
//       4   5
//
// Output: [[4,5,3],[2],[1]]
//
// Explanation:
//
// 1. Removing the leaves [4,5,3] would result in this tree:
//
//           1
//          /
//         2
//
// 2. Now removing the leaf [2] would result in this tree:
//
//           1
//
// 3. Now removing the leaf [1] would result in the empty tree:
const findLeaves = (root) => {
  if (!root) return []

  let leavesList = []
  let leaves = []

  while (root) {
    if (isLeaf(root, leaves)) {
      root = null
    }

    leavesList.push(leaves)
    leaves = []
  }

  return leavesList
}

const isLeaf = (node, leaves) => {
 if (!node.left && !node.right) {
   leaves.push(node.val)
   return true
 }

  if (node.left) {
    if (isLeaf(node.left, leaves)) {
      node.left = null
    }
  }

  if (node.right) {
    if (isLeaf(node.right, leaves)) {
      node.right = null
    }
  }
}

module.exports = findLeaves

// Runtime: 60 ms, faster than 68.55% of JavaScript online
// submissions for Find Leaves of Binary Tree.
// Memory Usage: 34 MB, less than 14.29% of JavaScript online
// submissions for Find Leaves of Binary Tree.
