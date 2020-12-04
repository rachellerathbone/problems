// 543. Diameter of Binary Tree
// Easy
//
// 1353
//
// 83
//
// Favorite
//
// Share
// Given a binary tree, you need to compute the length of the diameter of
// the tree. The diameter of a binary tree is the length of the longest
// path between any two nodes in a tree. This path may or may not pass
// through the root.
//
// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
//
// Note: The length of path between two nodes is represented by the number
// of edges between them.
const diameterOfBinaryTree = (root) => {
  let diameter = 0

  dfs(root)

  return diameter

  function dfs(node, level) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    // update diameter at every node
    diameter = Math.max(diameter, left + right)

    // update the largest number of edge so far
    return 1 + Math.max(left, right)
  }
};

// Runtime: 60 ms, faster than 98.79% of JavaScript online submissions for 
// Diameter of Binary Tree.
// Memory Usage: 37 MB, less than 62.50% of JavaScript online submissions
// for Diameter of Binary Tree.
