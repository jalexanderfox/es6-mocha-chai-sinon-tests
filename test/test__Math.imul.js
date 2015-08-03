var expect = require('chai').expect;

// Math.imul(a, b)
// The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.imul');

// Because imul is a static property of Math, you always use it as Math.imul,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#imul', function(){
		it('returns the result of the C-like 32-bit multiplication of the two parameters.', function(){
			expect( Math.imul(2, 4) ).to.equal( 8 );
			expect( Math.imul(-1, 8) ).to.equal( -8 );
			expect( Math.imul(-2, -2) ).to.equal( 4 );
			expect( Math.imul(0xffffffff, 5) ).to.equal( -5 );
			expect( Math.imul(0xfffffffe, 5) ).to.equal( -10 );
		});
	});
});


