var expect = require('chai').expect;

//The reduceRight() method applies a function against an
//accumulator and each value of the array (from right-to-left)
//has to reduce it to a single value.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#reduceRight', function(){
			it('applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.', function(){
				var total = [0, 1, 2, 3].reduceRight(function(a, b) {
					return a + b;
				});
				expect( total ).to.equal( 6 );


				// flatten array of arrays
				var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
				  return a.concat(b);
				});
				expect( flattened ).to.eql( [4, 5, 2, 3, 0, 1] );
			});
		})

	})
}

);