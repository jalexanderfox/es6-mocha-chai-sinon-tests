var expect = require('chai').expect;

// Math.tanh(x)
// The Math.tanh() function returns the hyperbolic tangent of a number

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.tanh');

// Because tanh is a static property of Math, you always use it as Math.tanh,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#tanh', function(){
		it('returns the hyperbolic tangent of a number', function(){
			expect( Math.tanh(0) ).to.equal( 0 );
			expect( Math.tanh(Number.POSITIVE_INFINITY) ).to.equal( 1 );
			expect( Math.tanh(1) ).to.equal( 0.7615941559557649 );
		});
	});
});


