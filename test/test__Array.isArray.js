// Javascript Array methods tests including ES6
expect = require('chai').expect;

//The Array.isArray() method returns true if an object is an array, false if it is not.
describe('Array', function() {
	describe('#isArray', function(){
		it('returns true if an object is an array', function(){
			expect(Array.isArray([])).to.be.true;
		});
		it('returns false if an object is not', function(){
			expect(Array.isArray({})).to.be.false;
			expect(Array.isArray("")).to.be.false;
			expect(Array.isArray()).to.be.false;
			expect(Array.isArray({})).to.be.false;
			expect(Array.isArray(null)).to.be.false;
			expect(Array.isArray(undefined)).to.be.false;
			expect(Array.isArray(17)).to.be.false;
			expect(Array.isArray('Array')).to.be.false;
			expect(Array.isArray(true)).to.be.false;
			expect(Array.isArray(false)).to.be.false;
			expect(Array.isArray({ __proto__: Array.prototype })).to.be.false;
		});

	})
}

);