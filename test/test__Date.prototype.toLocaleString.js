var expect = require('chai').expect;

// Syntax
// dateObj.toLocaleString([locales [, options]])

// The toLocaleString() method returns a string with a language sensitive
// representation of the date portion of this date. The new locales and
// options arguments let applications specify the language whose formatting conventions
// should be used and allow to customize the behavior of the function.
// In older implementations, which ignore the locales and options arguments,
// the locale used and the form of the string returned are entirely implementation dependent.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toLocaleString', function(){
			var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
			it.skip('returns a string with a language sensitive representation of the date portion of this date', function(){

				// US English uses month-day-year order
				expect( date.toLocaleString('en-US') ).to.equal( "12/19/2012" );

				// British English uses day-month-year order
				expect( date.toLocaleString('en-GB') ).to.equal( "20/12/2012" );

				// Korean uses year-month-day order
				expect( date.toLocaleString('ko-KR') ).to.equal( "2012. 12. 20." );

				// Arabic in most Arabic speaking countries uses real Arabic digits
				expect( date.toLocaleString('ar-EG') ).to.equal( "٢٠‏/١٢‏/٢٠١٢" );

				// for Japanese, applications may want to use the Japanese calendar,
				// where 2012 was the year 24 of the Heisei era
				expect( date.toLocaleString('ja-JP-u-ca-japanese') ).to.equal( "24/12/20" );

				// when requesting a language that may not be supported, such as
				// Balinese, include a fallback language, in this case Indonesian
				expect( date.toLocaleString(['ban', 'id']) ).to.equal( "20/12/2012" );

			});

			it.skip('accepts options for formatting', function(){
				var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

				// request a weekday along with a long date
				var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				expect( date.toLocaleString('de-DE', options) ).to.equal( "Donnerstag, 20. Dezember 2012" );

				// an application may want to use UTC and make that visible
				options.timeZone = 'UTC';
				options.timeZoneName = 'short';
				expect( date.toLocaleString('en-US', options) ).to.equal( "Thursday, December 20, 2012, GMT" );
			});
		});
	});
});


