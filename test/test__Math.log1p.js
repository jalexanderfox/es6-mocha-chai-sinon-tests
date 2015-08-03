var expect = require('chai').expect;

// Math.log1p(x)
// The Math.log1p() function returns the natural logarithm (base e) of 1 + a number, that is

// ∀x>-1,Math.log1p(x)=ln(1+x)



// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.log1p');

// Because log1p is a static property of Math, you always use it as Math.log1p,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#log1p', function(){
		it('returns the natural logarithm (base e) of 1 + a number', function(){
			expect( Math.log1p(2) ).to.equal( 1.0986122886681096 );
			expect( Math.log1p(1) ).to.equal( 0.6931471805599453 );
			expect( Math.log1p(0) ).to.equal( 0 );
		});

		it('the return value is always NaN, if the value of x is negative', function(){
			expect( Math.log1p(-2) ).to.be.NaN;
			expect( Math.log1p(-1) ).to.equal( -Infinity );
			expect( Math.log1p(-1) ).to.be.NaN;
		});
	});
});


