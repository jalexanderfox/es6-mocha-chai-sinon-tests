var expect = require('chai').expect;

// Math.acos()

// The Math.acos() function returns the arccosine (in radians) of a number, that is

// ∀x∊[-1;1],Math.acos(x)=arccos(x)= the unique y∊[0;π]such thatcos(y)=x

// The Math.acos() method returns a numeric value between 0 and π radians for x between -1 and 1.
// If the value of x is outside this range, it returns NaN.

// Because acos() is a static method of Math, you always use it as Math.acos(), rather than as a method
// of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#acos', function(){
		it('returns the arccosine (in radians) of a number', function(){
			expect( Math.acos(-1) ).to.equal( 3.141592653589793 );
			expect( Math.acos(0) ).to.equal( 1.5707963267948966 );
			expect( Math.acos(0.5) ).to.equal( 1.0471975511965976 );
			expect( Math.acos(1) ).to.equal( 0 );
		});

		it('for values less than -1 or greater than 1, Math.acos() returns NaN.', function(){
			expect( Math.acos(2) ).to.be.NaN;
			expect( Math.acos(1.1) ).to.be.NaN;
			expect( Math.acos(-1.1) ).to.be.NaN;
			expect( Math.acos(-2) ).to.be.NaN;
		});
	});
});


