// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// USING REDUCE WHICH TAKES ITEMS OF AN ARRAY AND REDUCES THEM
// DOWN TO ONE SINGLE VALUE
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }

// MY SOLUTION - using a loop
function reverse(str) {
  let reverseStr = ''

  for (let i = str.length - 1; i >= 0 ; i--) {
    reverseStr += str[i]
  }

  return reverseStr
}

// DIFFERENT WAY TO USE A LOOP
// function reverse(str) {
//   let reverseStr = ''
//
//   for (let char of str) {
//     reverseStr = char + reverseStr
//   }
//
//   return reverseStr
// }

// USING BUILT IN REVERSE - interviewers typically say not to use built in methods
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

module.exports = reverse;
