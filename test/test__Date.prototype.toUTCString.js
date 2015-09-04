var expect = require('chai').expect;

// Syntax
// dateObj.toUTCString()

// The toUTCString() method converts a date to a string, using the UTC time zone.

// Description
// The value returned by toUTCString() is a human readable string in the UTC time zone.
// The format of the return value may vary according to the platform. The most common return
// value is a RFC-1123 formatted date stamp, which is a slightly updated version of RFC-822
// date stamps.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toUTCString', function(){
			var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
			it('converts a date to a string, using the UTC time zone', function(){
				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.toUTCString() ).to.match(  /[A-Za-z]{3},\s\d\d\s[A-Za-z]{3}\s\d{4}\s\d\d\:\d\d\:\d\d\s[A-Za-z]{3}/ );
				// expect( epoch.toString() ).to.equal( 'Mon, 03 Jul 2006 21:44:38 GMT' );
			});
		});
	});
});
