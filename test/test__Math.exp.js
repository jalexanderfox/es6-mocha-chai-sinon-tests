var expect = require('chai').expect;

// Math.exp(x)
// The Math.exp() function returns ex, where x is the argument, and e is Euler's constant, the base of the natural logarithms.

// Because exp is a static property of Math, you always use it as Math.exp,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#exp', function(){
		it('returns ex, where x is the argument, and e is Euler\'s constant, the base of the natural logarithms.', function(){
			expect( Math.exp(-1) ).to.equal( 0.3678794411714424 );
			expect( Math.exp(0) ).to.equal( 1 );
			expect( Math.exp(1) ).to.equal( 2.718281828459045 );
		});
	});
});


