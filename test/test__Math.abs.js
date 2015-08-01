var expect = require('chai').expect;

// Math.abs()

// The Math.abs() function returns the absolute value of a number, that is

// Math.abs(x)=|x|={ x	ifx>0	0	ifx=0	-x	ifx<0 

// Because abs() is a static method of Math, you always use it as Math.abs(),
// rather than as a method of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#abs', function(){
		it('function returns the absolute value of a number', function(){
			expect( Math.abs( -1 ) ).to.equal( 1 );
		});

		it('converts string numbers and arrays with one member to a number', function(){
			expect( Math.abs( '-1' ) ).to.equal( 1 );
			expect( Math.abs( [-1] ) ).to.equal( 1 );
		});

		it('returns NaN when passing an object,  non-numeric string ,undefined/empty variable', function(){
			expect( Math.abs('non-numeric') ).to.be.NaN;
			expect( Math.abs(undefined) ).to.be.NaN;
			expect( Math.abs({}) ).to.be.NaN;
			expect( Math.abs({1:1}) ).to.be.NaN;
		});

		it('returns 0 when passing null, an empty string or an empty array', function(){
			expect( Math.abs(null) ).to.equal( 0 );
			expect( Math.abs( '' ) ).to.equal( 0 );
			expect( Math.abs( [] ) ).to.equal( 0 );
		});
	});
});


