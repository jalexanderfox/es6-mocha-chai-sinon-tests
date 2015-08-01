var expect = require('chai').expect;

// Math.acosh()

// The Math.acosh() function returns the hyperbolic arc-cosine of a number, that is

// ∀x≥1,Math.acosh(x)=arcosh(x)= the unique y≥0such thatcosh(y)=x

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.acosh');

// The Math.acosh() method returns a numeric value between 0 and π radians for x between -1 and 1.
// If the value of x is outside this range, it returns NaN.

// Because acosh() is a static method of Math, you always use it as Math.acosh(), rather than as a method
// of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#acosh', function(){
		it('returns the hyperbolic arc-cosine of a number', function(){
			expect( Math.acosh(1) ).to.equal( 0 );
			expect( Math.acosh(2) ).to.equal( 1.3169578969248166 );
		});

		it('returns NaN for values less than 1 Math.acosh()', function(){
			expect( Math.acosh(0) ).to.be.NaN;
			expect( Math.acosh(0.9) ).to.be.NaN;
			expect( Math.acosh(-1) ).to.be.NaN;
			expect( Math.acosh(-2) ).to.be.NaN;
		});
	});
});


