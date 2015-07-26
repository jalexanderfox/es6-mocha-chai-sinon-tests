var expect = require('chai').expect;

// numObj.toFixed([digits])
// The toFixed() method formats a number using fixed-point notation.

// Parameters

// digits
// Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20,
// inclusive, and implementations may optionally support a larger range of values.
// If this argument is omitted, it is treated as 0.

// A string representing a Number object in exponential notation with one digit before the decimal point,
// rounded to fractionDigits digits after the decimal point.

describe('Number', function() {
	describe('#prototype', function(){
		describe('#toFixed', function(){
			it('returns a string, formats a number using fixed-point notation.', function(){
				var numObj = 12345.6789;
				expect( (1.23e+20).toFixed(2) ).to.equal( '123000000000000000000.00' );
				expect( (1.23e-10).toFixed(2) ).to.equal( '0.00' );
				expect( 2.34.toFixed(1) ).to.equal( '2.3' );
			});

			it('pads the fraction part with zeros if necessary so that it has the specified length', function(){
				expect( (12345.6789).toFixed(6) ).to.equal( '12345.678900'); // note added zeros
			});

			it('parameter defaults to zero if omitted', function(){
				expect( (12345.0).toFixed() ).to.equal( '12345' );
			});

			it('rounds numbers if the digits parameter is less than the numbers decimals, > 4 up and < 5 down', function(){
				expect( (12345.6789).toFixed(1) ).to.equal( '12345.7' ); // note rounding
				expect( (12345.6789).toFixed() ).to.equal( '12346' ); //note rounding, no fractional part
				expect( (12345.4).toFixed() ).to.equal( '12345' ); //note rounding, no fractional part
			});

			it('returns a string in exponential notation if the number is greater than 1e+21, this method simply calls Number.prototype.toString()', function(){
				expect( (1e+22).toFixed() ).to.equal( '1e+22' );
			});

			it('returns a number if numObj is a negative number literal, due to operator precedence', function(){
				expect( -2.34.toFixed(1) ).to.equal( -2.3  ); //(...)
				expect( (-2.34).toFixed(1) ).to.equal( '-2.3' ); // (...unless you use parentheses)
			});
		});
	});
});

