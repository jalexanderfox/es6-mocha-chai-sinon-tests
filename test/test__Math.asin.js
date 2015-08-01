var expect = require('chai').expect;

// Math.asin()

// The Math.asin() function returns the arcsine (in radians) of a number, that is

// ∀x∊[-1;1],Math.asin(x)=arcsin(x)= the unique y∊[- π2 ; π2 ]such thatsin(y)=x



// The Math.asin() method returns a numeric value between - π2  and  π2  radians for x between -1 and 1.
// If the value of x is outside this range, it returns NaN.

// Because asin() is a static method of Math, you always use it as Math.asin(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#asin', function(){
		it('returns the arcsine (in radians) of a number', function(){
			expect( Math.asin(-1) ).to.equal( -1.5707963267948966 ); //(-pi/2)
			expect( Math.asin(0) ).to.equal( 0 );
			expect( Math.asin(0.5) ).to.equal( 0.5235987755982988 );
			expect( Math.asin(1) ).to.equal( 1.5707963267948966 ); //(pi/2)
		});

		it('returns NaN for values greater than 1 and less than -1 Math.asin()', function(){
			expect( Math.asin(1.001) ).to.be.NaN;
			expect( Math.asin(-1.1) ).to.be.NaN;
			expect( Math.asin(-2) ).to.be.NaN;
		});
	});
});


