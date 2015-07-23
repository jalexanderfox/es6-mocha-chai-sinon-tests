var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('String.prototype.includes');

//str.includes(searchString[, position])
//The includes() method determines whether one string may be found within another string,
//returning true or false as appropriate.
describe('String', function() {
	describe('#prototype', function(){
		describe('#includes', function(){
			it('determines whether one string may be found within another string, returning true or false as appropriate.', function(){
				var str = 'To be, or not to be, that is the question.';
				expect( str.includes('To be') ).to.be.true       // true
				expect( str.includes('question') ).to.be.true    // true
				expect( str.includes('nonexistent') ).to.be.false // false
				expect( str.includes('To be', 1) ).to.be.false    // false
				expect( str.includes('TO BE') ).to.be.false       // false
			});

			it('is case sensitive', function(){
				expect( 'Blue Whale'.includes('blue') ).to.be.false; // returns false
			});
		});
	});
});

