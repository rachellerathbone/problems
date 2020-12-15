const majorityElement = require('./index');

test('majorityElement is a function', () => {
  expect(typeof majorityElement).toEqual('function');
});

test('majorityElement returns the element that occurs the most in an array', () => {
  expect(majorityElement([3,2,3])).toEqual(3);
  expect(majorityElement([2,2,1,1,1,2,2])).toEqual(2);
});

