var expect = require('chai').expect;

// numObj.toPrecision([precision])
// The toPrecision() method returns a string representing the Number object to the specified precision.

// Parameters

// precision
// Optional. An integer specifying the number of significant digits.

describe('Number', function() {
	describe('#prototype', function(){
		describe('#toPrecision', function(){
// A string representing a Number object in fixed-point or exponential notation rounded
// to precision significant digits. See the discussion of rounding in the description of
// the Number.prototype.toFixed() method, which also applies to toPrecision().
			it('returns a string, formats a number using fixed-point notation.', function(){
				var numObj = 5.123456;
				expect( numObj.toPrecision() ).to.equal( '5.123456' );
				expect( (5.123456).toPrecision(5) ).to.equal( '5.1235' );
				expect( (5.123456).toPrecision(2) ).to.equal( '5.1' );
				expect( (5.123456).toPrecision(1) ).to.equal( '5' );

				// note that exponential notation might be returned in some circumstances
				console.log((1234.5).toPrecision(2)); // logs 1.2e+3
			});

			it('if the precision argument is a non-integer value, it is rounded DOWN to the nearest integer (ie. Math.floor())', function(){
				expect( (5.123456).toPrecision(2.2) ).to.equal( '5.1' );
				expect( (5.123456).toPrecision(2.9) ).to.equal( '5.1' );
			});

			it('behaves as Number.prototype.toString(), if the precision argument is omitted', function(){
				 expect( (5.123456).toPrecision() ).to.equal(  (5.123456).toString() );
				 expect( Math.PI.toPrecision() ).to.equal(  Math.PI.toString() );
			});
		});
	});
});

