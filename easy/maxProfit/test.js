const maxProfit = require('./index.js');

test('maxProfit function exists', () => {
  expect(typeof maxProfit).toEqual('function');
});

test('maxProfit should return max profit total', () => {
  expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
  expect(maxProfit([1,2,3,4,5])).toEqual(4);
});
