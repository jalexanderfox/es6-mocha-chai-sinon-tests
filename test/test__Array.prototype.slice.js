var expect = require('chai').expect;

// arr.slice([begin[, end]])

//The slice() method returns a shallow copy of a portion of an array into a new array object.

// Parameters

// begin
// Zero-based index at which to begin extraction.
// As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the
// last two elements in the sequence.
// If begin is omitted, slice begins from index 0.

// end
// Zero-based index at which to end extraction. slice extracts up to but not including end.
// slice(1,4) extracts the second element up to the fourth element (elements indexed 1, 2, and 3).
// As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts
// the third element through the second-to-last element in the sequence.
// If end is omitted, slice extracts to the end of the sequence (arr.length).

describe('Array', function() {
	describe('#prototype', function(){
		describe('#slice', function(){
			it('returns a shallow copy of a portion of an array into a new array object.', function(){
				var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
				var citrus = fruits.slice(1, 3);
				expect( citrus ).to.eql( ['Orange','Lemon'] );

				// Array like objects
				function list() {
				  return Array.prototype.slice.call(arguments, 0);
				}

				var list1 = list(1, 2, 3); // [1, 2, 3]
				expect( list1 ).to.eql( [1, 2, 3] );

				// Binding slice
				var unboundSlice = Array.prototype.slice;
				var slice = Function.prototype.call.bind(unboundSlice);

				expect(typeof slice ).to.equal('function');

				var list = function() {
					return slice(arguments, 0);
				}

				// Lookout for hoisting issues here...
				// function list() {
				//   return slice(arguments, 0);
				// }

				var list2 = list(1, 2, 3); // [1, 2, 3]
				expect( list2 ).to.eql( [1, 2, 3] );
			});
		});
	});
});
