const mySqrt = require('./index');

test('mySqrt function exists', () => {
  expect(mySqrt).toBeDefined();
});

test('mySqrt to be a function', () => {
  expect(typeof mySqrt).toEqual('function');
});

test('Returns true if str is a palindrome.', () => {
  expect(mySqrt(0)).toEqual(0);
  expect(mySqrt(8)).toEqual(2);
});
