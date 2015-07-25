var expect = require('chai').expect;

// The Number.MAX_VALUE
// The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.

// The MAX_VALUE property has a value of approximately 1.79E+308.
// Values larger than MAX_VALUE are represented as "Infinity".

// Because MAX_VALUE is a static property of Number, you always use it as Number.MAX_VALUE,
// rather than as a property of a Number object you created.

describe('Number', function() {
	describe('#MAX_VALUE', function(){
		it('has a value of approximately 1.79E+308, and to be exact 1.7976931348623157e+308', function(){
			expect( Number.MAX_VALUE ).to.equal( Number('1.7976931348623157e+308') );
		});

		it('Values larger than MAX_VALUE are represented as "Infinity"', function(){
			expect( Number.MAX_VALUE ).to.be.below( Infinity );
		});
	});
});
