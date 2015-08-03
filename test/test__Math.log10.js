var expect = require('chai').expect;

// Math.log10(x)
// The Math.log10() function returns the base 10 logarithm of a number, that is

// ∀x>0,Math.log10(x)=log10(x)=the unique y such that 10^y=x


// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.log10');

// Because log10 is a static property of Math, you always use it as Math.log10,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#log10', function(){
		it('returns the base 10 logarithm of a number', function(){
			expect( Math.log10(2) ).to.equal( 0.3010299956639812 );
			expect( Math.log10(1) ).to.equal( 0 );
			expect( Math.log10(0) ).to.equal( -Infinity );
			expect( Math.log10(100000) ).to.equal( 5 );
		});

		it('the return value is always NaN, if the value of x is negative', function(){
			expect( Math.log10(-2) ).to.be.NaN;
			expect( Math.log10(-1) ).to.be.NaN; // out of range
		});
	});
});


