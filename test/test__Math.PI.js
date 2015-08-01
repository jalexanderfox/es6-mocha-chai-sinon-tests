var expect = require('chai').expect;

// Math.PI

// The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:

// Math.PI=π≈3.14159

// Because PI is a static property of Math, you always use it as Math.PI,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#PI', function(){
		it('property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159', function(){
			expect( Math.PI ).to.equal( 3.141592653589793 );
		});
	});
});


