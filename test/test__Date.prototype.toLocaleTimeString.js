var expect = require('chai').expect;

// Syntax
// dateObj.toLocaleTimeString([locales [, options]])

// The toLocaleTimeString() method returns a string with a language sensitive
// representation of the time portion of this date. The new locales and options arguments
// let applications specify the language whose formatting conventions should be used
// and customize the behavior of the function. In older implementations, which ignore
// the locales and options arguments, the locale used and the form of the string returned
// are entirely implementation dependent.

// Parameters

// Check the Browser compatibility section to see which browsers support the locales and options arguments, and Checking for support for locales and options arguments for feature detection.

// locales
// Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page. The following Unicode extension keys are allowed:

// nu
// Numbering system. Possible values include: "arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt".
// ca
// Calendar. Possible values include: "buddhist", "chinese", "coptic", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamicc", "iso8601", "japanese", "persian", "roc".
// options
// Optional. An object with some or all of the following properties:

// localeMatcher
// The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
// timeZone
// The time zone to use. The only value implementations must recognize is "UTC"; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the IANA time zone database, such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York".
// hour12
// Whether to use 12-hour time (as opposed to 24-hour time). Possible values are true and false; the default is locale dependent.
// formatMatcher
// The format matching algorithm to use. Possible values are "basic" and "best fit"; the default is "best fit". See the following paragraphs for information about the use of this property.
// The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:

// weekday, year, month, day, hour, minute, second
// weekday, year, month, day
// year, month, day
// year, month
// month, day
// hour, minute, second
// hour, minute
// Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the formatMatcher property: A fully specified "basic" algorithm and an implementation dependent "best fit" algorithm.

// weekday
// The representation of the weekday. Possible values are "narrow", "short", "long".
// era
// The representation of the era. Possible values are "narrow", "short", "long".
// year
// The representation of the year. Possible values are "numeric", "2-digit".
// month
// The representation of the month. Possible values are "numeric", "2-digit", "narrow", "short", "long".
// day
// The representation of the day. Possible values are "numeric", "2-digit".
// hour
// The representation of the hour. Possible values are "numeric", "2-digit".
// minute
// The representation of the minute. Possible values are "numeric", "2-digit".
// second
// The representation of the second. Possible values are "numeric", "2-digit".
// timeZoneName
// The representation of the time zone name. Possible values are "short", "long".
// The default value for each date-time component property is undefined, but if the hour, minute, second properties are all undefined, then hour, minute, and second are assumed to be "numeric".

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toLocaleTimeString', function(){
			it.skip('method returns a string with a language sensitive representation of the time portion of this date', function(){
				var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

				// US English uses 12-hour time with AM/PM
				expect( date.toLocaleTimeString('en-US') ).to.equal( "7:00:00 PM" );

				// British English uses 24-hour time without AM/PM
				expect( date.toLocaleTimeString('en-GB') ).to.equal( "03:00:00" );

				// Korean uses 12-hour time with AM/PM
				expect( date.toLocaleTimeString('ko-KR') ).to.equal( "오후 12:00:00" );

				// Arabic in most Arabic speaking countries uses real Arabic digits
				expect( date.toLocaleTimeString('ar-EG') ).to.equal( "٧:٠٠:٠٠ م" );

				// when requesting a language that may not be supported, such as
				// Balinese, include a fallback language, in this case Indonesian
				expect( date.toLocaleTimeString(['ban', 'id']) ).to.equal( "11.00.00" );

			});

			it.skip('accepts options for formatting', function(){
				var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

				// an application may want to use UTC and make that visible
				var options = { timeZone: 'UTC', timeZoneName: 'short' };
				expect( date.toLocaleTimeString('en-US', options) ).to.equal( "3:00:00 AM GMT" );

				// sometimes even the US needs 24-hour time
				expect( date.toLocaleTimeString('en-US', { hour12: false }) ).to.equal( "19:00:00" );
			});
		});
	});
});


