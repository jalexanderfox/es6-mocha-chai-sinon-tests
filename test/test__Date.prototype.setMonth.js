var expect = require('chai').expect;

// dateObj.setMonth(monthValue[, dayValue])
// The setMonth() method sets the month for a specified date according to the currently set year.

// Parameter

// monthValue
// An integer between 0 and 11, representing the months January through December.

// dayValue
// Optional. An integer from 1 to 31, representing the day of the month.


describe('Date', function(){
	describe('#prototype', function(){
		describe('#setMonth', function(){
			var theBigDay = new Date(1962, 2, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				// returns local timestamp, not UTC
				expect( theBigDay.setMonth(6) ).to.equal( theBigDay.getTime() );
			});

			it('updates the date object\'s month and date', function(){
				theBigDay.setMonth(8);
				expect( theBigDay.getMonth() ).to.equal( 8 );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeDate = new Date(1999, 0, 1);
				overRangeDate.setMonth( 12, 32 );
				expect( overRangeDate.getMonth() ).to.equal( 1 );
				expect( overRangeDate.getDate() ).to.equal( 1 );
			});
		});
	});
});


