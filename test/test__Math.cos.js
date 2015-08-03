var expect = require('chai').expect;

// Math.cos(x)
// The Math.cos() function returns the cosine of a number.

// Because cos is a static property of Math, you always use it as Math.cos,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#cos', function(){
		it('returns the cosine of a number', function(){
			expect( Math.cos(0) ).to.equal( 1 );
			expect( Math.cos(1) ).to.equal( 0.5403023058681398 );

			expect( Math.cos(Math.PI) ).to.equal( -1 );
			expect( Math.cos(2 * Math.PI) ).to.equal( 1 );
		});
	});
});


