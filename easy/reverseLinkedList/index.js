// Iterative solution
const reverseList = (head) => {
  if (!head) {
    return head
  }

  let node = head
  let tmp
  let newHead

   while(node !== null){
    tmp = node
    node = tmp.next
    tmp.next = newHead
    newHead = tmp
  }

  return newHead
}

// Runtime: 64 ms, faster than 79.53% of JavaScript online 
// submissions for Reverse Linked List.
// Memory Usage: 34.8 MB, less than 87.04% of JavaScript online
// submissions for Reverse Linked List.

// Recursive solution
const reverseList = (head) => {
  if (!head || !head.next) {
    return head
  }

  let tmp = reverseList(head.next)
  head.next.next = head
  head.next = undefined

  return tmp
}

// Runtime: 60 ms, faster than 100.00% of JavaScript online
// submissions for Reverse Linked List.
// Memory Usage: 35.4 MB, less than 14.57% of JavaScript online
// submissions for Reverse Linked List.
