var expect = require('chai').expect;

// dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])

// Parameters

// hoursValue
// An integer between 0 and 23, representing the hour.

// minutesValue
// Optional. An integer between 0 and 59, representing the minutes.

// secondsValue
// Optional. An integer between 0 and 59, representing the seconds.
// If you specify the secondsValue parameter, you must also specify the minutesValue.

// msValue
// Optional. A number between 0 and 999, representing the milliseconds.
// If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

// If a parameter you specify is outside of the expected range, setHours() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setHours', function(){
			var theBigDay = new Date(1962, 6, 7); // 1962-07-07
			it.skip('returns a new timestamp value for the current object.', function(){
				// the timestamp is local time, not UTC
				expect( theBigDay.setHours(10) ).to.equal( -236253600000 );
			});

			it('The values returned from the getMinutes(), getSeconds(), and getMilliseconds() methods are used if the minutesValue, secondsValue, and msValue parameters are not specified.', function(){
				var hoursDate = new Date(1999, 0, 1, 0, 0, 0);
				hoursDate.setHours(2);
				expect( hoursDate.getHours() ).to.equal( 2 );
			});

			it('attempts to update the date information in the Date object even if a parameter is out of its expected range', function(){
				var overRangeHours = new Date(1999, 0, 1);
				overRangeHours.setHours( 25 );
				expect( overRangeHours.getHours() ).to.equal( 1 );
				expect( overRangeHours.getDate() ).to.equal( 2 );
			});
		});
	});
});


