var expect = require('chai').expect;

// Math.sqrt(x)
// The Math.sqrt() function returns the square root of a number


// Because sqrt is a static property of Math, you always use it as Math.sqrt,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#sqrt', function(){
		it('returns the square root of a number', function(){
				expect( Math.sqrt(9) ).to.equal( 3 );
				expect( Math.sqrt(2) ).to.equal( 1.4142135623730951 );

				expect( Math.sqrt(1) ).to.equal( 1 );
				expect( Math.sqrt(0) ).to.equal( 0 );
				expect( Math.sqrt(-1) ).to.be.NaN;
				expect( Math.sqrt(Number.POSITIVE_INFINITY) ).to.equal( Number.POSITIVE_INFINITY );
				expect( Math.sqrt(Number.NEGATIVE_INFINITY) ).to.be.NaN;
		});
	});
});


