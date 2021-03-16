const maximumWealth = require('./index.js');

test('maximumWealth function exists', () => {
  expect(typeof maximumWealth).toEqual('function');
});

test('should return wealth that the richest customer has', () => {
  expect(maximumWealth([[1,2,3],[3,2,1]])).toEqual(6);
  expect(maximumWealth( [[1,5],[7,3],[3,5]])).toEqual(10);
  expect(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])).toEqual(17);
});
