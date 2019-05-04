const insertIntoBST = (root, val) => {
  let node  = new TreeNode(val)

  if (!root) {
    return node
  }

  let parent = null
  let curr = root

  while (curr) {
    parent = curr

    if (curr.val < val) {
      curr = curr.right
    } else {
      curr = curr.left
    }
  }

  if (parent.val < val) {
    parent.right = node
  } else {
    parent.left = node
  }

  return root
};


// Runtime: 136 ms, faster than 49.68% of JavaScript online submissions
// for Insert into a Binary Search Tree.
// Memory Usage: 41.7 MB, less than 91.04% of JavaScript online submissions
// for Insert into a Binary Search Tree.
