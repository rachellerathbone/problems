// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
// the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

const sortedArrayToBST = function(nums) {
    return createBST(nums)

    function createBST(nums) {
        if (nums === null || nums.length === 0) {
            return null
        }

        let mid = Math.floor(nums.length / 2)
        let root = new TreeNode(nums[mid])
        root.left = createBST(nums.slice(0, mid))
        root.right = createBST(nums.slice(mid + 1))

        return root
    }
};

// Time Complexity: O(N), we visit every element exactly once
// Space Complexity: O(N), call stack can go as deep as number of elements

// Runtime: 96 ms, faster than 45.41% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 43.4 MB, less than 38.65% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.

module.exports = sortedArrayToBST
