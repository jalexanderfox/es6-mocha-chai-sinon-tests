// Javascript Array methods tests including ES6
expect = require('chai').expect;

//The every() method tests whether all elements in the array pass the test implemented by the provided function.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#every', function(){
			function isBigEnough(element, index, array) {
				return element >= 10;
			}
			it('The every() method tests whether all elements in the array pass the test implemented by the provided function.', function(){
				expect([12, 5, 8, 130, 44].every(isBigEnough)).to.be.false;//false
				expect([12, 54, 18, 130, 44].every(isBigEnough)).to.be.true;//true

				//using arrow functions
				expect([12, 5, 8, 130, 44].every(elem => elem >= 10)).to.be.false; // false
				expect([12, 54, 18, 130, 44].every(elem => elem >= 10)).to.be.true; // true
			});
		});

	})
}

);