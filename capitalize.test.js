const capitalize = require('./capitalize');

test('capitalize test is Test', () => {
  expect(capitalize('test')).toBe('Test');
});
