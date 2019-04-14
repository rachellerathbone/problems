const peakIndex = require('./index.js');

test('peakIndex function exists', () => {
  expect(typeof peakIndex).toEqual('function');
})

test('highest peak of 2 and 1st index', () => {
  expect(peakIndex([1, 2, 1])).toEqual(1)
})

test('highest peak of 7 and 4th index', () => {
  expect(peakIndex([1, 3, 5, 6, 7, 6])).toEqual(4)
})

test('highest peak of 1 and 1st index', () => {
  expect(peakIndex([0, 1, 0])).toEqual(1)
})

test('array of equal elements', () => {
  expect(peakIndex([7, 7, 7])).toEqual(0)
})
