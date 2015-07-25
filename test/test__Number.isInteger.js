var expect = require('chai').expect;

require('../polyfills/polyfills').getPolyfill('Number.isInteger');

// Number.isInteger(value)
// The Number.isInteger() method determines whether the passed value is an integer.
describe('Number', function() {
	describe('#isInteger', function(){
		it('returns true if a number is an integer', function(){
			expect( Number.isInteger(Infinity) ).to.be.false;
			expect( Number.isInteger(NaN) ).to.be.false;
			expect( Number.isInteger(-Infinity) ).to.be.false;
			expect( Number.isInteger(0.123) ).to.be.false;
			expect( Number.isInteger(Number.MIN_VALUE) ).to.be.false;
			expect( Number.isInteger(Math.PI) ).to.be.false;
			expect( Number.isInteger('0') ).to.be.false;

			expect( Number.isInteger(-10) ).to.be.true;
			expect( Number.isInteger(0) ).to.be.true;
			expect( Number.isInteger(2e64) ).to.be.true;
		});
	});
});

