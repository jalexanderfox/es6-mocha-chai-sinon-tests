var expect = require('chai').expect;

// Math.max([value1[, value2[, ...]]])
// The Math.max() function returns the largest of zero or more numbers.

// Because max is a static property of Math, you always use it as Math.max,
// rather than as a property of a Math object you created (Math is not a constructor).



describe('Math', function(){
	describe('#max', function(){
		it('returns the largest of zero or more numbers', function(){
			expect( Math.max(10, 20) ).to.equal(  20 );
			expect( Math.max(-10, -20) ).to.equal( -10 );
			expect( Math.max(-10, 20) ).to.equal(  20 );
		});

		it('returns -Infinity if no arguments are given', function(){
			expect( Math.max() ).to.equal( Number.NEGATIVE_INFINITY );
		});

		it('returns NaN if at least one of arguments cannot be converted to a number', function(){
			expect( Math.max('notNumber') ).to.be.NaN;
		});

		describe('use:', function(){
			it('getMaxOfArray', function(){
				function getMaxOfArray(numArray) {
				  return Math.max.apply(null, numArray);
				}

				expect( getMaxOfArray([1,2,3]) ).to.equal( 3 );

				// or using spread
				// var arr = [1, 2, 3];
				// var max = Math.max(...arr);
			});
		});
	});
});


