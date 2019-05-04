// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

const inorderTraversal = (root) => {
  let stack = []
  let res = []

  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }

  return res
};

// Runtime: 72 ms, faster than 25.97% of JavaScript online submissions for
// Binary Tree Inorder Traversal.
// Memory Usage: 33.8 MB, less than 43.48% of JavaScript online
// submissions for Binary Tree Inorder Traversal.
