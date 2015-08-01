Math.asinh = Math.asinh || function(x) {
  if (x === -Infinity) {
    return x;
  } else {
    return Math.log(x + Math.sqrt(x * x + 1));
  }
};