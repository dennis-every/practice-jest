const reverseString = require('./reverseString');

test('hello is olleh', () => {
  expect(reverseString('test')).toBe('tset');
  expect(reverseString('hello')).toBe('olleh');
});
