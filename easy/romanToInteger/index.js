// Roman numerals are represented by seven different
// symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's
// added together. Twelve is written as, XII, which is simply X + II.
// The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written
// as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There
// are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be
// within the range from 1 to 3999.
//
// Example 1:
//
// Input: "III"
// Output: 3
// Example 2:
//
// Input: "IV"
// Output: 4
// Example 3:
//
// Input: "IX"
// Output: 9
// Example 4:
//
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:
//
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
var romanToInt = function(s) {
  res = 0
  i = 0

  while (i < s.length) {
    // Getting value of symbol s[i]
    s1 = value(s[i])

    if (i + 1 < s.length) {
      // Getting value of symbol s[i+1]
      s2 = value(s[i + 1])

      // Comparing both values
      if (s1 >= s2) {
        // Value of current symbol is greater
        // or equal to the next symbol
        res = res + s1
        i = i + 1
      } else {
        // Value of current symbol is greater
        // or equal to the next symbol
        res = res + s2 - s1
        i = i + 2
      }
    }  else {
      res = res + s1
      i = i + 1
    }
  }

  return res
}

const value = (r) => {
  if (r === 'I')
    return 1
  if (r === 'V')
    return 5
  if (r === 'X')
    return 10
  if (r === 'L')
    return 50
  if (r === 'C')
    return 100
  if (r === 'D')
    return 500
  if (r === 'M')
    return 1000
  return -1
}

// Runtime: 160 ms, faster than 99.96% of JavaScript online 
// submissions for Roman to Integer.
// Memory Usage: 40 MB, less than 60.26% of JavaScript online
// submissions for Roman to Integer.
