var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


var array1 = [1, 2, 3];
var array2 = [4, 5, 6];


var arrayConcat = function() {
	return array1.concat(array2);
}

var pushApply = function() {
	// http://davidwalsh.name/merge-arrays-javascript
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
	Array.prototype.push.apply(array1, array2);
	return array1;
}


console.log(pushApply()); // is: [1, 2, 3, 4, 5, 6]
array1 = [1, 2, 3];
console.log(arrayConcat()); // is: [1, 2, 3, 4, 5, 6]

// add tests
suite.add('pushApply', function() {
  pushApply();
  array1 = [1, 2, 3];
})
.add('arrayConcat', function() {
  arrayConcat();
  array1 = [1, 2, 3];
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  console.log('array1 = ', array1);
  console.log('array2 = ', array2);
})
// run async
.run({ 'async': true });
