// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?


const isPalindrome = (head) => {
  let current = head
  let runner = head
  let stack = []

  while (runner && runner.next) {
    stack.push(current.val)
    current = current.next
    runner = runner.next.next
  }

  // Check to see if list is odd, runner will be null
  // in an even list
  if (runner !== null) {
    current = current.next
  }

  while (current) {
    if (current.val !== stack.pop()) {
      return false
    }

    current = current.next
  }

  return true
};

// Runtime: 68 ms, faster than 99.49% of JavaScript online submissions
// for Palindrome Linked List.
// Memory Usage: 39.6 MB, less than 53.73% of JavaScript online submissions
// for Palindrome Linked List.

module.exports = isPalindrome
