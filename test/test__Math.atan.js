var expect = require('chai').expect;

// Math.atan()

// The Math.atan() function returns the arctangent (in radians) of a number, that is

// Math.atan(x)=arctan(x)= the unique y∊[- π2 ; π2 ]such thattan(y)=x

// The Math.atan() method returns a numeric value between - π/2  and  π/2  radians.

// Because atan() is a static method of Math, you always use it as Math.atan(), rather than as a method of
// a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#atan', function(){
		it('returns the arctangent (in radians) of a number', function(){
			expect( Math.atan(1) ).to.equal( 0.7853981633974483 );
			expect( Math.atan(0) ).to.equal( 0 );
			expect( Math.atan(0.5) ).to.equal( 0.46364760900080615 );
		});

		it('returns NaN for values greater than 1 and less than -1 Math.atan()', function(){
			expect( Math.atan(1.001) ).to.be.NaN;
			expect( Math.atan(-1.1) ).to.be.NaN;
			expect( Math.atan(-2) ).to.be.NaN;
		});
	});
});


