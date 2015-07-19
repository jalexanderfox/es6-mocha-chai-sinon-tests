var expect = require('chai').expect;

//The reduce() method applies a function against
//an accumulator and each value of the array (from left-to-right)
//has to reduce it to a single value.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#reduce', function(){
			it('applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.', function(){
				var total = [0, 1, 2, 3].reduce(function(a, b) {
					return a + b;
				});
				expect( total ).to.equal( 6 );


				// flatten array of arrays
				var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
				  return a.concat(b);
				});
				expect( flattened ).to.eql( [0, 1, 2, 3, 4, 5] );
			});
		});
	});
});
