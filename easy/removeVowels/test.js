const removeVowels = require('./index');

test('removeVowels is a function', () => {
  expect(typeof removeVowels).toEqual('function');
});

test('removeVowels returns the element that occurs the most in an array', () => {
  expect(removeVowels("leetcodeisacommunityforcoders")).toEqual("ltcdscmmntyfrcdrs");
  expect(removeVowels("aeiou")).toEqual("");
});
