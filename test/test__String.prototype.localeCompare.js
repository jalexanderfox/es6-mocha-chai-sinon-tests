var expect = require('chai').expect;

//referenceStr.localeCompare(compareString[, locales[, options]])
//The localeCompare() method returns a number indicating whether a reference string comes before or after
//or is the same as the given string in sort order.
describe('String', function() {
	describe('#prototype', function(){
		describe('#localeCompare', function(){
			it('returns a negative one (-1) when the referenceStr is before the compareString (string parameter)', function(){
				expect( 'a'.localeCompare('c') ).to.equal( -1 );
			});

			it('returns a positive one (1) when alphabetically the referenceStr comes after the compareString', function(){
				expect( 'check'.localeCompare('against') ).to.equal( 1 );
			});

			it('returns zero (0) when the referenceStr is equalivalent to the compareString', function(){
				expect( 'a'.localeCompare('a') ).to.equal( 0 );
			});

			describe('check support for extended arguments', function(){
				it('should support extended arguments'), function(){
					function localeCompareSupportsLocales() {
					  try {
					  	'foo'.localeCompare('bar', 'i');
					  } catch (e) {
					  	return e.name === 'RangeError';
					  }
					  return false;
					}

					expect(localeCompareSupportsLocales()).to.be.true;
				}
			});

			it('example: using locales', function(){
				expect( 'ä'.localeCompare('z', 'de') ).to.equal( -1 ); // a negative value: in German, ä sorts with a
				expect( 'ä'.localeCompare('z', 'sv') ).to.equal( -1 ); // a positive value: in Swedish, ä sorts after z
			});

			it('example: using options', function(){
				// in German, ä has a as the base letter
				expect( 'ä'.localeCompare('a', 'de', { sensitivity: 'base' }) ).to.equal( 0 ); // 0

				// in Swedish, ä and a are separate base letters
				expect( 'ä'.localeCompare('a', 'sv', { sensitivity: 'base' }) ).to.equal( 0 ); // a positive value
			});
		});
	});
});

