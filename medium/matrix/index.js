// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix (2D array).
// The integers go around in a spiral fashion from 1
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = []

  // Create subarrays
  for (let i = 0; i < n; i++) {
    results.push([])
  }

  // Create counter to keep track of what number to push
  // into results
  let counter = 1
  let startCol = 0
  let endCol = n - 1
  let startRow = 0
  let endRow = n - 1

  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      // At every step, assign a value to results
      results[startRow][i] = counter
      counter++
    }

    // Once we reach the last column, increment start row to move down
    startRow++

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter
      counter++
    }

    endCol--

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter
      counter++
    }

    endRow--

    // Start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter
      counter++
    }

    startCol++
  }

  return results
}

module.exports = matrix;
