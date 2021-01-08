const titleToNumber = require('./index.js');

test('titleToNumber function exists', () => {
  expect(typeof titleToNumber).toEqual('function');
});

test('titleToNumber should return column number for given column title', () => {
  expect(titleToNumber("A")).toEqual(1);
  expect(titleToNumber("AB")).toEqual(28);
  expect(titleToNumber("ZY")).toEqual(701);
});
