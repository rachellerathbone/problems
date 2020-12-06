// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// BRUTE FORCE O(n^2)
// const twoSum = (numbers, target) => {
//   let result = []

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         result.push(i + 1)
//         result.push(j + 1)
//       }
//     }
//   }

//   return result
// }

// * Slightly improved version
const twoSum = (numbers, target) => {
  let result = []

  numbers.forEach((num, i) => {
    let diff = target - num
    let k = numbers.indexOf(diff)

    if (k > -1 && k !== i) {
      result.push(i + 1)
      result.push(k + 1)
    }
  })

  return result
}

// Using a hashmap O(n)
// const twoSum = (numbers, target) =>  {
//   let numObject = {}

//   for (let i = 0; i < numbers.length; i++) {
//     numObject[numbers[i]] = i
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     let diff = target - numbers[i]

//     if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
//       return [i + 1, numObject[diff] + 1]
//     }
//   }
// }

// Runtime: 60 ms, faster than 94.23% of JavaScript online
// submissions for Two Sum.
// Memory Usage: 36.1 MB, less than 15.16% of JavaScript online
// submissions for Two Sum.

module.exports = twoSum
