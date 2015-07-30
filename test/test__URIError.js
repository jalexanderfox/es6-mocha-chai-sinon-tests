var expect = require('chai').expect;
var util = require('util');

// new URIError([message[, fileName[, lineNumber]]])
// The URIError object represents an error when a global URI handling function was used in a wrong way.

describe('URIError', function(){
	it('object represents an error when a global URI handling function was used in a wrong way', function(){
		expect( new URIError('testing URIError', 'test__URIError.js', 8) ).to.eql( {} );
		try {
			decodeURIComponent('%');
		} catch (e) {
			console.log( util.inspect(e, {depth:null}) );
			expect( e ).to.be.instanceof( URIError ); // true
			expect( e.message ).to.equal( "URI malformed" );
			expect( e.name ).to.equal( "URIError" );
			// expect( e.fileName ).to.equal( "Scratchpad/1" );
			// expect( e.lineNumber ).to.equal( 2 );
			// expect( e.columnNumber ).to.equal( 2 );
			// expect( e.stack ).to.equal( "@Scratchpad/2:2:3\n" );

		}

		try {
			throw new URIError('Hello', 'someFile.js', 10);
		} catch (e) {
			expect( e instanceof URIError).to.be.true;
			expect( e.message).to.equal( "Hello" );
			expect( e.name).to.equal( "URIError" );
			// expect( e.fileName).to.equal( "someFile.js" );
			// expect( e.lineNumber).to.equal( 10 );
			// expect( e.columnNumber).to.equal( 0 );
			// expect( e.stack).to.equal( "@Scratchpad/2:2:9\n" );
		}
	});
});


