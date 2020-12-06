// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from
// the root node down to the farthest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

const maxDepth = (root) => {
  if (!root) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  // We add 1 to the max values of the left
  // and right for the current node
  return Math.max(left, right) + 1
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions
// for Maximum Depth of Binary Tree.
// Memory Usage: 36.9 MB, less than 50.47% of JavaScript online submissions
// for Maximum Depth of Binary Tree.

module.exports = maxDepth
