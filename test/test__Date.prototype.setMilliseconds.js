var expect = require('chai').expect;

// dateObj.setMilliseconds(millisecondsValue)
// The setMilliseconds() method sets the milliseconds for a specified date according to local time.

// Parameters

// millisecondsValue
// A number between 0 and 999, representing the milliseconds.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setMilliseconds', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				// returns local timestamp, not UTC
				expect( theBigDay.setMilliseconds(80) ).to.equal( theBigDay.getTime() );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeDate = new Date(1999, 0, 1);
				overRangeDate.setMilliseconds( 1005 );
				expect( overRangeDate.getMilliseconds() ).to.equal( 5 );
				expect( overRangeDate.getSeconds() ).to.equal( 1 );
			});
		});
	});
});


