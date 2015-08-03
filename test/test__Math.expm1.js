var expect = require('chai').expect;

// Math.expm1(x)
// The Math.expm1() function returns ex - 1, where x is the argument, and e the base of the natural logarithms.

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.expm1');


// Because expm1 is a static property of Math, you always use it as Math.expm1,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#expm1', function(){
		it('returns ex - 1, where x is the argument, and e the base of the natural logarithms', function(){
			expect( Math.expm1(-1) ).to.equal( -0.6321205588285577 );
			expect( Math.expm1(0) ).to.equal( 0 );
			expect( Math.expm1(1) ).to.equal( 1.718281828459045 );
		});
	});
});


