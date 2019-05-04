const isPalindrome = require('./index');

test('isPalindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

test('isPalindrome to be a function', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('Returns true if str is a palindrome.', () => {
  expect(isPalindrome('abba')).toBeTruthy();
  expect(isPalindrome('aa')).toBeTruthy();
  expect(isPalindrome('.,')).toBeTruthy();
  expect(isPalindrome('')).toBeTruthy();
  expect(isPalindrome(' ')).toBeTruthy();
  expect(isPalindrome('A man a plan a canal: Panama')).toBeTruthy();
});

test('Returns false if str is a palindrome.', () => {
  expect(isPalindrome('abb')).toBeFalsy();
  expect(isPalindrome('ab')).toBeFalsy();
  expect(isPalindrome('this is not a palindrome')).toBeFalsy();
  expect(isPalindrome('race a car')).toBeFalsy();
});
