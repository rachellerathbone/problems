const intersection = require('./index.js');

test('intersection function exists', () => {
  expect(typeof intersection).toEqual('function');
});

test('should returnthe intersection of 2 arrays', () => {
  expect(intersection([1,2,2,1], [2,2])).toEqual([2,2]);
});
