const intersection = require('./index.js');

test('intersection function exists', () => {
  expect(typeof intersection).toEqual('function');
});

// todo - update tests
test('should returnthe intersection of 2 arrays', () => {
  expect(intersection([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
  expect(intersection([1,2,2,1], [2,2])).toEqual([2,2]);
});
