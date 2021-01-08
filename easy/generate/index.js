// Given a non-negative integer numRows, generate the first
// numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two
// numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const generate = function(numRows) {
    let triangle = []

    if (numRows === 0) {
        return triangle
    }

    // manually create the first row
    triangle.push([1])

    // initialize at 1 as we already have our row in 0
    for (let i = 1; i < numRows; i++) {
        // create a reference to the previous row
        let prevRow = triangle[i - 1]
        let newRow = []

        // manually add the 1 that is at the start of each row
        newRow.push(1)

        // initialize at 1 as we already have an element in 0
        for (let j = 1; j < prevRow.length; j++) {
            // two numbers above = index we are on minus 1 and the index we are on
            newRow.push(prevRow[(j - 1)] + prevRow[j])
        }

        // manually add the 1 that is at the end of each row
        newRow.push(1)
        triangle.push(newRow)
    }

    return triangle
};

module.exports = generate
