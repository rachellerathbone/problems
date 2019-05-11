// The n-queens puzzle is the problem of placing n queens on an n×n 
// chessboard such that no two queens attack each other.
//
//
//
// Given an integer n, return all distinct solutions to the n-queens puzzle.
//
// Each solution contains a distinct board configuration of the n-queens'
// placement, where 'Q' and '.' both indicate a queen and an empty space
// respectively.
//
// Example:
//
// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle
// as shown above.

const solveNQueens = (n) => {
  const res = []
  backtrack(res, n)

  return res
};

const backtrack = (res, n, board = [], r = 0) => {
  if (r === n) {
    res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)))
    return
  }

  for (let i = 0; i < n; i++) {
    if (!board.some((el, idx) => el === i || el === i + r - idx || el === i - r + idx)) {
      board.push(i)
      backtrack(res, n, board, r + 1)
      board.pop()
    }
  }
}

// Runtime: 72 ms, faster than 87.35% of JavaScript online submissions
// for N-Queens.
// Memory Usage: 37.7 MB, less than 45.45% of JavaScript online submissions
// for N-Queens.
