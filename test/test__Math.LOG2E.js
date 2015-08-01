var expect = require('chai').expect;

// Math.LOG2E

// The Math.LOG2E property represents the base 2 logarithm of e, approximately 1.442:

// Math.LOG2E=log2(e)≈1.442

// Because LOG2E is a static property of Math, you always use it as Math.LOG2E,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#LOG2E', function(){
		it('property represents the base 2 logarithm of e, approximately 1.442', function(){
			expect( Math.LOG2E ).to.equal( 1.4426950408889634 );
		});
	});
});

