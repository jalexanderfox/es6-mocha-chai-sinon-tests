var expect = require('chai').expect;

// Math.asinh()

// The Math.asinh() function returns the hyperbolic arcsine of a number, that is

// Math.asinh(x)=arsinh(x)= the unique ysuch thatsinh(y)=x

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.asinh');

// Because asinh() is a static method of Math, you always use it as Math.asinh(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#asinh', function(){
		it('returns the hyperbolic arcsine of a number', function(){
			expect( Math.asinh(1) ).to.equal( 0.8813735870195429 );
			expect( Math.asinh(0) ).to.equal( 0 );
			expect( Math.asinh(0.5) ).to.equal( 0.48121182505960347 );
		});

		it('returns NaN for values greater than 1 and less than -1 Math.asinh()', function(){
			expect( Math.asinh(1.001) ).to.be.NaN;
			expect( Math.asinh(-1.1) ).to.be.NaN;
			expect( Math.asinh(-2) ).to.be.NaN;
		});
	});
});


