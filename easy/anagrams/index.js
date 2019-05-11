// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 3: Using a hashMap
const isAnagram = (s, t) => {
  const sCharMap = buildCharMap(s)
  const tCharMap = buildCharMap(t)

  if (Object.keys(sCharMap).length !== Object.keys(tCharMap).length) {
    return false
  }

  for (let char in sCharMap) {
    if (sCharMap[char] !== tCharMap[char]) {
      return false
    }
  }

  return true
}

const buildCharMap = (str) => {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}

// Runtime: 68 ms, faster than 97.06% of JavaScript online 
// submissions for Valid Anagram.
// Memory Usage: 37.6 MB, less than 48.85% of JavaScript
// online submissions for Valid Anagram.


// SOLUTION 2
// function anagrams(stringA, stringB) {
//   return cleanStr(stringA) === cleanStr(stringB)
// }
//
// function cleanStr(str) {
//   return str.replace([/^\w/g, '']).toLowerCase().split('').sort().join('')
// }


// SOLUTION 1
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').split('').sort().join('')
//   stringB = stringB.replace(/[^\w]/g, '').split('').sort().join('')
//
//   if (stringA === stringB) {
//     return true
//   }
//
//   return false
// }

module.exports = anagrams;
