var expect = require('chai').expect;

// Number.Number.parseFloat(value)
// The Number.parseFloat() method parses a string argument and returns a floating point number.
// This method behaves identically to the global function parseFloat() and is part of ECMAScript 6
// (its purpose is modularization of globals).

describe('Number', function() {
	describe('#parseFloat', function(){
		it('parses a string argument and returns a floating point number.', function(){
			expect( Number.parseFloat('1.1') ).to.equal( 1.1 );
			expect( Number.parseFloat('2e1') ).to.equal( 20 );
			expect( Number.parseFloat('2e2') ).to.equal( 200 );
			expect( Number.parseFloat("3.14") ).to.equal( 3.14 );
			expect( Number.parseFloat("314e-2") ).to.equal( 3.14 );
			expect( Number.parseFloat("0.0314E+2") ).to.equal( 3.14 );
		});

		it('encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters', function(){
			expect( Number.parseFloat("3.14more non-digit characters") ).to.equal( 3.14 );
			expect( Number.parseFloat('0123456789') ).to.equal( 123456789 );
		});

		it('returns NaN if the first character cannot be converted to a number', function(){
			expect( Number.parseFloat('A123') ).to.be.NaN;
			expect( Number.parseFloat(NaN) ).to.be.NaN;
		});

		it('can parse and return the value Infinity', function(){
			expect( Number.parseFloat("Infinity") ).to.equal( Number.POSITIVE_INFINITY );
			expect( Number.parseFloat("-Infinity") ).to.equal( Number.NEGATIVE_INFINITY );
		});

		it('behaves identically to the global function parseFloat()', function(){
			expect( Number.parseFloat('3.14e1same as parseFloat') ).to.equal( parseFloat('3.14e1same as parseFloat') );
		});
	});
});

