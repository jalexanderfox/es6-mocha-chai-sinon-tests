var expect = require('chai').expect;

// new SyntaxError([message[, fileName[, lineNumber]]])
// The SyntaxError object represents an error when trying to interpret syntactically invalid code.

describe('SyntaxError', function(){
	it('object represents an error when trying to interpret syntactically invalid code.', function(){
		try {
			eval('hoo bar');
		} catch (e) {
			expect( e ).to.be.instanceof( SyntaxError ); // true
			// expect( e.message ).to.equal( ""missing ; before statement" );
			expect( e.name ).to.equal( "SyntaxError" );
			// expect( e.fileName ).to.equal( "Scratchpad/1" );
			// expect( e.lineNumber ).to.equal( 2 );
			// expect( e.columnNumber ).to.equal( 2 );
			// expect( e.stack ).to.equal( "@Scratchpad/2:2:3\n" );

		}

		try {
			throw new SyntaxError('Hello', 'someFile.js', 10);
		} catch (e) {
			expect( e instanceof SyntaxError).to.be.true;
			expect( e.message).to.equal( "Hello" );
			expect( e.name).to.equal( "SyntaxError" );
			// expect( e.fileName).to.equal( "someFile.js" );
			// expect( e.lineNumber).to.equal( 10 );
			// expect( e.columnNumber).to.equal( 0 );
			// expect( e.stack).to.equal( "@Scratchpad/2:2:9\n" );
		}
	});
});


