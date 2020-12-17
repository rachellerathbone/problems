// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



// Example 1:
// Input: arr = [2,1]
// Output: false

// Example 2:
// Input: arr = [3,5,5]
// Output: false

// Example 3:
// Input: arr = [0,3,2,1]
// Output: true


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104
const validMountainArray = function(arr) {
    let len = arr.length
    let i = 0
    let j = len - 1

    for (i = 0; i < j; i++) {
        if (arr[i] >= arr[i + 1]) {
            break
        }
    }
    if ( i == 0 || i == j ) return false

    for (j = len - 1; j > 0; j--) {
        if (arr[j - 1] <= arr[j]) {
            break
        }
    }
    if(j == 0 || j == len -1) return false

    return i == j ? true : false
};

module.e
