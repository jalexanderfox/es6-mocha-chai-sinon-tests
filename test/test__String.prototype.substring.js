var expect = require('chai').expect;

//str.substring(indexA[, indexB])
//The substring() method returns a subset of a string between one index and another, or through the end of the string.
//If start equals stop, it returns an empty string.
// If stop is omitted, it extracts characters to the end of the string.
// If start > stop, then substring will swap those 2 arguments.
// If either argument is greater than the string's length, either argument will use the string's length.
// If either argument is less than 0 or is NaN, it is treated as if it were 0.

describe('String', function() {
	describe('#prototype', function(){
		describe('#substring', function(){
			it('returns a subset of a string between one index and another, or through the end of the string.', function(){
				expect( '0123456789'.substring(1, 2) ).to.equal( '1' );
			});

			it('returns the whole string if the parameters are empty', function(){
				expect( '0123456789'.substring() ).to.equal( '0123456789' );
			});

			it('extracts characters to the end of the string if indexB is omitted', function(){
				expect( '0123456789'.substring(1) ).to.equal( '123456789' );
			});

			it('extracts characters from indexA up to but not including indexB', function(){
				expect( '0123456789'.substring(1,5) ).to.equal( '1234' );
			});

			it('returns an empty string, if indexA equals indexB, substring()', function(){
				expect( '0123456789'.substring(5,5) ).to.equal( '' );
			});

			it('begins extracting characters at start and collects indexB characters', function(){
				expect( '0123456789'.substring(5, 2) ).to.equal( '234' );
			});

			it('returns an empty string, if start is positive and is greater than or equal to the indexB of the string, substring()', function(){
				// expect( '0123456789'.substring(20, 2) ).to.equal( '' );
			});

			it('uses 0 as the indexA if the argument is less than 0 or is NaN', function(){
				expect( '0123456789'.substring(-20, 2) ).to.equal( '01' );
				expect( '0123456789'.substring(-3, 2) ).to.equal( '01' );
				expect( '0123456789'.substring(-3) ).to.equal( '0123456789' );
			});

			it('uses 0 as the indexB if the argument is less than 0 or is NaN', function(){
				expect( '0123456789'.substring(0, -2) ).to.equal( '' );
			});
		});
	});
});

