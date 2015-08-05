var expect = require('chai').expect;

// Math.pow(base, exponent)
// The Math.pow() function returns the base to the exponent power, that is, base ^ exponent.

// Because pow is a static property of Math, you always use it as Math.pow,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#pow', function(){
		it('returns the base to the exponent power.', function(){
			// simple
			expect( Math.pow(7, 2) ).to.equal( 49 )
			expect( Math.pow(7, 3) ).to.equal( 343 ); //
			expect( Math.pow(2, 10) ).to.equal( 1024 ); //
			// fractional exponents
			expect( Math.pow(4, 0.5) ).to.equal( 2 ); // (square root of 4)
			expect( Math.pow(8, 1/3) ).to.equal( 2 ); // (cube root of 8)
			expect( Math.pow(2, 0.5) ).to.equal( 1.4142135623730951 ); // (square root of 2)
			expect( Math.pow(2, 1/3) ).to.equal( 1.2599210498948732 ); // (cube root of 2)
			// signed exponents
			expect( Math.pow(7, -2) ).to.equal( 0.02040816326530612 ); // (1/49)
			expect( Math.pow(8, -1/3) ).to.equal( 0.5 ); //
			// signed bases
			expect( Math.pow(-7, 2) ).to.equal( 49 ); // (squares are positive)
			expect( Math.pow(-7, 3) ).to.equal( -343 ); //(cubes can be negative)
		});

		it('returns NaN, negative numbers don\'t have a real square root', function(){
			expect( Math.pow(-7, 0.5) ).to.be.NaN; // ()
		});

		it('due to "even" and "odd" roots laying close to each other, and limits in the floating number precision, negative bases with fractional exponents always return NaN', function(){
			expect( Math.pow(-7, 1/3) ).to.be.NaN;
		});
	});
});


