var expect = require('chai').expect;

// Math.round(x)
// The Math.round() function returns the value of a number rounded to the nearest integer.


// Because round is a static property of Math, you always use it as Math.round,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#round', function(){
		it('returns the value of a number rounded to the nearest integer', function(){
			
		});

		it('the argument is rounded to the next higher integer, if the fractional portion of number is 0.5 or greater', function(){
			expect( Math.round(20.5) ).to.equal( 21 );
			expect( Math.round(-20.5) ).to.equal( -20 );
		});

		it('the argument is rounded to the next lower integer, if the fractional portion of number is less than 0.5', function(){
			expect( Math.round(20.49) ).to.equal( 20 );
			expect( Math.round(-20.51) ).to.equal( -21 );
		});

		describe('use:', function(){
			it('decimal rounding', function(){
				// Closure
				(function() {
				  /**
				   * Decimal adjustment of a number.
				   *
				   * @param {String}  type  The type of adjustment.
				   * @param {Number}  value The number.
				   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
				   * @returns {Number} The adjusted value.
				   */
				  function decimalAdjust(type, value, exp) {
				    // If the exp is undefined or zero...
				    if (typeof exp === 'undefined' || +exp === 0) {
				      return Math[type](value);
				    }
				    value = +value;
				    exp = +exp;
				    // If the value is not a number or the exp is not an integer...
				    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
				      return NaN;
				    }
				    // Shift
				    value = value.toString().split('e');
				    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
				    // Shift back
				    value = value.toString().split('e');
				    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
				  }

				  // Decimal round
				  if (!Math.round10) {
				    Math.round10 = function(value, exp) {
				      return decimalAdjust('round', value, exp);
				    };
				  }
				  // Decimal floor
				  if (!Math.floor10) {
				    Math.floor10 = function(value, exp) {
				      return decimalAdjust('floor', value, exp);
				    };
				  }
				  // Decimal ceil
				  if (!Math.ceil10) {
				    Math.ceil10 = function(value, exp) {
				      return decimalAdjust('ceil', value, exp);
				    };
				  }
				})();

				// Round
				expect( Math.round10(55.55, -1) ).to.equal( 55.6 );
				expect( Math.round10(55.549, -1) ).to.equal( 55.5 );
				expect( Math.round10(55, 1) ).to.equal( 60 );
				expect( Math.round10(54.9, 1) ).to.equal( 50 );
				expect( Math.round10(-55.55, -1) ).to.equal( -55.5 );
				expect( Math.round10(-55.551, -1) ).to.equal( -55.6 );
				expect( Math.round10(-55, 1) ).to.equal( -50 );
				expect( Math.round10(-55.1, 1) ).to.equal( -60 );
				expect( Math.round10(1.005, -2) ).to.equal( 1.01 ); //-- compare this with Math.round(1.005*100)/100 above
				// Floor
				expect( Math.floor10(55.59, -1) ).to.equal( 55.5 );
				expect( Math.floor10(59, 1) ).to.equal( 50 );
				expect( Math.floor10(-55.51, -1) ).to.equal( -55.6 );
				expect( Math.floor10(-51, 1) ).to.equal( -60 );
				// Ceil
				expect( Math.ceil10(55.51, -1) ).to.equal( 55.6 );
				expect( Math.ceil10(51, 1) ).to.equal( 60 );
				expect( Math.ceil10(-55.59, -1) ).to.equal( -55.5 );
				expect( Math.ceil10(-59, 1) ).to.equal( -50 );
			});
		});

		it('rounding error because of inaccurate floating point arithmetics', function(){
			// Returns the value 1 (!) -- it should return 1.01
			// Compare this with Math.round10(1.005, -2) from the example below
			expect( Math.round(1.005*100)/100 ).to.equal( 1 ); //if it were not inaccurate, it would return 1.01
			expect( Math.round10(1.005, -2) ).to.equal( 1.01 );
			expect( Math.round(1.005*100)/100 ).to.not.equal( Math.round10(1.005, -2) );
		});
	});
});


