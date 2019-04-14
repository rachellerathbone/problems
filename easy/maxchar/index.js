// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1
    }

    charMap[char]++
  }

  return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b)

  // Without using reduce
  // Set max vars
  // let max = 0
  // let maxChar = ''
  // for (let char in charMap) {
  //   if (charMap[char] > max) {
  //     max = charMap[char]
  //     maxChar = char
  //   }
  // }
  //
  // return maxChar
}

module.exports = maxChar;
