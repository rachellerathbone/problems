// Given a binary tree, imagine yourself standing on the right side of 
// it, return the values of the nodes you can see ordered from top to bottom.
//
// Example:
//
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:
//
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

const rightSideView = (root) => {
  let res = []

	const helper = (node, level) => {
		if(!node) return

		if(!res[level]) {
			res.push(node.val)
		}

		helper(node.right, level + 1)
		helper(node.left, level + 1)
	}

	helper(root, 0)

	return res
};

// Runtime: 60 ms, faster than 98.43% of JavaScript online submissions for
// Binary Tree Right Side View.
// Memory Usage: 34.1 MB, less than 65.38% of JavaScript online submissions
// for Binary Tree Right Side View.
