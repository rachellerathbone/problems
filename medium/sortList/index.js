// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:
//
// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:
//
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

const sortList = (head) => {
  let ptr1 = head
  let ptr2 = head
  let len = 0
  let step = 1
  let dummyHead = new ListNode()

  dummyHead.next = head

  // get the total length of the list
  while (ptr1) {
    len++
    ptr1 = ptr1.next
  }

  while (step < len) {
    ptr1 = dummyHead
    ptr2 = ptr1.next

    let pre1 = ptr1
    let pre2 = null

    ptr1 = ptr1.next

    while (ptr1 && ptr2) {
        // move ptr2 to the start of the second half of current merge sort range
      for (let i = 0; i < step && ptr2; i++) {
        pre2 = ptr2
        ptr2 = ptr2.next
      }

      // At the begining of merge sort, each half has *step* nodes
      let remain1 = step
      let remain2 = step

      // Since ptr2 is always ahead of ptr1, make sure it's not null before merge all the time
      while (remain1 && remain2 && ptr2) {
        if (ptr1.val <= ptr2.val) {
          pre1.next = ptr1
          ptr1 = ptr1.next
          pre1 = pre1.next
          remain1--
        } else {
          pre2.next = ptr2.next
          ptr2.next = pre1.next
          pre1.next = ptr2
          pre1 = pre1.next
          ptr2 = pre2.next
          remain2--
        }
      }

      // merge remaining nodes to the merged sequence
      if (remain1 > 0) {
        while (remain1 !== 0 && ptr1) {
          pre1 = ptr1
          ptr1 = ptr1.next
          remain1--
        }

        ptr2 = ptr1
      } else if (remain2 > 0) {
          while (remain2 !== 0 && ptr2) {
            pre2 = ptr2
            ptr2 = ptr2.next
            remain2--
          }

        ptr1 = ptr2
        pre1 = pre2
      }
    }

    step *= 2
  }

  return dummyHead.next
}

// Runtime: 88 ms, faster than 99.52% of JavaScript online submissions
// for Sort List.
// Memory Usage: 39.3 MB, less than 95.00% of JavaScript online submissions
// for Sort List.

module.exports = sortList
