var expect = require('chai').expect;

// Date.prototype.getTimezoneOffset()

// The getTimezoneOffset() method returns the time-zone offset from UTC, in minutes, for the current locale.
// return range is -( 60 * 12) - ( 60 * 12 ) or simplified [ -720, 720 ]

// The time-zone offset is the difference, in minutes, between UTC and local time.
// Note that this means that the offset is positive if the local timezone is behind UTC and
// negative if it is ahead. For example, if your time zone is UTC+10 (Australian Eastern Standard Time),
// -600 will be returned. Daylight saving time prevents this value from being a constant even for a given locale.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getTimezoneOffset', function(){
			it('returns the time-zone offset from UTC, in minutes, for the current locale.', function(){
				expect( (new Date()).getTimezoneOffset() ).to.be.within( -720, 720 );
			});
		});
	});
});


