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
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }

  return true
}

function buildCharMap(str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = 1 || charMap[char] + 1
  }

  return charMap
}

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
