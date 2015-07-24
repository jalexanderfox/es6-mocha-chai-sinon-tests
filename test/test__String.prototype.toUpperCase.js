var expect = require('chai').expect;

//str.toUpperCase()
//The toUpperCase() method returns the calling string value converted to upper case.
describe('String', function() {
	describe('#prototype', function(){
		describe('#toUpperCase', function(){
				var str = 'alphabet'
				var newStr = str.toUpperCase();
			it('returns the calling string value converted to upper case, according to any locale-specific case mappings.', function(){
				expect( newStr ).to.equal( 'ALPHABET' );
			});

			it('does not affect the value of the string itself', function(){
				expect( str ).to.not.equal( newStr );
			});
		});
	});
});

