var expect = require('chai').expect;

//The length property represents the length of a string.
describe('String', function() {
	describe('#length', function(){
		it('property represents the length of a string.', function(){
			var x = 'Mozilla';
			var empty = '';

			console.log('Mozilla is ' + x.length + ' code units long');
			expect( x.length ).to.equal( 7 );
			/* "Mozilla is 7 code units long" */

			console.log('The empty string has a length of ' + empty.length);
			/* "The empty string has a length of 0" */
			expect( empty.length ).to.equal( 0 );
		});
	});
});
