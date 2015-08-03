var expect = require('chai').expect;

// Math.hypot(x)
// The Math.hypot() function returns the square root of the sum of squares of its arguments, that is

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.hypot');

// Because hypot is a static property of Math, you always use it as Math.hypot,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#hypot', function(){
		it('returns the square root of the sum of squares of its arguments', function(){
			expect( Math.hypot(3, 4) ).to.equal( 5 );
			expect( Math.hypot(3, 4, 5) ).to.equal( 7.0710678118654755 );
			expect( Math.hypot() ).to.equal( 0 );
			expect( Math.hypot(3, 4, '5') ).to.equal( 7.0710678118654755); //, +'5' => 5
		});

		it('returns 0 if no arguments given', function(){
			expect( Math.hypot(0) ).to.equal( 0 );
		});

		it('returns NaN if at least one of arguments cannot be converted to a number', function(){
			expect( Math.hypot(NaN) ).to.be.NaN;
			expect( Math.hypot(3, 4, 'foo') ).to.be.NaN; //, +'foo' => NaN
		});

		it('with one argument, returns the same as Math.abs', function(){
			expect( Math.hypot(-3) ).to.equal( 3 ); //, the same as Math.abs(-3)
			expect( Math.hypot(-102) ).to.equal( 102 ); //, the same as Math.abs(-102)
		});
	});
});


