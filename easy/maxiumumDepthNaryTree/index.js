// Given a n-ary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.
//
// For example, given a 3-ary tree:

// We should return its max depth, which is 3.
//
// Note:
//
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

const maxDepth = (root) => {
  if (root === null) {
    return 0
  }

  if (!root.children) {
    return 1
  }

  let maxChildDepth = 0

  for (let child of root.children) {
    let currentDepth = maxDepth(child)

    if (currentDepth > maxChildDepth) {
      maxChildDepth = currentDepth
    }
  }

  return maxChildDepth + 1
}

// Runtime: 608 ms, faster than 74.94% of JavaScript online submissions 
// for Maximum Depth of N-ary Tree.
// Memory Usage: 80.9 MB, less than 8.70% of JavaScript online submissions
// for Maximum Depth of N-ary Tree.
