var expect = require('chai').expect;

// Math.log2(x)
// The Math.log2() function returns the base 2 logarithm of a number, that is

// ∀x>0,Math.log2(x)=log2(x)=the uniqueysuch that2y=x


// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.log2');

// Because log2 is a static property of Math, you always use it as Math.log2,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#log2', function(){
		it('returns the base 2 logarithm of a number', function(){
			expect( Math.log2(3) ).to.equal( 1.5849625007211563 );
			expect( Math.log2(2) ).to.equal( 1 );
			expect( Math.log2(1) ).to.equal( 0 );
			expect( Math.log2(0) ).to.equal( -Infinity );
		});

		it('the return value is always NaN, if the value of x is negative', function(){
			expect( Math.log2(-2) ).to.be.NaN;
			expect( Math.log2(-1) ).to.be.NaN;
		});
	});
});


