// note: variable declaration "let" is not available in the current version of node --harmony
var x = new Set([1, 2, 3, 4, 4, 4, 5]);

x.add(6);
x.delete(2);

console.log('The set contains', x.size, 'elements.');
console.log('The set has 1:', x.has(1));
console.log('The set has 8:', x.has(8));

//values and keys are the same in a set
x.forEach((value, key, set) => console.log(value, key, set));

console.log('iterable');
for (var value of x) {
  console.log(value);
}

console.log("iterable values");
for (var value of x.values()) {
  console.log(value);
}

console.log("iterable keys");
for (var value of x.keys()) {
  console.log(value);
}

console.log("iterable entries (key, value)");
for (var value of x.entries()) {
  console.log(value);
}