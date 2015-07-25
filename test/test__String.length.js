var expect = require('chai').expect;

//The length property represents the length of a string.
describe('String', function() {
	describe('#length', function(){

// This property returns the number of code units in the string.
// UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters,
// but needs to use two code units for less commonly-used characters, so it's possible
// for the value returned by length to not match the actual number of characters in the string.

		it('returns the number of code units in the string.', function(){
			expect( '123456789'.length ).to.equal( 9 );
		});

		it('returns 0 for an empty string', function(){
			expect( ''.length ).to.equal( 0 );
		});

		it('returns 1 for static property String.length', function(){
			expect( String.length ).to.equal( 1 );
		});

		it('UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it\'s possible for the value returned by length to not match the actual number of characters in the string.', function(){
			// Resource for explanation:
			// https://mathiasbynens.be/notes/javascript-encoding
			expect( '\uD834\uDF06'.length ).to.equal( 2 );
			expect( '\uD834\uDF06' ).to.equal( '𝌆' );
			expect( '𝌆'.length ).to.equal( 2 );
		});
	});
});
