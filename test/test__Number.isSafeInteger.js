var expect = require('chai').expect;

// Number.isSafeInteger(value)
// The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
describe('Number', function() {
	describe('#isSafeInteger', function(){

// The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
// A safe integer is an integer that

// can be exactly represented as an IEEE-754 double precision number, and
// whose IEEE-754 representation cannot be the result of rounding any other
// integer to fit the IEEE-754 representation.

// For example, 2^53 - 1 is a safe integer: it can be exactly represented,
// and no other integer rounds to it under any IEEE-754 rounding mode.

// In contrast, 2^53 is not a safe integer: it can be exactly represented in IEEE-754,
// but the integer 2^53 + 1 can't be directly represented in IEEE-754 but instead rounds
// to 2^53 under round-to-nearest and round-to-zero rounding.

// The safe integers consist of all integers from -(2^53 - 1) inclusive to 2^53 - 1 inclusive.

		it('returns true if a number is a safe integer and false if not', function(){
			expect( Number.isSafeInteger(Infinity) ).to.be.false;
			expect( Number.isSafeInteger(NaN) ).to.be.false;
			expect( Number.isSafeInteger(-Infinity) ).to.be.false;
			expect( Number.isSafeInteger(0.123) ).to.be.false;
			expect( Number.isSafeInteger(Number.MIN_VALUE) ).to.be.false;
			expect( Number.isSafeInteger(Math.PI) ).to.be.false;
			expect( Number.isSafeInteger('0') ).to.be.false;

			expect( Number.isSafeInteger(-10) ).to.be.true;
			expect( Number.isSafeInteger(0) ).to.be.true;

			expect( Number.isSafeInteger(3) ).to.be.true;
			expect( Number.isSafeInteger(Math.pow(2, 53)) ).to.be.false;
			expect( Number.isSafeInteger(Math.pow(2, 53) - 1) ).to.be.true;
			expect( Number.isSafeInteger(NaN) ).to.be.false;
			expect( Number.isSafeInteger(Infinity) ).to.be.false;
			expect( Number.isSafeInteger('3') ).to.be.false;
			expect( Number.isSafeInteger(3.1) ).to.be.false;
			expect( Number.isSafeInteger(3.0) ).to.be.true;
		});
	});
});

