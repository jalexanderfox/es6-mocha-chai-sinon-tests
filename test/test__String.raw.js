var expect = require('chai').expect;

// !!!!!!!! NOTE !!!!!!!!!
// Template string syntax is not available yet,
// once it is available, uncomment the expect function calls


// The static String.raw() method is a tag function of template strings,
// like the r prefix in Python or the @ prefix in C# for string literals,
// this function is used to get the raw string form of template strings
// (that is, the original, uninterpreted text).
describe('String', function() {
	describe('#raw', function(){

// In most cases, String.raw() is used with template strings.
// The first syntax mentioned above is only rarely used,
// because the JavaScript engine will call this with proper arguments for you,
// just like with other tag functions.

// String.raw() is the only built-in tag function of template strings;
// it works just like the default template function and performs concatenation.
// You can even re-implement it with normal JavaScript code.


		it('returns the raw string form of template strings (the original, uninterpreted text)', function(){
		// expect( String.raw`Hi\n${2+3}!` ).to.equal( 'Hi\\n5!' );
			// 'Hi\\n5!', the character after 'Hi' is not a newline character,
			// '\' and 'n' are two characters.

		// expect( String.raw`Hi\u000A!` ).to.equal( 'Hi\\u000A!' );
			// 'Hi\\u000A!', same here, this time we will get the
			//  \, u, 0, 0, 0, A, 6 characters.
			// All kinds of escape characters will be ineffective and
			// backslashes will be present in the output string.
			// You can confirm this by checking the .length property of the string.

			var name = 'Bob';
		// expect( String.raw`Hi\n${name}!` ).to.equal( 'Hi\\nBob!' );
			// 'Hi\\nBob!', substitutions are processed.

			// Normally you would not call String.raw() as a function, but you can do so:
		// expect( String.raw({ raw: 'test' }, 0, 1, 2) ).to.equal( 't0e1s2t' );
			// 't0e1s2t'
		});

	});
});
