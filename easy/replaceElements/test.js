const replaceElements = require('./index');

test('replaceElements is a function', () => {
  expect(typeof replaceElements).toEqual('function');
});

test('replaceElements returns the element that occurs the most in an array', () => {
  expect(replaceElements([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]);
});

