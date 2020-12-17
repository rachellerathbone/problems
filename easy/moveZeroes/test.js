const moveZeroes = require('./index');

test('moveZeroes is a function', () => {
  expect(typeof moveZeroes).toEqual('function');
});

test('moveZeroes returns the element that occurs the most in an array', () => {
  expect(moveZeroes([0,1,0,3,12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes([1, 5, 0, 0, 6, 12, 0])).toEqual([1, 5, 6, 12, 0, 0, 0]);
});

