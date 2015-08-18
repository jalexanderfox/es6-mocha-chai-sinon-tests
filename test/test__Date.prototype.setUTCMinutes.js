var expect = require('chai').expect;

// dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
// The setUTCMinutes() method sets the minutes for a specified date according to universal time.

// Parameters

// minutesValue
// An integer between 0 and 59, representing the minutes.

// secondsValue
// Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.

// msValue
// Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setUTCMinutes', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it('returns a new timestamp value for the current object.', function(){
				expect( theBigDay.setUTCMinutes(80) ).to.equal( theBigDay.getTime() );
			});

			it('updates the date object\'s minutes and optional seconds, milliseconds', function(){
				theBigDay.setUTCMinutes(8);
				expect( theBigDay.getUTCMinutes() ).to.equal( 8 );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeDate = new Date(1999, 0, 1);
				overRangeDate.setUTCMinutes( 60, 60, 1005 );
				expect( overRangeDate.getUTCMinutes() ).to.equal( 1 );
				expect( overRangeDate.getUTCSeconds() ).to.equal( 1 );
				expect( overRangeDate.getUTCMilliseconds() ).to.equal( 5 );
			});
		});
	});
});


