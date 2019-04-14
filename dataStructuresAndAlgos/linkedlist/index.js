// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // If a new node is created without passing in the next node
  // we should return null so, by default, we should set next to null
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// This class has no idea about how many nodes are in the
// linked list or what data exists in the linked list. It only
// knows about the first node. To answer any questions about the
// linked list then it needs to crawl over the linked list.
class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  size() {
    let counter = 0
    let node = this.head

    // if there is no node exist the loop and return counter
    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
    // If there are no nodes
    // if (!this.head) {
    //   return null
    // }
    //
    // let node = this.head
    // let counter = 0
    //
    // while (node) {
    //   // If there is no next node, we are at the end
    //   if (!node.next) {
    //     return node
    //   }
    //
    //   node = node.next
    // }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next

    while (node.next) {
      previous = node
      node = node.next
    }

    previous.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) { // There are some existing nodes in our chain
      last.next = new Node(data)
    } else { // the chain is empty
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    // const currentNode = this.getAt(index)
    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }

  forEach(fn) {
    let node = this.head
    let counter = 0

    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }


  // Defines a generator function with the key of symbol dot iterator
  *[Symbol.iterator]() {
    let node = this.head

    while (node) {
      yield node
      node = node.next
    }
  }
}


// Example of a real implementation
const list = new LinkedList()
list.head = new Node(10)

module.exports = { Node, LinkedList };
