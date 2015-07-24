var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('String.prototype.startsWith');

//str.startsWith(searchString[, position])
//The startsWith() method determines whether a string begins with the characters of another string, returning true or false as appropriate.
describe('String', function() {
	describe('#prototype', function(){
		describe('#startsWith', function(){
			it('determines whether a string begins with the characters of another string, returning true or false as appropriate.', function(){
				var str = 'To be, or not to be, that is the question.';

				expect( str.startsWith('To be') ).to.be.true;         // true
				expect( str.startsWith('not to be') ).to.be.false;     // false
				expect( str.startsWith('not to be', 10) ).to.be.true; // true
			});

			it('position parameter defaults to 0', function(){
				expect( '0123456789'.startsWith('345') ).to.be.false;
				expect( '0123456789'.startsWith('0123') ).to.be.true;
			});

			it('can match a string starting at a specified index or   position   parameter', function(){
				expect( '0123456789'.startsWith('345', 3) ).to.be.true;
			});
		});
	});
});

