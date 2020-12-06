// There are two sorted arrays nums1 and nums2 of size m and
// n respectively.
//
// Find the median of the two sorted arrays. The overall run
// time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.
//
// Example 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
//
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3) / 2 = 2.5

const findMedianSortedArrays = (nums1, nums2) => {
  let m = nums1.length
  let n = nums2.length

  if ((m + n) % 2 !== 0) // odd
    return findKth(nums1, nums2, parseInt((m + n) / 2), 0, m - 1, 0, n - 1)
  else { // even
    return (findKth(nums1, nums2, parseInt((m + n) / 2), 0, m - 1, 0, n - 1)
      + findKth(nums1, nums2, parseInt((m + n) / 2) - 1, 0, m - 1, 0, n - 1)) * 0.5
  }
}

const findKth = (A, B, k,
  aStart, aEnd, bStart, bEnd) => {

  let aLen = aEnd - aStart + 1
  let bLen = bEnd - bStart + 1

  if (aLen === 0) return B[bStart + k]
  if (bLen === 0) return A[aStart + k]
  if (k == 0) {
    return A[aStart] < B[bStart] ? A[aStart] : B[bStart]
  }

  let aMid = parseInt(aLen * k / (aLen + bLen))
  let bMid = parseInt(k - aMid - 1)

  // make aMid and bMid to be array index
  aMid = aMid + aStart
  bMid = bMid + bStart

  if (A[aMid] > B[bMid]) {
    k = k - (bMid - bStart + 1)
    aEnd = aMid
    bStart = bMid + 1
  } else {
    k = k - (aMid - aStart + 1)
    bEnd = bMid
    aStart = aMid + 1
  }

  return findKth(A, B, k, aStart, aEnd, bStart, bEnd)
}

// Runtime: 120 ms, faster than 100.00% of JavaScript online submissions for
// Median of Two Sorted Arrays.
// Memory Usage: 39.4 MB, less than 43.21% of JavaScript online submissions for
// Median of Two Sorted Arrays.

module.exports = findMedianSortedArrays
