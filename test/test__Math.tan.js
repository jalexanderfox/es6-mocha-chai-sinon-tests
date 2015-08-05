var expect = require('chai').expect;

// Math.tan(x)
// The Math.tan() method returns a numeric value that represents the tangent of the angle.

// Because tan is a static property of Math, you always use it as Math.tan,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#tan', function(){
		it('returns a numeric value that represents the tangent of the angle', function(){
			expect( Math.tan(0) ).to.equal( 0 );
			expect( Math.tan(1) ).to.equal( 1.5574077246549023 );
		});

		describe('Because the Math.tan() function accepts radians, but it is often easier to work with degrees', function(){
			it('the following function accepts a value in degrees, converts it to radians and returns the tangent', function(){
				function getTanDeg(deg) {
				  var rad = deg * Math.PI/180;
				  return Math.tan(rad);
				}

				expect( getTanDeg(45) ).to.equal( 0.9999999999999999 ); //aka... 1
				expect( getTanDeg(90) ).to.equal( 16331239353195370 );
				expect( getTanDeg(10) ).to.equal( 0.17632698070846498 );
				expect( getTanDeg(180) ).to.equal( -1.2246467991473532e-16 ); //aka... 0
			});
		});
	});
});


