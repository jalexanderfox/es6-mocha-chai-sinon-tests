var expect = require('chai').expect;

// The Number.EPSILON property represents the difference between one
// and the smallest value greater than one that can be represented as a Number.
// The EPSILON property has a value of approximately
// 2.2204460492503130808472633361816E-16, or 2-52.

describe('Number', function() {
	describe('EPSILON', function(){
		it('represents the difference between one and the smallest value greater than one that can be represented as a Number', function(){
			x = 0.2;
			y = 0.3;
			z = 0.1;
			equal = (Math.abs(x - y + z) < Number.EPSILON);
			expect( equal ).to.be.true;
		});
	});
});
