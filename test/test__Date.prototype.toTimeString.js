var expect = require('chai').expect;

// Syntax
// dateObj.toTimeString()

// The toTimeString() method returns the time portion of a Date object in human readable form in American English.

// Description
// Date instances refer to a specific point in time. Calling toString() will return the date
// formatted in a human readable form in American English. In SpiderMonkey, this consists
// of the date portion (day, month, and year) followed by the time portion (hours, minutes,
// seconds, and time zone). Sometimes it is desirable to obtain a string of the time portion;
// such a thing can be accomplished with the toTimeString() method.

// The toTimeString() method is especially useful because compliant engines implementing ECMA-262
// may differ in the string obtained from toString() for Date objects, as the format is
// implementation-dependent; simple string slicing approaches may not produce consistent results
// across multiple engines.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toTimeString', function(){
			var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
			it('returns the time portion of a Date object in human readable form in American English', function(){
				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.toTimeString() ).to.match( /\d\d\:\d\d\:\d\d\s[A-Za-z]{3}[\+\-]\d{4}\s[\(][A-Za-z]{3}[)]/ );
				// expect( epoch.toTimeString() ).to.equal( '01:00:00 GMT+0100 (CET)' );
			});
		});
	});
});


