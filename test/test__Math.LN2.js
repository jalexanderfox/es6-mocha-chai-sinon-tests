var expect = require('chai').expect;

// Math.LN2

// The Math.LN2 property represents the natural logarithm of 2, approximately 0.693:
// Math.LN2=ln(2)≈0.693

// Because LN2 is a static property of Math, you always use it as Math.LN2,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#LN2', function(){
		it('property represents the natural logarithm of 2, approximately 0.693', function(){
			expect( Math.LN2 ).to.equal( 0.6931471805599453 );
		});
	});
});


