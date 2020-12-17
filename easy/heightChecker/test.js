const majorityElement = require('./index');

test('majorityElement is a function', () => {
  expect(typeof majorityElement).toEqual('function');
});

test('majorityElement returns the element that occurs the most in an array', () => {
  expect(majorityElement([5,1,2,3,4])).toEqual(5);
  expect(majorityElement([1,2,3,4,5])).toEqual(0);
});

