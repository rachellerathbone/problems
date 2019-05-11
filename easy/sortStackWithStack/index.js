const Stack = require('./stack')

const sortStack = (stack) => {
  let tmpStack = new Stack()

  while (stack.length > 0) {
    let tmp = stack.pop()

    while (tmpStack.length > 0 && tmpStack.peek() > tmp) {
      stack.push(tmpStack.pop())
    }

    tmpStack.push(tmp)
  }

  return tmpStack
}

module.exports = sortStack
