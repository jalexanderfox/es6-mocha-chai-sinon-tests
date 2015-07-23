var expect = require('chai').expect;

//str.charCodeAt(index)
//The charCodeAt() method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).
describe('String', function() {
	describe('#prototype', function(){
		describe('#charCodeAt', function(){
			it('returns the numeric Unicode value of the character at the given index', function(){
				var alphanum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
				expect( alphanum.charCodeAt(0) ).to.equal( 65 ); //A

				arrCharCodes = Array.prototype.map.call(alphanum, function(str) { return str.charCodeAt(0); });
				expect( arrCharCodes ).to.include.members(
					[ 65, 66, 67, 68, 69,
					70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
					80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
					90, 97, 98, 99, 100, 101, 102, 103, 104,
					105, 106, 107, 108, 109, 110, 111, 112,
					113, 114, 115, 116, 117, 118, 119, 120,
					121, 122, 49, 50, 51, 52, 53, 54, 55,
					56, 57, 48 ] );


				expect( '\uD800\uDC00'.charCodeAt(0) ).to.equal( 55296 );
				expect( fixedCharCodeAt('\uD800\uDC00', 0) ).to.equal( 65536 );
				expect( fixedCharCodeAt('\uD800\uDC00', 1) ).to.be.false; // false

			});

			it('(except for unicode codepoints > 0x10000)', function(){
				expect( String.fromCodePoint('0x10010').charCodeAt(0) ).to.equal(55296);
				expect( String.fromCodePoint('0x10010').charCodeAt(1) ).to.equal(56336);

				expect( fixedCharCodeAt('0x10010', 0) ).to.equal( 48 );
				expect( fixedCharCodeAt('0x10010', 1) ).to.equal( 120 ); // false

				expect( '\uD800\uDC00'.charCodeAt(0) ).to.equal(55296);
				expect( '\uD800\uDC00'.charCodeAt(1) ).to.equal(56320);

				expect( fixedCharCodeAt('\uD800\uDC00', 0) ).to.equal( 65536 );
				expect( fixedCharCodeAt('\uD800\uDC00', 1) ).to.be.false; // false
			});


			function fixedCharCodeAt(str, idx) {
			  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
			  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
			  idx = idx || 0;
			  var code = str.charCodeAt(idx);
			  var hi, low;

			  // High surrogate (could change last hex to 0xDB7F to treat high
			  // private surrogates as single characters)
			  if (0xD800 <= code && code <= 0xDBFF) {
			    hi = code;
			    low = str.charCodeAt(idx + 1);
			    if (isNaN(low)) {
			      throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
			    }
			    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
			  }
			  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
			    // We return false to allow loops to skip this iteration since should have
			    // already handled high surrogate above in the previous iteration
			    return false;
			    /*hi = str.charCodeAt(idx - 1);
			    low = code;
			    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
			  }
			  return code;
			}
		});
	});
});

