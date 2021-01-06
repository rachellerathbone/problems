// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
const removeElements = function(head, val) {
    if (head === null) {
        return head;
    }

    while (head !== null && head.val === val) {
        head = head.next;
    }

    if (head !== null) {
        let curr = head.next;
        let prev = head;

        while (curr !== null) {
            if (curr.val === val) {
                prev.next = curr.next;
            } else {
                prev = curr;
            }

            curr = curr.next;
        }
    }

    return head;
};
