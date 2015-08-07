var expect = require('chai').expect;

// Direct call:
// Date.parse(dateString)

// Implicit call:
// new Date(dateString)

// Description
// The parse() method takes a date string (such as "Dec 25, 1995") and
// returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// This function is useful for setting date values based on string values,
// for example in conjunction with the setTime() method and the Date object.

// Given a string representing a time, parse() returns the time value.
// It accepts the RFC2822 / IETF date syntax (RFC2822 Section 3.3), e.g.
// "Mon, 25 Dec 1995 13:30:00 GMT". It understands the continental US time zone abbreviations,
// but for general use, use a time zone offset, for example, "Mon, 25 Dec 1995 13:30:00 +0430"
// (4 hours, 30 minutes east of the Greenwich meridian). If a time zone is not specified and
// the string is in an ISO format recognized by ES5, UTC is assumed. GMT and UTC are considered
// equivalent. The local time zone is used to interpret arguments in RFC2822 Section 3.3 format
// (or any format not recognized as ISO 8601 in ES5) that do not contain time zone information.

// ECMAScript 5 ISO-8601 format support

// The date time string may be in ISO 8601 format. For example, "2011-10-10" (just date) or
// "2011-10-10T14:48:00" (date and time) can be passed and parsed. The UTC time zone is used
// to interpret arguments in ISO 8601 format that do not contain time zone information (note
// that ECMAScript ed 6 draft specifies that date time strings without a time zone are to be
// treated as local, not UTC).

// While time zone specifiers are used during date string parsing to interpret the argument,
// the value returned is always the number of milliseconds between January 1, 1970 00:00:00 UTC
// and the point in time represented by the argument.

// Because parse() is a static method of Date, it is called as Date.parse() rather than as a
// method of a Date instance.

// Differences in assumed time zone

// Given a date string of "March 7, 2014", parse() assumes a local time zone, but given an
// ISO format such as "2014-03-07" it will assume a time zone of UTC. Therefore Date objects
// produced using those strings will represent different moments in time unless the system is
// set with a local time zone of UTC. This means that two date strings that appear equivalent
// may result in two different values depending on the format of the string that is being converted
// (this behavior is changed in ECMAScript ed 6 so that both will be treated as local).

// Fall-back to implementation-specific date formats

// The ECMAScript specification states: If the String does not conform to the standard format
// the function may fall back to any implementation–specific heuristics or implementation–specific
// parsing algorithm. Unrecognizable strings or dates containing illegal element values in ISO formatted
// strings shall cause Date.parse() to return NaN.

// However, invalid values in date strings not recognized as ISO format as defined by ES5 may or may not
// result in NaN, depending on the browser and values provided, e.g.:

// Because parse() is a static method of Date, you always use it as Date.parse().


describe('Date', function() {
	describe('#parse', function(){
		it('takes a date string (such as "Dec 25, 1995") and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.', function(){
			expect( Date.parse('Thu, 01 Jan 1970 00:00:00 GMT') ).to.equal( 0 );
		});

		it('uses the specified time zone in the string', function(){
			expect( Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400') ).to.equal( 14400000 );
		})

		it('uses local time if a time zone is not specified in the string', function(){
			var local_date = new Date(Date.parse('Aug 9, 1995'));
			expect( getUTCTime(local_date) ).to.equal( Date.parse('Wed, 09 Aug 1995 00:00:00 GMT') );

			var local_date = new Date(Date.parse('Wed, 09 Aug 1995 00:00:00'));
			expect( getUTCTime(local_date) ).to.equal( Date.parse('Wed, 09 Aug 1995 00:00:00 GMT') );
		});

		describe('date time string may be RFC2822 / IETF date syntax (RFC2822 Section 3.3), e.g. "Mon, 25 Dec 1995 13:30:00 GMT"', function(){
			it('RFC2822 / IETF date syntax string is parsed', function(){
				expect( Date.parse('Wed, 09 Aug 1995 00:00:00 GMT') ).to.equal( 807926400000 );
			});
		});

		describe('date time string may be in ISO 8601 format', function(){
			it('', function(){
				expect( Date.parse('1970-01-01T00:00:00+00:00') ).to.equal( 0 );
			});

			it('parses differntly between ES5 and ES6, if time zone is missing ES5 uses UTC, ES6 uses local', function(){

			});
		});


	});
});


//no worries, this gets hoisted
function getUTCTime(local_date){
	var local_date_time = local_date.getTime();
	var mintues_as_milliseconds = 60000;
	var local_time_offset_in_minutes = local_date.getTimezoneOffset();
	var local_time_offset_in_milliseconds = local_time_offset_in_minutes * mintues_as_milliseconds;
	var local_date_time_less_offset = local_date_time - local_time_offset_in_milliseconds;

	return local_date_time_less_offset;
}
