var expect = require('chai').expect;

// Math.LN10

// The Math.LN10 property represents the natural logarithm of 10, approximately 2.302:
// Math.LN10=ln(10)≈2.302

// Because LN10 is a static property of Math, you always use it as Math.LN10,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#LN10', function(){
		it('property represents the natural logarithm of 10, approximately 2.302', function(){
			expect( Math.LN10 ).to.equal( 2.302585092994046 );
		});
	});
});


