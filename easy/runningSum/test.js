const runningSum = require('./index');

test('runningSum is a function', () => {
  expect(typeof runningSum).toEqual('function');
});

test('runningSum returns the element that occurs the most in an array', () => {
  expect(runningSum([1,1,1,1,1])).toEqual([1,2,3,4,5]);
  expect(runningSum([3,1,2,10,1])).toEqual([3,4,6,16,17]);
});
