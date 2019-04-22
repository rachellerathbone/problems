// You're given strings J representing the types of stones
// that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.  You want
// to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters
// in J and S are letters. Letters are case sensitive, so "a" is
// considered a different type of stone from "A".
//
// Example 1:
//
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:
//
// Input: J = "z", S = "ZZ"
// Output: 0
const numJewelsInStones = (J, S) => {
  return S.split('').filter(char => J.indexOf(char) !== -1).length
};

module.exports = numJewelsInStones;

// Runtime: 60 ms, faster than 100.00% of JavaScript online 
// submissions for Jewels and Stones.
// Memory Usage: 33.9 MB, less than 76.11% of JavaScript online
// submissions for Jewels and Stones.
