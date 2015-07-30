var expect = require('chai').expect;

// new RangeError([message[, fileName[, lineNumber]]])
// The RangeError object indicates an error when a value is not in the set or range of allowed values.

// A RangeError is thrown when trying to pass a number as an argument to a function
// that does not allow a range that includes that number. This can be encountered when attempting
// to create an array of an illegal length with the Array constructor, or when passing bad values to
// the numeric methods Number.toExponential(), Number.toFixed() or Number.toPrecision().

describe('RangeError', function(){
	it('object indicates an error when a value is not in the set or range of allowed values.', function(){
		var check = function(num) {
			var MIN=0;
			var MAX=1;
		  if (num < MIN || num > MAX) {
		    throw new RangeError('Parameter must be between ' + MIN + ' and ' + MAX);
		  }
		};

		try {
		  check(500);
		}
		catch (e) {
			if (e instanceof RangeError) {
			// Handle range error
			}

			expect( e ).to.be.instanceof( RangeError ); // true
			expect( e.message ).to.equal( 'Parameter must be between 0 and 1' );
			expect( e.name ).to.equal( "RangeError" );
			// expect( e.fileName ).to.equal( "Scratchpad/1" );
			// expect( e.lineNumber ).to.equal( 2 );
			// expect( e.columnNumber ).to.equal( 2 );
			// expect( e.stack ).to.equal( "@Scratchpad/2:2:3\n" );
		}
	});
});


