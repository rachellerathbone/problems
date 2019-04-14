// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution nested for loop - ITERATIVE
// function steps(n) {
//   if (typeof n !== 'number') {
//     console.log('Input must be a number')
//   }
//
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair);
//   }
// }

// RECURSIVE SOLUTION
function steps(n, row = 0, stair = '') {
  if (typeof n !== 'number') {
    console.log('Input must be a number')
  }

  // Always identify the base case in recursive solution
  // The arguments always need to change before calling the function again.
  if (n === row) {
    return
  }

  // Do some amount of work then call solution again.
  // Hitting the end of the row
  if (n === stair.length) {
    return steps(n, row + 1)
  }

  // if (stair.length <= row) {
  //   stair += '#'
  // } else {
  //   stair += ' '
  // }
  // REFACTOR OF ABOVE BLOCK
  const add = stair.length <= row ? '#' : ' '

  steps(n, row, stair + add)
}

module.exports = steps;
