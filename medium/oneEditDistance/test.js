const isOneEditDistance = require('./index')

test('isOneEditDistance is a function', () => {
  expect(typeof isOneEditDistance).toEqual('function')
})

test('at is 1 edit away from cat', () => {
  expect(isOneEditDistance('at', 'cat')).toBeTruthy()
})

test('a is 1 edit away from at', () => {
  expect(isOneEditDistance('a', 'at')).toBeTruthy()
})

test('an empty string is 1 edit away from a single char', () => {
  expect(isOneEditDistance('', 'a')).toBeTruthy()
})

test('teacher is not one edit away from detacher', () => {
  expect(isOneEditDistance('teacher', 'detacher')).toBeFalsy()
})

test('not is not one edit away from noted', () => {
  expect(isOneEditDistance('not', 'noted')).toBeFalsy()
})
