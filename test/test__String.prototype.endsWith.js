var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('String.prototype.endsWith');

//str.endsWith(searchString[, position])
//The endsWith() method determines whether a string ends with the characters of another string,
//returning true or false as appropriate.
describe('String', function() {
	describe('#prototype', function(){
		describe('#endsWith', function(){
			it('determines whether a string ends with the characters of another string, returning true or false as appropriate.', function(){
				var str = 'To be, or not to be, that is the question.';
				expect( str.endsWith('question.') ).to.be.true;
				expect( str.endsWith('to be') ).to.be.false;
				expect( str.endsWith('to be', 19) ).to.be.true;
			});
		});
	});
});

