const longestCommonPrefix = require('./index.js');

test('longestCommonPrefix function exists', () => {
  expect(typeof longestCommonPrefix).toEqual('function');
});

test('should return longest common prefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
  expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
});
