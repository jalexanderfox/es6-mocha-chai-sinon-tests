var expect = require('chai').expect;

// parseInt(string[, radix])
// The parseInt() function parses a string argument and returns an integer of the specified radix
// (the base in mathematical numeral systems).


describe('#parseInt', function(){
// The parseInt function converts its first argument to a string, parses it, and returns an integer or NaN.
// If not NaN, the returned value will be the decimal integer representation of the first argument taken
// as a number in the specified radix (base). For example, a radix of 10 indicates to convert from a decimal number,
// 8 octal, 16 hexadecimal, and so on. For radices above 10, the letters of the alphabet indicate numerals greater than 9.
// For example, for hexadecimal numbers (base 16), A through F are used.

	describe('converts its first argument to a string, parses it and returns an integer or NaN', function(){
		it('if not NaN, the returned value will be the decimal integer representation of the first argument taken as a number in the specified radix (base)', function(){
			expect( parseInt(" 0xF", 16) ).to.equal( 15 );
			expect( parseInt(" F", 16) ).to.equal( 15 );
			expect( parseInt("17", 8) ).to.equal( 15 );
			expect( parseInt(021, 8) ).to.equal( 15 );
			expect( parseInt("015", 10) ).to.equal( 15 );
			expect( parseInt(15.99, 10) ).to.equal( 15 );
			expect( parseInt("FXX123", 16) ).to.equal( 15 );
			expect( parseInt("1111", 2) ).to.equal( 15 );
			expect( parseInt("15*3", 10) ).to.equal( 15 );
			expect( parseInt("15e2", 10) ).to.equal( 15 );
			expect( parseInt("15px", 10) ).to.equal( 15 );
			expect( parseInt("12", 13) ).to.equal( 15 );

			expect( parseInt("-F", 16) ).to.equal( -15 );
			expect( parseInt("-0F", 16) ).to.equal( -15 );
			expect( parseInt("-0XF", 16) ).to.equal( -15 );
			expect( parseInt(-15.1, 10 ) ).to.equal( -15 );
			expect( parseInt(" -17", 8) ).to.equal( -15 );
			expect( parseInt(" -15", 10) ).to.equal( -15 );
			expect( parseInt("-1111", 2) ).to.equal( -15 );
			expect( parseInt("-15e1", 10) ).to.equal( -15 );
			expect( parseInt("-12", 13) ).to.equal( -15 );
		});

		it('returns NaN, if the string does not represent a number in the specified radix', function(){
			expect( parseInt("Hello", 8) ).to.be.NaN; // Not a number at all
			expect( parseInt("546", 2) ).to.be.NaN;   // Digits are not valid for binary representations
		});

		it('encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point.', function(){
			expect( parseInt('15 Hello 51', 10) ).to.equal( 15 );
		});

		it('truncates numbers to integer values', function(){
			expect( parseInt('15.15151515', 10) ).to.equal( 15 );
		});

		it('allows leading and trailing spaces', function(){
			expect( parseInt('  15  ', 10)).to.equal( 15 );
		});

	});

	describe('if radix is undefined or 0 (or absent), JavaScript assumes the following', function(){
		it('if the input string begins with "0x" or "0X", radix is 16 (hexadecimal) and the remainder of the string is parsed.', function(){
			expect( parseInt('0xF') ).to.equal( 15 );
		});

		it('if the input string begins with "0", radix is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason always specify a radix when using parseInt.', function(){
			expect( parseInt("0e0") ).to.equal( 0 );
		});

		it('if the input string begins with any other value, the radix is 10 (decimal)', function(){
			expect( parseInt(" 1 ") ).to.equal( 1 );
		});

		it('if the first character cannot be converted to a number, parseInt returns NaN.', function(){
			expect( parseInt("Hello") ).to.be.NaN; // Not a number at all
		});
	});

	describe('Use:', function(){
		it('stricter parse function', function(){
			filterInt = function (value) {
			  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
			    return Number(value);
			  return NaN;
			}

			expect( filterInt('421') ).to.equal( 421 );
			expect( filterInt('-421') ).to.equal( -421 );
			expect( filterInt('+421') ).to.equal( 421 );
			expect( filterInt('Infinity') ).to.equal( Infinity );
			expect( filterInt('421e+0') ).to.be.NaN;
			expect( filterInt('421hop') ).to.be.NaN;
			expect( filterInt('hop1.61803398875') ).to.be.NaN;
			expect( filterInt('1.61803398875') ).to.be.NaN;
		});
	});
});

