// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 2: Using .slice()
function chunk(array, size) {
  let chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

// SOLUTION 1: Iterating over array and pushing into a chunked array
// function chunk(array, size) {
//   let chunked = []
//
//   for (let i of array) {
//     // Check last element of chunked array
//     const last = chunked[chunked.length - 1]
//
//     // If last doesn't exists or the length is equal to size
//     if (!last || last.length === size) {
//       chunked.push([i])
//     } else {
//       last.push(i)
//     }
//   }
//
//   return chunked
// }

module.exports = chunk;
