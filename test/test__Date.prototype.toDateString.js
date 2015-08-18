var expect = require('chai').expect;

// Date.prototype.toDateString()

// The toDateString() method returns the date portion of a Date object
// in human readable form in American English.

// Date instances refer to a specific point in time.
// Calling toString() will return the date formatted in a human readable form in American English.
// In SpiderMonkey, this consists of the date portion (day, month, and year) followed
// by the time portion (hours, minutes, seconds, and time zone).
// Sometimes it is desirable to obtain a string of the date portion;
// such a thing can be accomplished with the toDateString() method.

// The toDateString() method is especially useful because compliant engines implementing ECMA-262 may differ in the string obtained from toString() for Date objects, as the format is implementation-dependent and simple string slicing approaches may not produce consistent results across multiple engines.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toDateString', function(){
			it('method returns the date portion of a Date object in human readable form in American English ie. Wed Dec 31 1969', function(){
				var now = new Date();
				expect( now.toDateString() ).to.be.a( 'string' );

				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.toDateString().split(' ').length ).to.equal( 4 );
			});
		});
	});
});


