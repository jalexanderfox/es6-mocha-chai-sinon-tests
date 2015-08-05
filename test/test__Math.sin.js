var expect = require('chai').expect;

// Math.sin(x)
// The Math.sin() function returns the sine of a number.

// The Math.sin() method returns a numeric value between -1 and 1, which represents the sine of the angle given in radians.

// Because sin is a static property of Math, you always use it as Math.sin,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#sin', function(){
		it('returns the sine of a number', function(){
			expect( Math.sin(0) ).to.equal( 0 );
			expect( Math.sin(1) ).to.equal( 0.8414709848078965 );
			expect( Math.sin(Math.PI / 2) ).to.equal( 1 );
		});
	});
});


