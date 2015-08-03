var expect = require('chai').expect;

// Math.log(x)
// The Math.log() function returns the natural logarithm (base e) of a number, that is

// ∀x>0,Math.log(x)=ln(x)=the unique y such that e^y=x


// Because log is a static property of Math, you always use it as Math.log,
// rather than as a property of a Math object you created (Math is not a constructor).

describe('Math', function(){
	describe('#log', function(){
		it('returns the natural logarithm (base e) of a number.', function(){
			expect( Math.log(0) ).to.equal( -Infinity );
			expect( Math.log(1) ).to.equal( 0 )
			expect( Math.log(10) ).to.equal( 2.302585092994046 )
		});

		it('the return value is always NaN, if the value of x is negative', function(){
			expect( Math.log(-1) ).to.be.NaN; // out of range
		});

		describe('use:', function(){
			it('different base', function(){
				function getBaseLog(base, x) {
					return Math.log(x) / Math.log(base);
				}

				expect( getBaseLog(10, 1000) ).to.equal( 2.9999999999999996 ); 
				//  it returns 2.9999999999999996 due to floating-point rounding, which is very close to the actual answer of 3.
			});
		});
	});
});


