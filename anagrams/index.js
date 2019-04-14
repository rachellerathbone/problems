// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Similar to my solution but with a separate function to handle other chars
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str) {
  return str.replace([/^\w/g, '']).toLowerCase().split('').sort().join('')
}

// MY SOLUTION
// function anagrams(stringA, stringB) {
//   stringA = stringA
//               .replace(' ', '')
//               .replace(/[&\/\\#,+()!$~%.'":*?<>{}]/g,'')
//               .toLowerCase()
//               .split('')
//               .sort()
//               .join('')
//   stringB = stringB
//               .replace(' ', '')
//               .replace(/[&\/\\#,+()!$~%.'":*?<>{}]/g,'')
//               .toLowerCase()
//               .split('')
//               .sort()
//               .join('')
//
//   if (stringA === stringB) {
//     return true
//   }
//
//   return false
// }

// With a much better regex match
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

// Using a charMap
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {}
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = 1 || charMap[char] + 1
//   }
//
//   return charMap
// }

module.exports = anagrams;
