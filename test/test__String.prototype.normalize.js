var expect = require('chai').expect;

//str.normalize([form])
//The normalize() method returns the Unicode Normalization Form of a given string
//(if the value isn't a string, it will be converted to one first).
describe('String', function() {
	describe('#prototype', function(){
		describe('#normalize', function(){
			it('returns the specified Unicode Normalization Form of the string. It does not affect the value of the string itself.', function(){

				// Initial string

				// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
				// U+0323: COMBINING DOT BELOW
				var str = '\u1E9B\u0323';


				// Canonically-composed form (NFC)

				// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
				// U+0323: COMBINING DOT BELOW
				expect( str.normalize('NFC') ).to.equal( '\u1E9B\u0323' );
				expect( str.normalize() ).to.equal( '\u1E9B\u0323' );
				expect( str.normalize() ).to.equal( str.normalize('NFC') );

				// Canonically-decomposed form (NFD)

				// U+017F: LATIN SMALL LETTER LONG S
				// U+0323: COMBINING DOT BELOW
				// U+0307: COMBINING DOT ABOVE
				expect( str.normalize('NFD') ).to.equal( '\u017F\u0323\u0307' );


				// Compatibly-composed (NFKC)

				// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
				expect( str.normalize('NFKC') ).to.equal( '\u1E69' );


				// Compatibly-decomposed (NFKD)

				// U+0073: LATIN SMALL LETTER S
				// U+0323: COMBINING DOT BELOW
				// U+0307: COMBINING DOT ABOVE
				expect( str.normalize('NFKD') ).to.equal( '\u0073\u0323\u0307' );

			});
		});
	});
});

