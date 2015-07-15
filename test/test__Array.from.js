// Javascript Array methods tests including ES6
expect = require('chai').expect;

// Polyfill
require('../polyfills/Array.from');

//The Array.from() method creates a new Array instance from an array-like or iterable object.
describe('Array', function() {
	describe('#from', function(){
		it.skip('returns a new Array insance from an array-like or iterable object', function(){
			// Array-like object (arguments) to Array
			function f() {
			  return Array.from(arguments);
			}

			expect( f(1, 2, 3) ).to.equal([1,2,3]);
			// [1, 2, 3]


			// Any iterable object...
			// Set
			var s = new Set(["foo", global]);
			expect(Array.from(s)).to.equal(["foo", global]);
			// ["foo", window]

			// Map
			var m = new Map([[1, 2], [2, 4], [4, 8]]);
			expect(Array.from(m)).to.equal([[1, 2], [2, 4], [4, 8]]);
			// [[1, 2], [2, 4], [4, 8]]


			// String
			expect(Array.from("foo")).to.equal(["f", "o", "o"]);
			// ["f", "o", "o"]


			// Using an arrow function as the map function to
			// manipulate the elements
			expect(Array.from([1, 2, 3], x => x + x)).to.equal([2, 4, 6]);
			// [2, 4, 6]


			// Generate a sequence of numbers
			expect(Array.from({length: 5}, (v, k) => k)).to.equal([0, 1, 2, 3, 4]);
			// [0, 1, 2, 3, 4]

		});
	})
}

);