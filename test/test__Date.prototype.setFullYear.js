var expect = require('chai').expect;

// dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
// The setFullYear() method sets the full year for a specified date according
// to local time. Returns new timestamp.

// Parameters

// yearValue
// An integer specifying the numeric value of the year, for example, 1995.

// monthValue
// Optional. An integer between 0 and 11 representing the months January through December.

// dayValue
// Optional. An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setFullYear', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				// the timestamp returned is local time and not universal
				expect( theBigDay.setFullYear(1999) ).to.equal( theBigDay.getTime() );
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


