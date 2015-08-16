var expect = require('chai').expect;

//str.slice(beginSlice[, endSlice])
//
//The slice() method extracts a section of a string and returns a new string.
//
// If start equals stop, it returns an empty string, exactly like substring().
// If stop is omitted, slice extracts chars to the end of the string, exactly like substring().
// If start > stop, slice() will NOT swap the 2 arguments.
// If either argument is greater than the string's length, either argument will use the string's length, exactly like substring().
// If start is negative, slice() will set char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
// If stop is negative, slice() will set stop to: (string.length – 1) – Math.abs(stop) (original value).
describe('String', function() {
	describe('#prototype', function(){
		describe('#slice', function(){
			it('extracts a section of a string and returns a new string.', function(){
				expect( 'abc'.slice(1,2) ).to.equal('b');

				expect( '0123456789'.length ).to.equal(10);
				expect( '0123456789'.slice(9) ).to.equal( '0123456789'.slice(-1) );
			});

			it('with no parameters defaults to beginSlice = 0', function() {
				expect( '0123456789'.slice() ).to.equal( '0123456789'.slice(0) );
			});

			it('can extract a string beginning at an index to the end of a string', function(){
				expect( '0123456789'.slice() ).to.equal( '0123456789' );
				expect( '0123456789'.slice(0) ).to.equal( '0123456789' );
				expect( '0123456789'.slice(1) ).to.equal( '123456789' );
				expect( '0123456789'.slice(2) ).to.equal( '23456789' );
				expect( '0123456789'.slice(3) ).to.equal( '3456789' );
				expect( '0123456789'.slice(4) ).to.equal( '456789' );
				expect( '0123456789'.slice(5) ).to.equal( '56789' );
				expect( '0123456789'.slice(6) ).to.equal( '6789' );
				expect( '0123456789'.slice(7) ).to.equal( '789' );
				expect( '0123456789'.slice(8) ).to.equal( '89' );
				expect( '0123456789'.slice(9) ).to.equal( '9' );
			});


			it('can extract the beginning of the string to an end slice index', function(){
				expect( '0123456789'.slice(0, 10) ).to.equal( '0123456789' );
				expect( '0123456789'.slice(0, 9) ).to.equal( '012345678' );
				expect( '0123456789'.slice(0, 8) ).to.equal( '01234567' );
				expect( '0123456789'.slice(0, 7) ).to.equal( '0123456' );
				expect( '0123456789'.slice(0, 6) ).to.equal( '012345' );
				expect( '0123456789'.slice(0, 5) ).to.equal( '01234' );
				expect( '0123456789'.slice(0, 4) ).to.equal( '0123' );
				expect( '0123456789'.slice(0, 3) ).to.equal( '012' );
				expect( '0123456789'.slice(0, 2) ).to.equal( '01' );
				expect( '0123456789'.slice(0, 1) ).to.equal( '0' );
			});

			it('will return an empty string if the beginSlice index is outside the range of indices in the string', function(){
				expect( '0123456789'.slice(10) ).to.equal( '' );
				expect( '0123456789'.slice(20) ).to.equal( '' );
			});

			it('If beginSlice parameter is negative, it is treated as sourceLength + beginSlice where sourceLength is the length of the string (for example, if endSlice is -3 it is treated as sourceLength - 3).', function(){
				expect( '0123456789'.slice(-1) ).to.equal('9');
				expect( '0123456789'.slice(-2) ).to.equal('89');
				expect( '0123456789'.slice(-3) ).to.equal('789');
				expect( '0123456789'.slice(-4) ).to.equal('6789');
				expect( '0123456789'.slice(-5) ).to.equal('56789');
				expect( '0123456789'.slice(-6) ).to.equal('456789');
				expect( '0123456789'.slice(-7) ).to.equal('3456789');
				expect( '0123456789'.slice(-8) ).to.equal('23456789');
				expect( '0123456789'.slice(-9) ).to.equal('123456789');
				expect( '0123456789'.slice(-10) ).to.equal('0123456789');
			});

			it('If endSlice parameter is negative, it is treated as sourceLength + endSlice where sourceLength is the length of the string (for example, if endSlice is -3 it is treated as sourceLength - 3).', function(){
				expect( '0123456789'.slice(0, -1) ).to.equal('012345678');
				expect( '0123456789'.slice(0, -2) ).to.equal('01234567');
				expect( '0123456789'.slice(0, -3) ).to.equal('0123456');
				expect( '0123456789'.slice(0, -4) ).to.equal('012345');
				expect( '0123456789'.slice(0, -5) ).to.equal('01234');
				expect( '0123456789'.slice(0, -6) ).to.equal('0123');
				expect( '0123456789'.slice(0, -7) ).to.equal('012');
				expect( '0123456789'.slice(0, -8) ).to.equal('01');
				expect( '0123456789'.slice(0, -9) ).to.equal('0');
				expect( '0123456789'.slice(0, -10) ).to.equal('');
			});
		});
	});
});

