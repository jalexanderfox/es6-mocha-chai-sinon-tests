var expect = require('chai').expect;

// dateObj.setUTCMonth(monthValue[, dayValue])
// The setUTCMonth() method sets the month for a specified date according to universal time.

// Parameter

// monthValue
// An integer between 0 and 11, representing the months January through December.

// dayValue
// Optional. An integer from 1 to 31, representing the day of the month.


describe('Date', function(){
	describe('#prototype', function(){
		describe('#setUTCMonth', function(){
			var theBigDay = new Date(1962, 2, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				// returns local timestamp, not UTC
				expect( theBigDay.setUTCMonth(6) ).to.equal( theBigDay.getTime() );
			});

			it('updates the date object\'s month and date', function(){
				theBigDay.setUTCMonth(8);
				expect( theBigDay.getUTCMonth() ).to.equal( 8 );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeDate = new Date(1999, 0, 1);
				overRangeDate.setUTCMonth( 12, 32 );
				expect( overRangeDate.getUTCMonth() ).to.equal( 1 );
				expect( overRangeDate.getUTCDate() ).to.equal( 1 );
			});
		});
	});
});


