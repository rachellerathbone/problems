// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default
// code definition to get new method signature.

const merge = (intervals) => {
  intervals.sort((a,b) => a[0] - b[0])
  let results = []
  let len = intervals.length

  intervals.reduce((pre, cur, idx) => {
    let merged

    if (pre[1] >= cur[0]) {
      merged = [pre[0], Math.max(pre[1], cur[1])]
    } else {
      results.push(pre)
      merged = cur
    }

    if (len - 1 === idx) {
      results.push(merged)
    } else {
      return merged
    }

  }, intervals[0])

  return results
};

// Runtime: 72 ms, faster than 99.50% of JavaScript online submissions for
// Merge Intervals.
// Memory Usage: 37.4 MB, less than 33.34% of JavaScript online submissions
// for Merge Intervals.
