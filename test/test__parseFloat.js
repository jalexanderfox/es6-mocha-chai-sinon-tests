var expect = require('chai').expect;

// parseFloat(string)
// The parseFloat() function parses a string argument and returns a floating point number.

describe('parseFloat', function() {
	it('parses a string argument and returns a floating point number.', function(){
		expect( parseFloat('1.1') ).to.equal( 1.1 );
		expect( parseFloat('2e1') ).to.equal( 20 );
		expect( parseFloat('2e2') ).to.equal( 200 );
		expect( parseFloat("3.14") ).to.equal( 3.14 );
		expect( parseFloat("314e-2") ).to.equal( 3.14 );
		expect( parseFloat("0.0314E+2") ).to.equal( 3.14 );
	});

	it('encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters', function(){
		expect( parseFloat("3.14more non-digit characters") ).to.equal( 3.14 );
		expect( parseFloat('0123456789') ).to.equal( 123456789 );
	});

	it('returns NaN if the first character cannot be converted to a number', function(){
		expect( parseFloat('A123') ).to.be.NaN;
		expect( parseFloat(NaN) ).to.be.NaN;
	});

	it('can parse and return the value Infinity', function(){
		expect( parseFloat("Infinity") ).to.equal( Number.POSITIVE_INFINITY );
		expect( parseFloat("-Infinity") ).to.equal( Number.NEGATIVE_INFINITY );
	});
});

