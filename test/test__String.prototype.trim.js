var expect = require('chai').expect;

//str.trim(url)
//The trim() method removes whitespace from both ends of a string.
//Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
//and all the line terminator characters (LF, CR, etc.).
describe('String', function() {
	describe('#prototype', function(){
		describe('#trim', function(){
			var orig = '   foo  ';
			var trimmed = orig.trim()

			it('removes whitespace from both ends of a string ( whitespace = space, tab, no-break space, LF, CR, etc. )', function(){
				expect( trimmed ).to.equal( 'foo' );
			});

			it('returns a new string', function(){
				expect( trimmed ).to.not.equal( orig );
			});
		});
	});
});

