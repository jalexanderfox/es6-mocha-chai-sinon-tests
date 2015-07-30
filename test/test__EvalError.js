var expect = require('chai').expect;

// new EvalError([message[, fileName[, lineNumber]]])
// The EvalError object indicates an error regarding the global eval() function.

describe('EvalError', function(){
	it('object indicates an error regarding the global eval() function', function(){
		try {
			throw new EvalError('Hello', 'someFile.js', 10);
		} catch (e) {
			expect( e instanceof EvalError).to.be.true;
			expect( e.message).to.equal( "Hello" );
			expect( e.name).to.equal( "EvalError" );
			// expect( e.fileName).to.equal( "someFile.js" );
			// expect( e.lineNumber).to.equal( 10 );
			// expect( e.columnNumber).to.equal( 0 );
			// expect( e.stack).to.equal( "@Scratchpad/2:2:9\n" );
		}
	});
});


