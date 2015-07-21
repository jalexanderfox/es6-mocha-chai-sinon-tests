var expect = require('chai').expect;

//The toString() method returns a string representing the source code of the function.
describe('Function', function() {
	describe('#prototype', function(){
		describe('#apply', function(){
			it('returns a string representing the source code of the function.', function(){
				console.log( (function(){}).toString() );
				expect( (function(){}).toString() ).to.equal( 'function (){}' );
			});
		});
	});
});
