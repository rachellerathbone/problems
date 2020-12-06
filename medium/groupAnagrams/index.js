// Given an array of strings, group anagrams together.
//
// Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
//
// All inputs will be in lowercase.
// The order of your output does not matter.
const groupAnagrams = (strs) => {
  const anagrams = {}

  strs.forEach((str) => {
    const sortedWord = str.split('').sort().join('')

    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(str)
    }

    anagrams[sortedWord] = [str]
  })

  return Object.values(anagrams)
};

// Runtime: 128 ms, faster than 89.73% of JavaScript
// online submissions for Group Anagrams.
// Memory Usage: 44.7 MB, less than 90.91% of JavaScript
// online submissions for Group Anagrams.

module.exports = groupAnagrams
