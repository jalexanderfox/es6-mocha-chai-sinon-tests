// Javascript Array methods tests including ES6
expect = require('chai').expect;

// Polyfill
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}

//The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
describe('Array', function() {
	describe('#of', function(){
		it('creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.', function(){
			expect(Array.of(1)).to.eql([1]);         // [1]
			expect(Array.of(1, 2, 3)).to.eql([1,2,3]);   // [1, 2, 3]
			expect(Array.of(undefined)).to.eql([undefined]); // [undefined]
		});
	})
}

);