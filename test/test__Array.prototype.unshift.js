var expect = require('chai').expect;

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#unshift', function(){
			it('adds one or more elements to the beginning of an array and returns the new length of the array.', function(){
				var arr = [1, 2];

				expect( arr.unshift(0) ).to.equal( 3 ); // result of call is 3, the new array length
				expect( arr ).to.eql( [0, 1, 2] );

				expect( arr.unshift(-2, -1) ).to.equal( 5 ); // = 5
				expect( arr ).to.eql( [-2, -1, 0, 1, 2] );

				expect( arr.unshift([-3]) ).to.equal( 6 );
				expect( arr ).to.eql( [[-3], -2, -1, 0, 1, 2] );
			});
		})

	})
}

);