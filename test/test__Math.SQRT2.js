var expect = require('chai').expect;

// Math.SQRT2

// The Math.SQRT2 property represents the square root of 2, approximately 1.414::


// Because SQRT2 is a static property of Math, you always use it as Math.SQRT2,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#SQRT2', function(){
		it('property represents the square root of 2, approximately 1.414', function(){
			expect( Math.SQRT2 ).to.equal( 1.4142135623730951 );
		});
	});
});


