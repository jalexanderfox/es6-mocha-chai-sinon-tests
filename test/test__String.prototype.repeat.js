var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('String.prototype.repeat');

//str.repeat(count)
//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
describe('String', function() {
	describe('#prototype', function(){
		describe('#repeat', function(){
			it('constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.', function(){
				expect( 'abc'.repeat(0) ).to.equal( '' );
				expect( 'abc'.repeat(1) ).to.equal( 'abc' );
				expect( 'abc'.repeat(2) ).to.equal( 'abcabc' );
				expect( 'abc'.repeat(3.5) ).to.equal( 'abcabcabc' ); //(count will be converted to integer)

				({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
				// 'abcabc' (repeat() is a generic method)
			});

			it('throws a RangeError if an invalid paramater is provided, the parameter must be a postitive number less than infinity', function(){
				expect( function() { 'abc'.repeat(-1) } ).to.throw( RangeError);
				expect( function() { 'abc'.repeat(Number.POSITIVE_INFINITY) } ).to.throw( RangeError );
				expect( function() { 'abc'.repeat(1/0) } ).to.throw( RangeError );
			});
		});
	});
});

