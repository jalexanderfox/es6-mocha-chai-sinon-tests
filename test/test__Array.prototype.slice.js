var expect = require('chai').expect;

//The slice() method returns a shallow copy of a portion of an array into a new array object.
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
		})

	})
}

);