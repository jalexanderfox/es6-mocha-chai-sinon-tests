var expect = require('chai').expect;

// !!!!!!!! NOTE !!!!!!!!!
// Template string syntax is not available yet,
// once it is available, uncomment the expect function calls

// `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tag `string text ${expression} string text`
// Template strings are string literals allowing embedded expressions.
// You can use multi-line strings and string interpolation features with them.

describe('Template strings', function() {
// Template strings are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
// Template strings can contain place holders. These are indicated by the Dollar sign and curly braces (${expression}).
// The expressions in the place holders and the text between them get passed to a function.
// The default function just concatenates the parts into a single string.
// If there is an expression preceding the template string (tag here),
// the template string is called "tagged template string".
// In that case, the tag expression (usually a function) gets called with the processed template string,
// which you can then manipulate before outputting.


	describe.skip('Use:', function(){
		it('multi-line strings', function(){
			// old way
			expect( "string text line 1\n"+ "string text line 2" ).to.equal( "string text line 1\nstring text line 2" );

			// Template string way
		// expect( `string text line 1
// string text line 2` ).to.equal( "string text line 1\nstring text line 2" );
		});

		it('expression interpolation', function(){
			// old way
			var a = 5;
			var b = 10;
			// expect( "Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + "." ).to.equal( "Fifteen is 15 and/n not 20." );

			// Template string way.
			var a = 5;
			var b = 10;
			// expect( `Fifteen is ${a + b} and\nnot ${2 * a + b}.` ).to.equal( "Fifteen is 15 and/n not 20." );

		});

		it('tagged single templates', function(){
			var a = 5;
			var b = 10;

			// function tag(strings, ...values) {
			//   console.log(strings[0]); // "Hello "
			//   console.log(strings[1]); // " world "
			//   console.log(values[0]);  // 15
			//   console.log(values[1]);  // 50

			//   return "Bazinga!";
			// }

			// expect( tag`Hello ${ a + b } world ${ a * b}` ).to.equal( 'Basinga!' );
		});
	});

});
