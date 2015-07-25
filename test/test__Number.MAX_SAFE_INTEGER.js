var expect = require('chai').expect;

// The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).
// The MAX_SAFE_INTEGER constant has a value of 9007199254740991.
// The reasoning behind that number is that JavaScript uses double-precision floating-point format numbers
// as specified in IEEE 754 and can only safely represent numbers between -(253 - 1) and 253 - 1.

// Because MAX_SAFE_INTEGER is a static property of Number, you always use it as Number.MAX_SAFE_INTEGER,
// rather than as a property of a Number object you created.

describe('Number', function() {
	describe('#MAX_SAFE_INTEGER', function(){
		it('has a value of 9007199254740991', function(){
			expect( Number.MAX_SAFE_INTEGER ).to.equal( 9007199254740991 );
			expect( Math.pow(2, 53) - 1 ).to.equal( 9007199254740991 );
		});
	});
});
