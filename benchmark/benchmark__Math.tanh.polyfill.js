var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

Math_tanh_one = function(x) {
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    var y = Math.exp(2 * x);
    return (y - 1) / (y + 1);
  }
};

Math_tanh_two = function(x) {
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
  }
}

console.log("Math_tanh_one of 2 = ", Math_tanh_one(2));
console.log("Math_tanh_two of 2 = ", Math_tanh_two(2));

// add tests
suite.add('#one call to Math.exp', function() {
	Math_tanh_one(2);
})
.add('#two calls to Math.exp', function() {
	Math_tanh_two(2);
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