var expect = require('chai').expect;

// dateObj.setSeconds(secondsValue[, msValue])
// The setSeconds() method sets the seconds for a specified date according to local time.

// Parameters

// secondsValue
// An integer between 0 and 59, representing the seconds.

// msValue
// Optional. A number between 0 and 999, representing the milliseconds.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setSeconds', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				// returns local timestamp, not UTC
				expect( theBigDay.setSeconds(80) ).to.equal( theBigDay.getTime() );
			});

			it('updates the date object\'s minutes and optional seconds, milliseconds', function(){
				theBigDay.setSeconds(8);
				expect( theBigDay.getSeconds() ).to.equal( 8 );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeDate = new Date(1999, 0, 1);
				overRangeDate.setSeconds( 60, 1005 );
				expect( overRangeDate.getMinutes() ).to.equal( 1 );
				expect( overRangeDate.getSeconds() ).to.equal( 1 );
				expect( overRangeDate.getMilliseconds() ).to.equal( 5 );
			});
		});
	});
});


