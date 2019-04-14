// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION
// function reverseInt(n) {
//   let str = n.toString().split('').reduce((rev, char) => char + rev, '')
//
//   if (str.length === 1) {
//     return parseInt(str)
//   }
//
//   if (str.includes('-')) {
//     str = '-' + str
//     return parseInt(str)
//   }
//
//   return parseInt(str)
// }

// Without Math.sign()
// function reverseInt(n) {
//   let str = n.toString().split('').reverse().join('')
//
//   // Check if n is less than 0
//   if (n < 0) {
//     return parseInt(str) * -1
//   }
//
//   return parseInt(str)
// }

// With Math.sign()
function reverseInt(n) {
  let str = n.toString().split('').reverse().join('')

  return parseInt(str) * Math.sign(n)
}

module.exports = reverseInt;
