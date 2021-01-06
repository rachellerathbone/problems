// Given the head of a linked list, remove the nth node from
// the end of the list and return its head.

// Follow up: Could you do this in one pass?



// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

const removeNthFromEnd = function(head, n) {
    let prev = null
    let curr = head
    let lookAhead = head

    for (let i  = 0; i < n; i++) {
        lookAhead = lookAhead.next
    }

    while (lookAhead !== null) {
        prev = curr
        curr = curr.next
        lookAhead = lookAhead.next
    }

    if (!prev) {
        return curr.next
    }

    prev.next = curr.next

    return head
};
