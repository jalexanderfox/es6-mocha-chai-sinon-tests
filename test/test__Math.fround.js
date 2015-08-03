var expect = require('chai').expect;

// Math.fround(x)
// The Math.fround() function returns the nearest single precision float representation of a number.


// Because fround is a static property of Math, you always use it as Math.fround,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#fround', function(){
		it('returns the nearest single precision float representation of a number', function(){
			expect( Math.fround(0) ).to.equal( 0 );
			expect( Math.fround(1) ).to.equal( 1 );
			expect( Math.fround(1.337) ).to.equal( 1.3370000123977661 );
			expect( Math.fround(1.5) ).to.equal( 1.5 );
			expect( Math.fround(NaN) ).to.be.NaN;
		});
	});
});


