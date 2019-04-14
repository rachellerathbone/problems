// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// USING A HASHMAP
// function vowels(str) {
//   const strHash = createVowelHash(str)
//   let total = 0
//
//   for (let val in strHash) {
//     total += strHash[val];
//   }
//
//   return total
// }
//
// function createVowelHash(str) {
//   let vowelMap = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0
//   }
//
//   for (let vowel of str.replace(/[^\w]/g, '').toLowerCase()) {
//     if (vowelMap.hasOwnProperty(vowel)) {
//       vowelMap[vowel] = vowelMap[vowel] + 1 | 1
//     }
//   }
//
//   return vowelMap
// }

// USING MATCH
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
// }

// USING AN ARRAY
function vowels(str) {
  let count = 0
  // Using an array over a str here is beneficial --> we can add 'abc as an index for eg.'
  const checker = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}



module.exports = vowels;
