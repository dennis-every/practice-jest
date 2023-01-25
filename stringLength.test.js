test('length of string is 4', () => {
  expect(() => stringLength('test').toBe(4));
});

test('length of string is 0', () => {
  expect(() => stringLength('')).toThrow();
});

test('length of string is 11', () => {
  expect(() => stringLength('12345678911')).toThrow();
});
