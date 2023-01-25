class Calculator {
  static add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
      throw new Error('Not a number');
    } else {
      return a + b;
    }
  };
  static subtract = (a, b) => {
    return a - b;
  };
  static divide = (a, b) => {
    return a / b;
  };
  static multiply = (a, b) => {
    return a * b;
  };
}

// Calculator.add(5, 3);
// Calculator.subtract(5, 3);
// Calculator.divide(6, 3);
// Calculator.multiply(5, 3);
