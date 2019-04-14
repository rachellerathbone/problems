// Let's call an array A a mountain if the following properties hold:
//
// A.length >= 3
// There exists some 0 < i < A.length - 1 such that
// A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such
// that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
//
// Example 1:
//
// Input: [0,1,0]
// Output: 1
// Example 2:
//
// Input: [0,2,1,0]
// Output: 1

const peakIndexInMountainArray = (A) => {
  const len = A.length - 1

  for (let i = 0; i < A.length; i++) {
    if (i === 0 && i > A [1]) {
      return 0
    } else if (i === len && i > A[len - 1]) {
      return i
    } else if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      return i
    }
  }

  if (len < 2) {
    return 1
  }

  return 0
}

module.exports = peakIndexInMountainArray
