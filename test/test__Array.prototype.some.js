// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The some() method tests whether some element in the array passes the test implemented by the provided function.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#every', function(){
			function isBigEnough(element, index, array) {
				return element >= 10;
			}
			it('tests whether some element in the array passes the test implemented by the provided function.', function(){
				expect([2, 5, 8, 1, 4].some(isBigEnough)).to.be.false;//false
				expect([12, 5, 8, 1, 4].some(isBigEnough)).to.be.true;//true

				//using arrow functions
				expect([2, 5, 8, 1, 4].some(elem => elem >= 10)).to.be.false; // false
				expect([12, 5, 8, 1, 4].some(elem => elem >= 10)).to.be.true; // true
			});
		});
	});
});
