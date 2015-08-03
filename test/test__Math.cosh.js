var expect = require('chai').expect;

// Math.cosh(x)
// The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:

// Polyfill
require('../polyfills/polyfills').getPolyfill('Math.cosh');

// Because cosh is a static property of Math, you always use it as Math.cosh,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#cosh', function(){
		it('returns the hyperbolic cosine of a number, that can be expressed using the constant e', function(){
			expect( Math.cosh(0) ).to.equal( 1 );
			expect( Math.cosh(1) ).to.equal( 1.5430806348152437 );
			expect( Math.cosh(-1) ).to.equal( 1.5430806348152437 );
		});
	});
});


