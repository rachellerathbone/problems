// Given a string containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the input
// string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

const isValid = (s) => {
  let parentheses = '()[]{}'
  let stack = []

  for (let i = 0; i < s.length; i++) {
    const pairs = parentheses.indexOf(s[i])
    if (pairs % 2 === 0) {
      // add 1 so that open brace is at the same index as the closing
      stack.push(pairs + 1)
    } else {
      // or condition handles cases such as {}
      if (stack.length === 0 || stack.pop() !== pairs) {
          return false
      }
    }
  }

  return stack.length === 0
};

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions
// for Valid Parentheses.
// Memory Usage: 33.9 MB, less than 62.47% of JavaScript online
// submissions for Valid Parentheses.

module.exports = isValid
