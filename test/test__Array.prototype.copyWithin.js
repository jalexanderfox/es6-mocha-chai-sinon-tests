// Javascript Array methods tests including ES6
// arr.copyWithin(target, start[, end = this.length])

expect = require('chai').expect;


// Polyfill
require('../polyfills/polyfills').getPolyfill('Array.prototype.copyWithin');

//The every() method tests whether all elements in the array pass the test implemented by the provided function.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#copyWithin', function(){
			function isBigEnough(element, index, array) {
				return element >= 10;
			}
			it('The copyWithin() method copies the sequence of array elements within the array to the position starting at target.', function(){
				expect([1, 2, 3, 4, 5].copyWithin(0, 3)).to.eql([4, 5, 3, 4, 5]);
				// [4, 5, 3, 4, 5]

				expect([1, 2, 3, 4, 5].copyWithin(0, 3, 4)).to.eql([4, 2, 3, 4, 5]);
				// [4, 2, 3, 4, 5]

				expect([1, 2, 3, 4, 5].copyWithin(0, -2, -1)).to.eql([4, 2, 3, 4, 5]);
				// [4, 2, 3, 4, 5]

				expect([].copyWithin.call({length: 5, 3: 1}, 0, 3)).to.eql({0: 1, 3: 1, length: 5});
				// {0: 1, 3: 1, length: 5}
			});

			it.skip('ES6 Typed Arrays are subclasses of Array', function(){
				var i32a = new Int32Array([1, 2, 3, 4, 5]);

				expect(i32a.copyWithin(0, 2)).to.eql([3, 4, 5, 4, 5]);
				// Int32Array [3, 4, 5, 4, 5]

				// On platforms that are not yet ES6 compliant:
				expect(  [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4)  ).to.eql([4, 2, 3, 4, 5]);
				// Int32Array [4, 2, 3, 4, 5]
			});
		});

	})
}

);