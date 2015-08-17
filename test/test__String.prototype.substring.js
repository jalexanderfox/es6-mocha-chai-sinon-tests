var expect = require('chai').expect;

//str.substring(indexA[, indexB])
//The substring() method returns a subset of a string between one index and another, or through the end of the string.

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

			it('extracts characters from indexB up to but not including indexA, if indexA < indexB', function(){
				expect( '0123456789'.substring(5, 2) ).to.equal( '234' );
			});

			it('uses 0 as the indexA if the argument is less than 0 or is NaN', function(){
				expect( '0123456789'.substring(-20, 2) ).to.equal( '01' );
				expect( '0123456789'.substring(-3, 2) ).to.equal( '01' );
				expect( '0123456789'.substring(-3) ).to.equal( '0123456789' );
			});

			it('uses 0 as the indexB if the argument is less than 0 or is NaN', function(){
				expect( '0123456789'.substring(0, -2) ).to.equal( '' );
			});

			it('uses string.length as indexA if indexA > string.length', function(){
				expect( '0123456789'.substring(20) ).to.equal( '' );
			});

			it('uses string.length as indexB if indexB > string.length', function(){
				expect( '0123456789'.substring(0, 20) ).to.equal( '0123456789' );
			});

			it('If either argument is less than 0 or is NaN, it is treated as if it were 0', function(){
				expect( '0123456789'.substring(NaN, NaN) ).to.equal( '' );
			});
		});
	});
});

