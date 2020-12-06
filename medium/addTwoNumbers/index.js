// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
const addTwoNumbers = (l1, l2) => {
  const newList = new ListNode(0) // new list
  let nextNode = newList // node to track values in new list
  let total = 0

  while (l1 || l2) {
    if (l1) {
      total += l1.val
      l1 = l1.next
    }

    if (l2) {
      total += l2.val
      l2 = l2.next
    }

    nextNode.val = (total % 10)
    total = Math.floor(total / 10)

    if (l1 || l2 || total > 0) {
      nextNode.next = new ListNode(total)
    }

    nextNode = nextNode.next
  }

  return newList
};

// Runtime: 128 ms, faster than 73.76% of JavaScript online
// submissions for Add Two Numbers.
// Memory Usage: 38.6 MB, less than 35.41% of JavaScript online
// submissions for Add Two Numbers.

module.exports = addTwoNumbers
