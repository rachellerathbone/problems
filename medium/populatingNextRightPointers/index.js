const connect = (root) => {
  if (!root) return

  let child = null
  let childHead = null
  let parent = root

  while (parent) {
    while (parent) {
      if (parent.left) {
        if (childHead) {
          child.next = parent.left
        } else {
          childHead = parent.left
        }

        child = parent.left
      }

      if (parent.right) {
        if (childHead) {
          child.next = parent.right
        } else {
          childHead = parent.right
        }

        child = parent.right
      }

      parent = parent.next
    }

    parent = childHead
    child = null
    childHead = null
  }
};
