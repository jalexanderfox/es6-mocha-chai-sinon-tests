var expect = require('chai').expect;

// Math.trunc(x)
// The Math.trunc() function returns the integral part of a number by removing any fractional digits.

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.trunc');

// Unlike other three Math methods: Math.floor(), Math.ceil() and Math.round(),
// the way Math.trunc() works is very simple and straightforward, just truncate
// the dot and the digits behind it, no matter whether the argument
// is a positive number or a negative number.

// So, if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().

// Note, the argument passed to this method will be converted to number type implicitly.

// Because trunc is a static property of Math, you always use it as Math.trunc,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#trunc', function(){
		it('returns the integral part of a number by removing any fractional digits', function(){
			expect( Math.trunc(13.37) ).to.equal( 13 );
			expect( Math.trunc(42.84) ).to.equal( 42 );
			expect( Math.trunc(0.123) ).to.equal( 0 );
			expect( Math.trunc(-0.123) ).to.equal(-0 );
			expect( Math.trunc('-1.123') ).to.equal(-1 );
			expect( Math.trunc(NaN) ).to.be.NaN;
			expect( Math.trunc('foo') ).to.be.NaN;
			expect( Math.trunc() ).to.be.NaN;
		});
	});
});


