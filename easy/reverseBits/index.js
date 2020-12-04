// Write a program that takes a 64-bit unsigned integer and returns the 64-bit
// unsigned integer consisting of th ebits of the input in reverse order. For
// exmaple, if the input is 1110000000000001 the output should be 1000000000000111
// Hint: use a lookup table

// Solution notes - if we need to perform this operation just once, there is a simple
// brute-force algorithm: iterate through the 32 least significant bits of the input
// and swap each with the corresponding most significant bit.

// If it were to be performed repeatedly, we look more carefully at the structure of the
// input, with an eye towards using a cache.

// * did similar problem but with 32 bits as that is how many bits JS deals with at a time
const reverseBits = function(n) {
    const bits = n.toString(2).padStart(32, '0').split('').reverse().join('');

    return parseInt(bits, 2);
};


// * NOTE
// The padStart() method pads the current string with another string (multiple times, if needed)
// until the resulting string reaches the given length. The padding is applied from the start of
// the current string.
