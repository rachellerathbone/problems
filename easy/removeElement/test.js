const removeElement = require('./index');

test('removeElement is a function', () => {
  expect(typeof removeElement).toEqual('function');
});

test('removeElement returns the element that occurs the most in an array', () => {
  expect(removeElement([1, 1, 1, 3, 3, 4], 1)).toEqual(3);
  expect(removeElement([2, 2, 1, 4, 3, 1, 1, 2, 2], 2)).toEqual(5);
});

