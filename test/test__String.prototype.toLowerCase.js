var expect = require('chai').expect;

//str.toLowerCase()
//The toLowerCase() method returns the calling string value converted to lowercase.
describe('String', function() {
	describe('#prototype', function(){
		describe('#toLowerCase', function(){
				var str = 'ALPHABET'
				var newStr = str.toLowerCase();
			it('returns the calling string value converted to lower case, according to any locale-specific case mappings.', function(){
				expect( newStr ).to.equal( 'alphabet' );
			});

			it('does not affect the value of the string itself', function(){
				expect( str ).to.not.equal( newStr );
			});
		});
	});
});

