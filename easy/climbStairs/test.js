const climbStairs = require('./index.js');

test('climbStairs function exists', () => {
  expect(typeof climbStairs).toEqual('function');
});

test('should return number of distinct ways to reach the top of the stairs', () => {
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
});
