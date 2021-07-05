const strStr = require('./index');

test('strStr is a function', () => {
  expect(typeof strStr).toEqual('function');
});

test('strStr called with n = 1', () => {
    expect(strStr("hello", "ll")).toEqual(2);
    expect(strStr("aaaaa", "bba")).toEqual(-1);
    expect(strStr("", "")).toEqual(0);
});
