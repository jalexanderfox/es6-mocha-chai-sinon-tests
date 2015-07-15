var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


// Polyfill
var find = require('../polyfills/Array.prototype.find').find;


// A prime number (or a prime) is a natural number greater than 1 that has no
// positive divisors other than 1 and itself. A natural number greater than 1
// that is not a prime number is called a composite number.
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 5, 8, 12].find(isPrime));
console.log(find.call([4, 5, 8, 12], isPrime));


// add tests
suite.add('native or polyfill', function() {
  [4, 5, 8, 12].find(isPrime)
}).add('call polyfill', function() {
  find.call([4, 5, 8, 12], isPrime)
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

