const palindromeInsertion = require('./index');

test('palindromeInsertion function is defined', () => {
  expect(palindromeInsertion).toBeDefined()
});

test('Returns number of minimum insertions to make str a palindrome', () => {
  expect(palindromeInsertion('aa')).toEqual(0);
  expect(palindromeInsertion('aab')).toEqual(1);
  expect(palindromeInsertion('abcdba')).toEqual(1);
});
