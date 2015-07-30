var expect = require('chai').expect;

// new ReferenceError([message[, fileName[, lineNumber]]])
// The ReferenceError object represents an error when a non-existent variable is referenced.

describe('ReferenceError', function(){
	it('object represents an error when a non-existent variable is referenced.', function(){
		try {
			var a = undefinedVariable;
		} catch (e) {
			expect( e ).to.be.instanceof( ReferenceError ); // true
			// expect( e.message ).to.equal( ""missing ; before statement" );
			expect( e.name ).to.equal( "ReferenceError" );
			// expect( e.fileName ).to.equal( "Scratchpad/1" );
			// expect( e.lineNumber ).to.equal( 2 );
			// expect( e.columnNumber ).to.equal( 2 );
			// expect( e.stack ).to.equal( "@Scratchpad/2:2:3\n" );

		}

		try {
			throw new ReferenceError('Hello', 'someFile.js', 10);
		} catch (e) {
			expect( e instanceof ReferenceError).to.be.true;
			expect( e.message).to.equal( "Hello" );
			expect( e.name).to.equal( "ReferenceError" );
			// expect( e.fileName).to.equal( "someFile.js" );
			// expect( e.lineNumber).to.equal( 10 );
			// expect( e.columnNumber).to.equal( 0 );
			// expect( e.stack).to.equal( "@Scratchpad/2:2:9\n" );
		}
	});
});


