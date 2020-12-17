// Given an array A of non-negative integers, return an array consisting of
// all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.



// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

const sortArrayByParity = function(A) {
    let pointer1 = 0;

    for (let pointer2 = 0; pointer2 < A.length; pointer2++) {
        if (A[pointer2] %2 === 0) {
            let temp = A[pointer1]
            A[pointer1] = A[pointer2]
            A[pointer2] = temp

            pointer1++
        }
    }

    return A
};

module.exports = sortArrayByParity

// Runtime: 96 ms, faster than 75.21% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 40.2 MB, less than 95.26% of JavaScript online submissions for Sort Array By Parity.
