const stringLength = (string) => {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else {
    throw new Error('String length is < 1 or > 10');
  }
};
module.exports = stringLength;
