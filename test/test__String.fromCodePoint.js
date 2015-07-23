var expect = require('chai').expect;

//String.fromCodePoint(num1[, ...[, numN]])
//The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
describe('String', function() {
	describe('#fromCodePoint', function(){
		it('static method returns a string created by using the specified sequence of Unicode values.', function(){
			expect( String.fromCodePoint(42) ).to.equal( "*" );
			expect( String.fromCodePoint(65, 90) ).to.equal( "AZ" );
			expect( String.fromCodePoint(0x404) ).to.equal( "\u0404" );
			expect( String.fromCodePoint(0x2F804) ).to.equal( "\uD87E\uDC04" );
			expect( String.fromCodePoint(194564) ).to.equal( "\uD87E\uDC04" );
			expect( String.fromCodePoint(0x1D306, 0x61, 0x1D307) ).to.equal("\uD834\uDF06a\uD834\uDF07");

			expect( function(){ String.fromCodePoint('_') } ).to.throw(RangeError);      // RangeError
			expect( function(){ String.fromCodePoint(Infinity) } ).to.throw(RangeError); // RangeError
			expect( function(){ String.fromCodePoint(-1) } ).to.throw(RangeError);       // RangeError
			expect( function(){ String.fromCodePoint(3.14) } ).to.throw(RangeError);     // RangeError
			expect( function(){ String.fromCodePoint(3e-2) } ).to.throw(RangeError);     // RangeError
			expect( function(){ String.fromCodePoint(NaN) } ).to.throw(RangeError);      // RangeError
		});
	});
});

