// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


// Constraints:

// Methods pop, top and getMin operations will always be called on non-empty stacks.

/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.stack = [];
    this.min = null;

};

/**
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function(x) {
    const stack = this.stack

    if (!stack.length) {
        this.min = x
    } else if (x < this.min) {
        let temp = x
        x = 2 * x - this.min
        this.min = temp
    }

    stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const stack = this.stack

    if (!stack.length) {
        return -1
    }

    if (stack[stack.length-1] < this.min) {
        let min = this.min
        this.min = 2 * this.min - stack.pop()
        stack.push(min)
    }

    return stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const stack = this.stack
    const stackLength = stack.length - 1

    if (!stack.length) {
        return -1
    }

    return stack[stackLength] < this.min ? this.min : stack[stackLength];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length) {
        return this.min
    }

    return -1
 };
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
