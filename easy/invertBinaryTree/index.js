// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:
//
// Google: 90% of our engineers use the software you wrote (Homebrew), but you
// can’t invert a binary tree on a whiteboard so f*** off.

const invertTree = (root) => {
  if (!root) return root

  invertTree(root.left)
  invertTree(root.right)

  let tmp = root.left
  root.left = root.right
  root.right = tmp

  return root
};

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions
// for Invert Binary Tree.
// Memory Usage: 33.9 MB, less than 9.88% of JavaScript online submissions
// for Invert Binary Tree.

module.exports = invertTree
