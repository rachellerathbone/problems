const sortArrayByParity = require('./index');

test('sortArrayByParity is a function', () => {
  expect(typeof sortArrayByParity).toEqual('function');
});

test('sortArrayByParity returns the element that occurs the most in an array', () => {
  expect(sortArrayByParity([3,1,2,4])).toEqual([2,4,3,1]);
});

