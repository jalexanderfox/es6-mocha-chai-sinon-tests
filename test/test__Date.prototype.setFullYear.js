var expect = require('chai').expect;

// dateObj.setFullYear(yearValue[, monthValue[, dayValue]])

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setFullYear', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				expect( theBigDay.setFullYear(1999) ).to.equal( 931320000000 );
			});

			it('uses the values returned from getMonth() and getDate() methods if you do not specify the monthValue and dayValue parameters.', function(){
				expect( theBigDay.getMonth() ).to.equal( 6 );
				expect( theBigDay.getDate() ).to.equal( 7 );
			});

			it('will update other parameters and the date information in the Date object if the parameters are outside their expected ranges', function(){
				var nextYearDate = new Date(1800, 0, 1);
				nextYearDate.setFullYear(1999, 12, 1);
				expect( nextYearDate.getFullYear() ).to.equal( 2000 );
				expect( nextYearDate.getMonth() ).to.equal( 0 );
				expect( nextYearDate.getDate() ).to.equal( 1 );
			});

		});
	});
});


