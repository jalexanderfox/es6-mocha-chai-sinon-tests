var expect = require('chai').expect;

// Syntax
// dateObj.toString()

// The toString() method returns a string representing the specified Date object.

// Description
// The Date object overrides the toString() method of the Object object; it does not inherit
// Object.prototype.toString(). For Date objects, the toString() method returns a
// string representation of the object.

// The toString() method always returns a string representation of the date in American English.

// JavaScript calls the toString() method automatically when a date is to be
// represented as a text value or when a date is referred to in a string concatenation.

// toString() is a generic method. If this is not a Date instance, it returns "Invalid Date".

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toString', function(){
			var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
			it('method returns a string representing the specified Date object.', function(){
				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.toString() ).to.match( /[A-Za-z]{3}\s[A-Za-z]{3}\s\d\d\s\d{4}\s\d\d\:\d\d\:\d\d\s[A-Za-z]{3}[\+\-]\d{4}\s[\(][A-Za-z]{3}[)]/ );
				// expect( epoch.toString() ).to.equal( 'Thu Jan 01 1970 01:00:00 GMT+0100 (CET)' );
			});
		});
	});
});


