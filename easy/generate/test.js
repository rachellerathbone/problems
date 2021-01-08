const generate = require('./index.js');

test('generate function exists', () => {
  expect(typeof generate).toEqual('function');
});

test('should return pascal\'s triangle', () => {
  expect(generate(5)).toEqual([
        [1],
       [1,1],
      [1,2,1],
     [1,3,3,1],
    [1,4,6,4,1]
    ]);
});
