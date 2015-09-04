var expect = require('chai').expect;

// Syntax
// dateObj.valueOf()

// Description
// The valueOf() method returns the primitive value of a Date object as a number data type,
// the number of milliseconds since midnight 01 January, 1970 UTC.

// This method is functionally equivalent to the Date.prototype.getTime() method.

// This method is usually called internally by JavaScript and not explicitly in code.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#valueOf', function(){
			var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
			it('returns the primitive value of a Date object as a number data type, the number of milliseconds since midnight 01 January, 1970 UTC', function(){
				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.valueOf() ).to.equal( 0 );
			});
		});
	});
});


