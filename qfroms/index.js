// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Create a queue using 2 stacks: stack + stack = queue
class Queue { // Very inefficient and would never actually use in the real world
  // Move everthing (pop) from the first stack into the second.
  // This reverses the order
  // When you then pop from the second stack you get the elements in
  // the order that you would want for a stack
  constructor(){
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.push(record)
  }

  // For every record in the first stack, pop it out and push it into the
  // second stack
  remove() {
    // Use peek() to make sure there are still elements to work with
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }

    // Before returning this value return the state of our stacks
    const record = this.second.pop()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }

    const record = this.second.peek()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record
  }
}

module.exports = Queue;
