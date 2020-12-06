// We have a list of points on the plane.  Find the K closest points to
// the origin (0, 0).
//
// (Here, the distance between two points on a plane is the Euclidean distance.)
//
// You may return the answer in any order.  The answer is guaranteed to be unique
// (except for the order that it is in.)
//
//
//
// Example 1:
//
// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer
// is just [[-2,2]].
// Example 2:
//
// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)
//
//
// Note:
//
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

const kClosest = (points, K) => {
  return points.sort((p1, p2) => distanceFromOrigin(p1) - distanceFromOrigin(p2)).slice(0, K)
}

const distanceFromOrigin = (point) => {
  const [x, y] = point
  return (x * x) + (y * y)
}

// Runtime: 204 ms, faster than 86.17% of JavaScript
// online submissions for K Closest Points to Origin.
// Memory Usage: 48.3 MB, less than 61.45% of JavaScript
// online submissions for K Closest Points to Origin.

// const kClosest = (points, K) => {
//   points.sort((p1, p2) => {
//     const distanceFromOrigin1 = distanceFromOrigin(p1)
//     const distanceFromOrigin2 = distanceFromOrigin(p2)

//     return distanceFromOrigin1 - distanceFromOrigin2
//   })


//   return points.slice(0, K)
// }

// const distanceFromOrigin = (point) => {
//   const [x, y] = point
//   return (x * x) + (y * y)
// }

module.exports = kClosest
