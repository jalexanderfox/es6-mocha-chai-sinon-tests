var expect = require('chai').expect;

//str.toLocaleUpperCase()
//The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
describe('String', function() {
	describe('#prototype', function(){
		describe('#toLocaleUpperCase', function(){
				var str = 'alphabet'
				var newStr = str.toLocaleUpperCase();
			it('returns the calling string value converted to upper case, according to any locale-specific case mappings.', function(){
				expect( newStr ).to.equal( 'ALPHABET' );
			});

			it('does not affect the value of the string itself', function(){
				expect( str ).to.not.equal( newStr );
			});

			it.skip('In most cases, this will produce the same result as toUpperCase(), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.', function(){

			});
		});
	});
});

