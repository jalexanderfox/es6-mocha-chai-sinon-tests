var expect = require('chai').expect;

// numObj.toLocaleString([locales [, options]])
// The toLocaleString() method returns a string with a language sensitive representation of this number.

// Performance
// When formatting large numbers of numbers, it is better to create a NumberFormat object and
// use the function provided by its NumberFormat.format property.

describe('Number', function() {
	describe('#prototype', function(){
		describe('#toLocaleString', function(){
			it('returns a string with a language sensitive representation of this number.', function(){
				expect( 3500 .toLocaleString('en-US') ).to.equal( '3,500' );
			});

			it.skip('locales argument is used to specify the locale', function(){
				var number = 123456.789;

				// German uses comma as decimal separator and period for thousands
				expect( number.toLocaleString('de-DE') ).to.equal( '123.456,789' );

				// Arabic in most Arabic speaking countries uses Eastern Arabic digits
				expect( number.toLocaleString('ar-EG') ).to.equal( '١٢٣٤٥٦٫٧٨٩' );

				// India uses thousands/lakh/crore separators
				expect( number.toLocaleString('en-IN') ).to.equal( '1,23,456.789' );

				// the nu extension key requests a numbering system, e.g. Chinese decimal
				expect( number.toLocaleString('zh-Hans-CN-u-nu-hanidec') ).to.equal( '一二三,四五六.七八九' );

				// when requesting a language that may not be supported, such as
				// Balinese, include a fallback language, in this case Indonesian
				expect( number.toLocaleString(['ban', 'id']) ).to.equal( '123.456,789' );
			});

			it.skip('use: options', function(){
				var number = 123456.789;

				// request a currency format
				expect( number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) ).to.equal( '123.456,79 €' );

				// the Japanese yen doesn't use a minor unit
				expect( number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) ).to.equal( '￥123,457' );

				// limit to three significant digits
				expect( number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }) ).to.equal( '1,23,000' );
			});
		});
	});
});

