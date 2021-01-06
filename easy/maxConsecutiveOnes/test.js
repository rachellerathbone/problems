const findMaxConsecutiveOnes = require('./index');

test('findMaxConsecutiveOnes is a function', () => {
  expect(typeof findMaxConsecutiveOnes).toEqual('function');
});

test('findMaxConsecutiveOnes returns the element that occurs the most in an array', () => {
  expect(findMaxConsecutiveOnes([1,0,1,1,0,1])).toEqual(4);
  expect(findMaxConsecutiveOnes([1,0,0,1,1,0,1,1])).toEqual(5);
});

