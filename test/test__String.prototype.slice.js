var expect = require('chai').expect;

//str.slice(beginSlice[, endSlice])
//
//The slice() method extracts a section of a string and returns a new string.
//
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

			it('returns empty string if beginSlice === endSlice', function() {
				expect( '0123456789'.slice(0, 0) ).to.equal( '' );
			});

			it('returns empty string if beginSlice > endSlice', function(){
				expect( '0123456789'.slice(1,0) ).to.equal( '' );
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

			it('will use the string.length if the endSlice is greater than string.length', function(){
				expect( '0123456789'.slice(0, 20) ).to.equal( '0123456789' );
			});

			it('beginSlice is treated as sourceLength + beginSlice where sourceLength is the length of the string, if beginSlice parameter is negative (for example, if endSlice is -3 it is treated as sourceLength - 3).', function(){
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

			it('endSlice is treated as sourceLength + endSlice where sourceLength is the length of the string, if endSlice parameter is negative (for example, if endSlice is -3 it is treated as sourceLength - 3).', function(){
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

