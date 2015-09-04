var expect = require('chai').expect;

//The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#toLocaleString', function(){
			it('returns a string representing the object.', function(){
				expect( ({}).toLocaleString() ).to.equal( '[object Object]' );
			});
		});
	});
});
