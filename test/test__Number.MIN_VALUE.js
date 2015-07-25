var expect = require('chai').expect;

// The Number.MIN_VALUE
// The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript.

// The MIN_VALUE property is the number closest to 0,
// not the most negative number, that JavaScript can represent.

// MIN_VALUE has a value of approximately 5e-324. Values smaller than MIN_VALUE ("underflow values") are converted to 0.

describe('Number', function() {
	describe('#MIN_VALUE', function(){
		it('has a value of approximately 5e-324', function(){
			expect( Number.MIN_VALUE ).to.equal( Number('5e-324') );
		});
	});
});

