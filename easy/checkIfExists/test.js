const checkIfExist = require('./index');

test('checkIfExist is a function', () => {
  expect(typeof checkIfExist).toEqual('function');
});

test('checkIfExist returns the element that occurs the most in an array', () => {
  expect(checkIfExist([10,2,5,3])).toBeTruthy();
  expect(checkIfExist([14, 3, 7, 1, 8])).toBeTruthy();
  expect(checkIfExist([14, 3, 9, 1, 8])).toBeFalsy();
});

