// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// sourceOne and sourceTwo are 2 different queues
function weave(sourceOne, sourceTwo) {
  // Create a new queue to contain both sources
  const newQ = new Queue

  // Use the peek() function to make sure the source we are
  // looking at still has an element
  // While either sourceOne or sourceTwo does not return undefined
  // continue iterating
  while (sourceOne.peek() || sourceTwo.peek()) {
    // First take an element out of source one and add it to our queue
    // Then take an element out of source two and add it to our queue
    if (sourceOne.peek()) {
      newQ.add(sourceOne.remove())
    }

    if (sourceTwo.peek()) {
      newQ.add(sourceTwo.remove())
    }
  }

  return newQ
}

module.exports = weave;
