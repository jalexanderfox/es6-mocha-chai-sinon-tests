var expect = require('chai').expect;

// Math.atanh()

// The Math.atanh() function returns the hyperbolic arctangent of a number, that is

// ∀x∊(-1,1),Math.atanh(x)=arctanh(x)= the unique ysuch thattanh(y)=x



// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.atanh');

// Because atanh() is a static method of Math, you always use it as Math.atanh(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#atanh', function(){
		it('returns the hyperbolic arctangent of a number', function(){
			expect( Math.atanh(1) ).to.equal( Infinity );
			expect( Math.atanh(0) ).to.equal( 0 );
			expect( Math.atanh(0.5) ).to.equal( 0.5493061443340549 );
		});

		it('returns NaN for values greater than 1 and less than -1 Math.atanh()', function(){
			expect( Math.atanh(1.001) ).to.be.NaN;
			expect( Math.atanh(-1.1) ).to.be.NaN;
			expect( Math.atanh(-2) ).to.be.NaN;
		});
	});
});


