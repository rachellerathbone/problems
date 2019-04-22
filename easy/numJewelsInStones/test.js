const numJewelsInStones = require('./index');

test('numJewelsInStones function exists', () => {
  expect(numJewelsInStones).toBeDefined();
});

test('Return the number of chars from string J that exist in string S', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
  expect(numJewelsInStones('z', 'ZZ')).toEqual(0);
});
