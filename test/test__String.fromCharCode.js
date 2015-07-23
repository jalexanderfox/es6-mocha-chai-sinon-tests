var expect = require('chai').expect;

//The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
describe('String', function() {
	describe('#fromCharCode', function(){
		it('static method returns a string created by using the specified sequence of Unicode values.', function(){
			expect( String.fromCharCode(65, 66, 67) ).to.equal("ABC");  // "ABC"
		});
	});
});

