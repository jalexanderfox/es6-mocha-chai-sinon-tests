var expect = require('chai').expect;

// Math.E
// The Math.E property represents the base of natural logarithms, e, approximately 2.718.

// Because E is a static property of Math, you always use it as Math.E,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#E', function(){
		it('property represents the base of natural logarithms, e, approximately 2.718', function(){
			expect( Math.E ).to.equal( 2.718281828459045 );
		});
	});
});


