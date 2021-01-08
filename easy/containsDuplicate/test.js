const containsDuplicate = require('./index.js');

test('containsDuplicate function exists', () => {
  expect(typeof containsDuplicate).toEqual('function');
});

test('containsDuplicate should return max profit total', () => {
  expect(containsDuplicate([1,2,3,1])).toBeTruthy();
  expect(containsDuplicate([1,2,3,4])).toBeFalsy();
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
});
