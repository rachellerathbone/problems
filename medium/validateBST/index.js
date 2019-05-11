// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the
// node's key.
// The right subtree of a node contains only nodes with keys greater than the
// node's key.
// Both the left and right subtrees must also be binary search trees.
//
//
// Example 1:
//
//     2
//    / \
//   1   3
//
// Input: [2,1,3]
// Output: true
// Example 2:
//
//     5
//    / \
//   1   4
//      / \
//     3   6
//
// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const isValidBST = (root, min = null, max = null) => {
    if (!root) return true
    if (min !== null && root.val <= min) return false
    if (max !== null && root.val >= max) return false

    return isValidBST(root.left, min, root.val) &&
            isValidBST(root.right, root.val, max)                                
};


// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for
// Validate Binary Search Tree.
// Memory Usage: 37.3 MB, less than 45.45% of JavaScript online submissions for
// Validate Binary Search Tree.
