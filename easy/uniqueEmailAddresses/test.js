const numUniqueEmails = require('./index');

test('numUniqueEmails function exists', () => {
  expect(numUniqueEmails).toBeDefined();
});

test('Return the number of chars from string J that exist in string S', () => {
  const inputArr1 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
  const inputArr2 = ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]
  expect(numUniqueEmails(inputArr1)).toEqual(2);
  expect(numUniqueEmails(inputArr2)).toEqual(2);
});
