var expect = require('chai').expect;

// The Number.POSITIVE_INFINITY
// The Number.POSITIVE_INFINITY property represents the positive Infinity value.

// This value behaves slightly differently than mathematical infinity:
describe('Number', function() {
	describe('#POSITIVE_INFINITY', function(){
		it('is the same as the global object\'s Infinity property', function(){
			expect( Number.POSITIVE_INFINITY ).to.equal( Infinity );
		});

		it('multiplied by any positive value, including POSITIVE_INFINITY, is POSITIVE_INFINITY', function(){
			expect( Number.POSITIVE_INFINITY * Number.POSITIVE_INFINITY ).to.equal( Number.POSITIVE_INFINITY );
			expect( Number.MIN_VALUE * Number.POSITIVE_INFINITY ).to.equal( Number.POSITIVE_INFINITY );
			expect( 1 * Number.POSITIVE_INFINITY ).to.equal( Number.POSITIVE_INFINITY );
		});

		it('multiplied by any negative value, including NEGATIVE_INFINITY, is NEGATIVE_INFINITY.', function(){
			expect( Number.POSITIVE_INFINITY * Number.NEGATIVE_INFINITY ).to.equal( Number.NEGATIVE_INFINITY );
			expect( -1 * Number.POSITIVE_INFINITY ).to.equal( Number.NEGATIVE_INFINITY );
		});
		it('multiplied by Zero is NaN.', function(){
			expect( 0 * Number.POSITIVE_INFINITY ).to.be.NaN;
		});
		it('multiplied by NaN is NaN.', function(){
			expect( NaN * Number.POSITIVE_INFINITY ).to.be.NaN;
		});
		it('divided by any negative value except NEGATIVE_INFINITY, is NEGATIVE_INFINITY.', function(){
			expect( Number.POSITIVE_INFINITY / -1 ).to.equal( Number.NEGATIVE_INFINITY );
		});
		it('divided by any positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY.', function(){
			expect( Number.POSITIVE_INFINITY / 1 ).to.equal( Number.POSITIVE_INFINITY );
		});
		it('divided by either POSITIVE_INFINITY or NEGATIVE_INFINITY, is NaN.', function(){
			expect( Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY ).to.be.NaN;
			expect( Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY ).to.be.NaN;
			expect( Number.NEGATIVE_INFINITY / Number.POSITIVE_INFINITY ).to.be.NaN;
		});
		it('any number divided by POSITIVE_INFINITY is zero.', function(){
			expect( 1 / Number.POSITIVE_INFINITY ).to.equal( 0 );
			expect( -1 / Number.POSITIVE_INFINITY ).to.equal( 0 );
		});
	});
});

