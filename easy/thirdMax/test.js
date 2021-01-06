const thirdMax = require('./index');

test('thirdMax is a function', () => {
  expect(typeof thirdMax).toEqual('function');
});

test('thirdMax returns the third max integer in an array', () => {
  expect(thirdMax([3, 2, 1])).toEqual(1);
  expect(thirdMax([2,2,1,1,1,2,2])).toEqual(2);
  expect(thirdMax([1, 2])).toEqual(2);
  expect(thirdMax([2, 2, 3, 1])).toEqual(1);
});

test('thirdMax returns null if array is empty or null arg is passed', () => {
    expect(thirdMax(null)).toBeNull();
    expect(thirdMax([])).toBeNull();
});

