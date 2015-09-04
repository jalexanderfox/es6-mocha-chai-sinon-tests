var expect = require('chai').expect;

//str.toLocaleLowerCase()
//The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
describe('String', function() {
	describe('#prototype', function(){
		describe('#toLocaleLowerCase', function(){
				var str = 'ALPHABET'
				var newStr = str.toLocaleLowerCase();
			it('returns the calling string value converted to lower case, according to any locale-specific case mappings.', function(){
				expect( newStr ).to.equal( 'alphabet' );
			});

			it('does not affect the value of the string itself', function(){
				expect( str ).to.not.equal( newStr );
			});

			it.skip('In most cases, this will produce the same result as toLowerCase(), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.', function(){

			});
		});
	});
});

