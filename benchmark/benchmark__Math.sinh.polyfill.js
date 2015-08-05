var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

Math_sinh_one = function(x) {
  var y = Math.exp(x);
  return (y - 1 / y) / 2;
}

Math_sinh_two = function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}

console.log("Math_sinh_one of 2 = ", Math_sinh_one(2));
console.log("Math_sinh_two of 2 = ", Math_sinh_two(2));

// add tests
suite.add('#one call to Math.exp', function() {
	Math_sinh_one(2);
})
.add('#two calls to Math.exp', function() {
	Math_sinh_two(2);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });