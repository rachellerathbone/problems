// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for
// Insert into a Binary Search Tree.
// Memory Usage: 41.8 MB, less than 28.36% of JavaScript online submissions
// for Insert into a Binary Search Tree.

// ITERATIVE SOLUTION
// const insertIntoBST = (root, val) => {
//   if (!root) return node

//   let node  = new TreeNode(val)
//   let parent = null
//   let curr = root

//   while (curr) {
//     parent = curr

//     if (curr.val < val) {
//       curr = curr.right
//     } else {
//       curr = curr.left
//     }
//   }

//   if (parent.val < val) {
//     parent.right = node
//   } else {
//     parent.left = node
//   }

//   return root
// };

// RECURSIVE SOLUTION
const insertIntoBST = (root, val) => {
  if(!root) return new TreeNode(val)

  if (val < root.val) {
    if (!root.left) {
      root.left = new TreeNode(val)
    } else {
      insertIntoBST(root.left, val)
    }
  } else {
    if (!root.right) {
      root.right = new TreeNode(val)
    } else {
      insertIntoBST(root.right, val)
    }
  }

  return root
};

// Runtime: 136 ms, faster than 49.68% of JavaScript online submissions
// for Insert into a Binary Search Tree.
// Memory Usage: 41.7 MB, less than 91.04% of JavaScript online submissions
// for Insert into a Binary Search Tree.

module.exports = insertIntoBST
