var expect = require('chai').expect;

// Math.cbrt()

// The Math.cbrt() function returns the cube root of a number


// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.cbrt');

// Because cbrt() is a static method of Math, you always use it as Math.cbrt(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#cbrt', function(){
		it('returns the cube root of a number', function(){
			expect( Math.cbrt(-1) ).to.equal( -1 );
			expect( Math.cbrt(0) ).to.equal( 0 );
			expect( Math.cbrt(1) ).to.equal( 1 );
			expect( Math.cbrt(2) ).to.equal( 1.259921049894873 );
			expect( Math.cbrt(8) ).to.equal( 2 );
			expect( Math.cbrt(27) ).to.equal( 3 );
		});
	});
});


