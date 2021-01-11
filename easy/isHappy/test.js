const isHappy = require('./index.js');

test('isHappy function exists', () => {
  expect(typeof isHappy).toEqual('function');
});

test('should return true if number is happy', () => {
  expect(isHappy(19)).toBeTruthy();
  expect(isHappy(2)).toBeFalsy();
});
