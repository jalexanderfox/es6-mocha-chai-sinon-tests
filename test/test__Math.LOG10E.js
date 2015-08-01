var expect = require('chai').expect;

// Math.LOG10E

// The Math.LOG10E property represents the base 10 logarithm of e, approximately 0.434:
// Math.LOG10E=log10(e)≈0.434

// Because LOG10E is a static property of Math, you always use it as Math.LOG10E,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#LOG10E', function(){
		it('property represents the base 10 logarithm of e, approximately 0.434', function(){
			expect( Math.LOG10E ).to.equal( 0.4342944819032518 );
		});
	});
});


