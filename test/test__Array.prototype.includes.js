// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//Polyfill
require('../polyfills/polyfills').getPolyfill('Array.prototype.includes');

//The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#includes', function(){
			it('determines whether an array includes a certain element, returning true or false as appropriate.', function(){
				expect( [1, 2, 3].includes(2) ).to.be.true;     // true
				expect( [1, 2, 3].includes(4) ).to.be.false;     // false
				expect( [1, 2, 3].includes(3, 3) ).to.be.false;  // false
				expect( [1, 2, 3].includes(3, -1) ).to.be.true; // true
				expect( [1, 2, NaN].includes(NaN) ).to.be.true; // true
			});
		})

	})
}

);