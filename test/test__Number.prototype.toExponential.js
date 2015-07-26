var expect = require('chai').expect;

// numObj.toExponential([fractionDigits])
// The toExponential() method returns a string representing the Number object in exponential notation

// A string representing a Number object in exponential notation with one digit before the decimal point,
// rounded to fractionDigits digits after the decimal point.

describe('Number', function() {
	describe('#prototype', function(){
		describe('#toExponential', function(){
			it('returns a string representing the Number object in exponential notation', function(){
				var numObj = 77.1234;
				expect( numObj.toExponential() ).to.equal( '7.71234e+1' );
				expect( numObj.toExponential(4) ).to.equal( '7.7123e+1' );
				expect( numObj.toExponential(2) ).to.equal( '7.71e+1' );
				expect( 77.1234.toExponential() ).to.equal( '7.71234e+1' );
			});

			it('if you use the toExponential() method for a numeric literal and the numeric literal has no exponent and no decimal point, leave a space before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.', function(){
				expect( 77 .toExponential() ).to.equal( '7.7e+1' );
			});

			it('if the fractionDigits argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.', function(){
				expect( Math.PI.toExponential() ).to.equal( '3.141592653589793e+0' );
			});

			it('if a number has more digits than requested by the fractionDigits parameter, the number is rounded to the nearest number represented by fractionDigits digits.', function(){
			//  See the discussion of rounding in the description of the toFixed() method, which also applies to toExponential().
				expect( Math.PI.toExponential(3) ).to.equal( '3.142e+0' );
			});
		});
	});
});

