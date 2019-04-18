// Given a non-empty binary tree, return the average value of the nodes
// on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on
// level 2 is 11. Hence return [3, 14.5, 11]

// Recursive solution - DFS
const averageOfLevels = (root) => {
  const levels = []

  dfs(root, 0)
  return levels
  // return levels.map(({ sum, count }) => sum / count)

  function dfs(node, level) {
    if (!node) {
      return
    }

    levels[level] = levels[level]
    levels[level] = levels[level] || { sum: 0, count: 0 }
    levels[level].count++
    levels[level++].sum += node.val
    dfs(node.left, level)
    dfs(node.right, level)
  }
}

// Runtime: 76 ms, faster than 87.43% of JavaScript online submissions
// for Average of Levels in Binary Tree.
// Memory Usage: 39 MB, less than 19.23% of JavaScript online submissions
// for Average of Levels in Binary Tree.

const averageOfLevels = (root) => {
  let res = []
  let queue = [root]

  // While there are still items in the queue
  while(queue.length > 0) {
    // add all nodes in a level
    let sum = 0
    // number of nodes in a level (to find average)
    let count = 0
    let temp = []

    // Handle adding children
    while (queue.length > 0) {
      // set n to the first node in the queue
      let n = queue.shift()
      // set sum to the value of the node
      sum += n.val
      // increment the count
      count++

      // If the node has a left child add tmp
      if (n.left !== null) {
        temp.push(n.left)
      }

      // If the node has a right child add tmp
      if (n.right !== null) {
        temp.push(n.right)
      }
    }

    // Set queue to the temp arr which now holds the children
    queue = temp
    res.push(sum / count * 1.0)
  }

  return res
};
