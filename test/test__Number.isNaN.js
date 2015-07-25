var expect = require('chai').expect;

require('../polyfills/polyfills').getPolyfill('Number.isNaN');

// Number.isNaN(value)
// The Number.isNaN() method determines whether the passed value is NaN.
// More robust version of the original global isNaN().
describe('Number', function() {
	describe('#isNaN', function(){

// Due to both equality operators, == and ===, evaluating to false when checking if NaN is NaN,
// the function Number.isNaN() has become necessary. This situation is unlike all other possible
// value comparisons in JavaScript.

// In comparison to the global isNaN() function, Number.isNaN() doesn't suffer the problem of
// forcefully converting the parameter to a number. This means it is now safe to pass values
// that would normally convert to NaN, but aren't actually the same value as NaN. This also means
// that only values of the type number, that are also NaN, return true.

		it('returns true if the parameter is type "number" but NaN "Not a Number', function(){
			expect( Number.isNaN(NaN) ).to.be.true;
			expect( Number.isNaN(Number.NaN) ).to.be.true;
			expect( Number.isNaN(0 / 0) ).to.be.true;
		});

		it('returns false if the parameter is type "number" and is a Number', function(){
			expect( Number.isNaN(37) ).to.be.false;
			expect( Number.isNaN(Infinity) ).to.be.false;
			expect( Number.isNaN(-Infinity) ).to.be.false;
		});

		it('does not forecefully convert parameters like the global isNaN', function(){
			// e.g. these would have been true with global isNaN()
			expect( Number.isNaN("NaN") ).to.be.false;
			expect( Number.isNaN(undefined) ).to.be.false;
			expect( Number.isNaN({}) ).to.be.false;
			expect( Number.isNaN("blabla") ).to.be.false;

			expect( isNaN("NaN") ).to.be.true;
			expect( isNaN(undefined) ).to.be.true;
			expect( isNaN({}) ).to.be.true;
			expect( isNaN("blabla") ).to.be.true;
		});

		it('returns false if the parameter is not a typeOf "number"', function(){
			expect( Number.isNaN(true) ).to.be.false;
			expect( Number.isNaN(null) ).to.be.false;
			expect( Number.isNaN("37") ).to.be.false;
			expect( Number.isNaN("37.37") ).to.be.false;
			expect( Number.isNaN("") ).to.be.false;
			expect( Number.isNaN(" ") ).to.be.false;
		});
	});
});

