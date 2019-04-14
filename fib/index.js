// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTION --> linear runtime O(n)
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


// RECURSIVE SOLUTION --> exponential run time. For each element that is
// added there is a dramatic increas in the number of function calls that
// are required.
// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//
//   return fib(n - 1) + fib(n - 2)
// }

// This can be used in many cases where you need to increase the
// speed of an algorithm
function memoize(fn) {
  // Declare storage area
  const cache = {} // A record of all the previous calls to this function and their respective results

  // anonymous function is fib below. Receives args passed to slowFib
  // because we want to reuse this for other functions which may have a diff num
  // of args, we need to use the spread operator. 'I don't know how many args there are,
  // just take them and assign them as an array to this variable args.
  return function(...args) {
    if (cache[args]) { // check to see if we ever called this function with this particular set of args before?
      return cache[args]
    }

    const result = fn.apply(this, args)
    // at the key args store the result that we just created
    cache[args] = result

    return result
  }
}

// RECURSIVE SOLUTION WITH MEMOIZATION --> saving result in memory for any
// number that has already been called (caching the results)
function slowFib(n) {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)


module.exports = fib;
