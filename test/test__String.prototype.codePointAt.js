var expect = require('chai').expect;

//str.codePointAt(pos)
//The codePointAt() method returns a non-negative integer that is the UTF-16 encoded code point value.
describe('String', function() {
	describe('#prototype', function(){
		describe('#codePointAt', function(){
			it('returns a non-negative integer that is the UTF-16 encoded code point value.', function(){
				expect( 'ABC'.codePointAt(1) ).to.equal( 66 );
				expect( '\uD800\uDC00'.codePointAt(0) ).to.equal( 65536 );
			});

			it('undefined is returned if there is no element at the specified position', function(){
				expect( 'XYZ'.codePointAt(42) ).to.be.undefined;
			})
		});
	});
});

