var expect = require('chai').expect;

// new TypeError([message[, fileName[, lineNumber]]])
// The TypeError object represents an error when a value is not of the expected type.

describe('TypeError', function(){
	it('object represents an error when a value is not of the expected type', function(){
		try {
			null.f();
		} catch (e) {
			expect( e ).to.be.instanceof( TypeError ); // true
			// expect( e.message ).to.equal( "Cannot read property 'f' of null" );
			expect( e.name ).to.equal( "TypeError" );
			// expect( e.fileName ).to.equal( "Scratchpad/1" );
			// expect( e.lineNumber ).to.equal( 2 );
			// expect( e.columnNumber ).to.equal( 2 );
			// expect( e.stack ).to.equal( "@Scratchpad/2:2:3\n" );

		}

		try {
			throw new TypeError('Hello', 'someFile.js', 10);
		} catch (e) {
			expect( e instanceof TypeError).to.be.true;
			expect( e.message).to.equal( "Hello" );
			expect( e.name).to.equal( "TypeError" );
			// expect( e.fileName).to.equal( "someFile.js" );
			// expect( e.lineNumber).to.equal( 10 );
			// expect( e.columnNumber).to.equal( 0 );
			// expect( e.stack).to.equal( "@Scratchpad/2:2:9\n" );
		}
	});
});


