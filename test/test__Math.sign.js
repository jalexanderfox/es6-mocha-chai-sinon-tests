var expect = require('chai').expect;

// Math.sign(x)
// The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.

// Because sign is a static property of Math, you always use it as Math.sign,
// rather than as a property of a Math object you created (Math is not a constructor).

// This function has 5 kinds of return values, 1, -1, 0, -0, NaN,
// which represent "positive number", "negative number", "positive zero", "negative zero" and NaN respectively.

// The argument passed to this function will be converted to x type implicitly.

describe('Math', function(){
	describe('#sign', function(){
		it('returns the sign of a number, indicating whether the number is positive, negative, zero, negative zero or NaN.', function(){
		});

		it('argument passed to this function will be converted to x type implicitly', function(){
			expect( Math.sign('3') ).to.equal( 1 );
			expect( Math.sign('') ).to.equal( -0 );
			expect( Math.sign([]) ).to.equal( -0 );
			expect( Math.sign('-1') ).to.equal( -1 );
			expect( Math.sign({}) ).to.be.NaN;
		});

		it('returns 1 for "positive number', function(){
			expect( Math.sign(5) ).to.equal( 1 );
		});

		it('returns -1 for "negative number', function(){
			expect( Math.sign(-5) ).to.equal( -1 );
		});

		it('returns 0 for "positive zero', function(){
			expect( Math.sign(0) ).to.equal( 0 );
		});

		it('returns -0 for "negative zero', function(){
			expect( Math.sign(-0) ).to.equal( -0 );
		});

		it('returns NaN for NaN', function(){
			expect( Math.sign("notAnumber") ).to.be.NaN;
		});
	});
});


