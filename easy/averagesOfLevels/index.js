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

  while (queue.length > 0) {
    let sum = 0
    let count = 0
    let tmp = []

    while (queue.length > 0) {
      let n = queue.shift()
      sum += n.val
      count++

      if (n.left) {
        tmp.push(n.left)
      }

      if (n.right) {
        tmp.push(n.right)
      }
    }

    queue = tmp
    res.push(sum / count)
  }

  return res
};

// Runtime: 76 ms, faster than 87.38% of JavaScript online submissions
// for Average of Levels in Binary Tree.
// Memory Usage: 37.9 MB, less than 96.15% of JavaScript online submissions
// for Average of Levels in Binary Tree.
