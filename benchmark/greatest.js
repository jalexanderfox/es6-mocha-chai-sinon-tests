// A benchmark to see whether 
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var arr = [];
// var arr = new Array();
// arr = arr.concat([ 1, 6, 500, 212, 100001, 200, 3 ]);

// build array of random numbers
for(var i=0; i<1000; i++) {
	arr[i] = getRandomIntInclusive(-1000, 1000);
}

// show the generated array
console.log(arr);

// iterative
var findGreatest = function(arr) {
	// var greatest = ( arr.length > 0 ) ? Number.NEGATIVE_INFINITY : undefined;
	var greatest = Number.NEGATIVE_INFINITY;
	for( var i = 0; i < arr.length; i++){
		greatest = arr[i] > greatest ? arr[i] : greatest;
	}
	return greatest;
};


// apply method
// http://ejohn.org/blog/fast-javascript-maxmin/
Array.max = function( array ){
    return Math.max.apply( Math, array );
};

// Show that both functions return the same result
console.log('iterative returns %d', findGreatest(arr));
console.log('Math.max.apply returns %d', Array.max(arr));


// add tests
suite.add('iterative', function() {
  findGreatest(arr);
})
.add('Math.max.apply', function() {
  Array.max(arr);
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