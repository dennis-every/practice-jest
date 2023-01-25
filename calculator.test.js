describe('calulator add', () => {
  test('add 5 and 3 is 8', () => {
    expect(() => Calculator.add(5, 3).toBe(8));
  });
  test('add 5 and 3 is not 7', () => {
    expect(() => Calculator.add(5, 3).toNotBe(7));
  });
  test('add a and b is not a number', () => {
    expect(() => Calculator.add(a, b).toThrow());
  });
});

describe('calulator subtract', () => {
  test('subtract 3 from 5 is 2', () => {
    expect(() => Calculator.subtract(5, 3).toBe(2));
  });
  test('subtract 5 from 3 is -2', () => {
    expect(() => Calculator.subtract(3, 5).toBe(-2));
  });
  test('subtract a and b is not a number', () => {
    expect(() => Calculator.subtract(a, b).toThrow());
  });
});

describe('calulator divide', () => {
  test('divide 6 by 3 is 2', () => {
    expect(() => Calculator.divide(5, 3).toBe(2));
  });
  test('divide 15 by 3 is 5', () => {
    expect(() => Calculator.divide(15, 3).toBe(5));
  });
  test('divide a and b is not a number', () => {
    expect(() => Calculator.divide(a, b).toThrow());
  });
});

describe('calulator multiply', () => {
  test('multiply 5 by 3 is 15', () => {
    expect(() => Calculator.multiply(5, 3).toBe(8));
  });
  test('multiply 3 by 5 is 15', () => {
    expect(() => Calculator.multiply(3, 5).toBe(15));
  });
  test('multiply a and b is not a number', () => {
    expect(() => Calculator.multiply(a, b).toThrow());
  });
});
