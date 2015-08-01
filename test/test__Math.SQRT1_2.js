var expect = require('chai').expect;

// Math.SQRT1_2

// The Math.SQRT1_2 property represents the square root of 1/2 which is approximately 0.707:


// Because SQRT1_2 is a static property of Math, you always use it as Math.SQRT1_2,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#SQRT1_2', function(){
		it('property represents the square root of 1/2 which is approximately 0.707', function(){
			expect( Math.SQRT1_2 ).to.equal( 0.7071067811865476 );
		});
	});
});


