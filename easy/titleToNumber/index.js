// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701


// Constraints:

// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".
const titleToNumber = function(s) {
    let result = 0

    for (let i = 0; i < s.length; i++) {
        const excelCode = s[i].charCodeAt(0) - 64
        result = result * 26 + excelCode
    }

    return result
};

module.exports = titleToNumber
