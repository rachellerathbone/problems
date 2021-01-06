const majorityElement = require('./index');

test('majorityElement is a function', () => {
  expect(typeof majorityElement).toEqual('function');
});

test('majorityElement returns the element that occurs the most in an array', () => {
  expect(majorityElement([4,3,2,7,8,2,3,1])).toEqual([5,6]);
});

