const xorOperation = require('./index');

test('xorOperation function exists', () => {
  expect(xorOperation).toBeDefined();
});

test('xorOperation to be a function', () => {
  expect(typeof xorOperation).toEqual('function');
});

test('Returns the bitwise XOR of all elements of nums', () => {
  expect(xorOperation(5, 0)).toEqual(8);
  expect(xorOperation(4, 3)).toEqual(8);
  expect(xorOperation(1, 7)).toEqual(7);
  expect(xorOperation(10, 5)).toEqual(2);
});

