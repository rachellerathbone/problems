// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// SOLUTION 3: Using memoization to speed up slow recursive algo
function memoize(fn) {
  // Declare storage area
  const cache = {}

  // Using the spread operator allows us to reuse this function for
  // other slow algos that may have more than 1 arg
  return function(...args) {
    // check to see if we ever called this function with this particular
    // set of args before
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    // at the key args store the result that we just created
    cache[args] = result

    return result
  }
}

function slowFib(n) {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

// SOLUTION 2: RECURSIVE SOLUTION: exponential. For each element that is
// added there is a dramatic increas in the number of function calls that
// are required.
// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//
//   return fib(n - 1) + fib(n - 2)
// }

// SOLUTION 1 - ITERATIVE SOLUTION --> linear runtime O(n)
// function fib(n) {
//   let res = [0, 1]
//
//   for (let i = 2; i <= n; i++) {
//     const a = res[i - 1]
//     const b = res[i - 2]
//
//     res.push(a + b)
//   }
//
//   return res[n]
// }

module.exports = fib;
