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
