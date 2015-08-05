var expect = require('chai').expect;

// Math.sinh(x)
// The Math.sinh() function returns the hyperbolic sinhe of a number, that can be expressed usinhg the constant e:

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.sinh');

// Because sinh is a static property of Math, you always use it as Math.sinh,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#sinh', function(){
		it('returns the hyperbolic sinhe of a number, that can be expressed usinhg the constant e', function(){
			expect( Math.sinh(0) ).to.equal( 0 );
			expect( Math.sinh(1) ).to.equal( 1.1752011936438014 );
			expect( Math.sinh(Math.PI / 2) ).to.equal( 2.301298902307295 );
		});
	});
});


