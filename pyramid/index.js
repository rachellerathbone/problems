// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// RESURSIVE SOLUTION
function pyramid(n, row = 0, level = '') {
  // Always identify the base case in recursive solution
  // The arguments always need to change before calling the function again.
  if (row === n) {
    return
  }

  const len = level.length

  if (len === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  }

  // Calculate midpoint of row
  const midpoint = Math.floor((2 * n - 1) / 2)
  let add

  if (midpoint - row <= len && midpoint + row >= len) {
    add = '#'
  } else {
    add = ' '
  }

  pyramid(n, row, level + add)
}

// ITERATIVE SOLUTION
// function pyramid(n) {
//   if (typeof n !== 'number') {
//     console.log('Input must be a number')
//   }
//
//   // Calculate midpoint of row
//   const midpoint = Math.floor((2 * n - 1) / 2)
//
//   for (let row = 0; row < n; row++) {
//     let level = ''
//
//     // Unlike steps, the number of columns is not equal to n
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//
//     console.log(level);
//   }
// }

module.exports = pyramid;
