const addStrings = require('./index.js');

test('addStrings function exists', () => {
  expect(typeof addStrings).toEqual('function');
});

test('Total of 2 strings should be correct', () => {
  expect(addStrings('255', '10')).toEqual('265');
  expect(addStrings('2', '0')).toEqual('2');
});
