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

// O(n) time and space solution
// const isPalindrome = (head) => {
//   let current = head
//   let runner = head
//   let stack = []

//   while (runner && runner.next) {
//     stack.push(current.val)
//     current = current.next
//     runner = runner.next.next
//   }

//   // Check to see if list is odd, runner will be null
//   // in an even list
//   if (runner !== null) {
//     current = current.next
//   }

//   while (current) {
//     if (current.val !== stack.pop()) {
//       return false
//     }

//     current = current.next
//   }

//   return true
// };

// Runtime: 68 ms, faster than 99.49% of JavaScript online submissions
// for Palindrome Linked List.
// Memory Usage: 39.6 MB, less than 53.73% of JavaScript online submissions
// for Palindrome Linked List.

// *****************************
// O(n) time and O(1) space solution
// *****************************
const isPalindrome = function(head) {
  if (!head) {
      return head
  }

  let firstHalfEnd = endOfFirstHalf(head)
  let secondHalfStart = reverseList(firstHalfEnd.next)

  // Check if there is a palindome
  let result = true
  let firstPosition = head
  let secondPosition = secondHalfStart

  while (result && secondPosition) {
      if (firstPosition.val !== secondPosition.val) {
          result = false
      }

      firstPosition = firstPosition.next
      secondPosition = secondPosition.next
  }

  // Restore linked list to original state
  firstHalfEnd.next = reverseList(secondHalfStart)

  return result
};

// find the end of the first half of the list
const endOfFirstHalf = (head) => {
  let fast = head
  let slow = head

  while (fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
  }

  return slow
}

// reverse second half of list to compare
const reverseList = (head) => {
  let previous = null
  let current = head

  while (current) {
      let nextNode = current.next
      current.next = previous
      previous = current
      current = nextNode
  }

  return previous
}

module.exports = isPalindrome
