var expect = require('chai').expect;

//str.substr(start[, length])
//The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
describe('String', function() {
	describe('#prototype', function(){
		describe('#substr', function(){
			it('returns the characters in a string beginning at the specified location through the specified number of characters.', function(){
				expect( '0123456789'.substr(1, 2) ).to.equal( '12' );
			});

			it('returns the whole string if the parameters are empty', function(){
				expect( '0123456789'.substr() ).to.equal( '0123456789' );
			});

			it('extracts characters to the end of the string if length is omitted', function(){
				expect( '0123456789'.substr(1) ).to.equal( '123456789' );
			});

			it('begins extracting characters at start and collects length characters', function(){
				expect( '0123456789'.substr(5, 2) ).to.equal( '56' );
			});

			it('returns an empty string, if start is positive and is greater than or equal to the length of the string, substr()', function(){
				expect( '0123456789'.substr(20, 2) ).to.equal( '' );
			});

			it('uses it as a character index from the end of the string, if start is negative', function(){
				expect( '0123456789'.substr(-3, 2) ).to.equal( '78' );
				expect( '0123456789'.substr(-3) ).to.equal( '789' );
			});

			it('uses 0 as the start index if start is negative and abs(start) is larger than the length of the string', function(){
				expect( '0123456789'.substr(-20, 2) ).to.equal( '01' );
			});

			it('returns an empty string if length is 0 or negative', function(){
				expect( '0123456789'.substr(0, -1) ).to.equal( '' );
			});
		});
	});
});

