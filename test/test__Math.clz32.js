var expect = require('chai').expect;

// Math.clz32(x)

// The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.


// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.clz32');

// "clz32" is short for CountLeadingZeroes32.

// This function is particularly useful for systems that compile to JS, like Emscripten.

// Because clz32() is a static method of Math, you always use it as Math.clz32(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#clz32', function(){
		it('returns the number of leading zero bits in the 32-bit binary representation of a number.', function(){
			expect( Math.clz32(1) ).to.equal( 31 );
			expect( Math.clz32(1000) ).to.equal( 22 );

			expect( Math.clz32(3.5) ).to.equal( 30 );
		});

		it('if x is not a number, then it will be converted to a number first, then converted to a 32-bit unsigned integer', function(){
			expect( Math.clz32(true) ).to.equal( 31 );
		});

		it('returns 32 if the converted 32-bit unsigned integer is 0, because all bits are 0', function(){
			expect( Math.clz32(0) ).to.equal( 32 );
			expect( Math.clz32() ).to.equal( 32 );
			clz32Cases = [NaN, Infinity, -Infinity, 0, -0, null, undefined, 'foo', {}, []].filter(
			function(n) {
			  return Math.clz32(n) !== 32
			});
			expect( clz32Cases ).to.eql( [] );
		});
	});
});


