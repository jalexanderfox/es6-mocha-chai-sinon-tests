var expect = require('chai').expect;

// Date.prototype.getTime()

// The getTime() method returns the numeric value corresponding to the time for the specified date
// according to universal time.

// You can use this method to help assign a date and time to another Date object.
// This method is functionally equivalent to the valueOf() method.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getTime', function(){
			it('returns the numeric value corresponding to the time for the specified date according to universal time.', function(){
				expect( (new Date(0)).getTime() ).to.equal( 0 );
			});

			describe('Use:', function(){
				it('copy a date with setTime and getTime', function(){
					var original = new Date(1994, 12, 10);
					var copy = new Date();
					copy.setTime(original.getTime());
					expect( copy.toString() ).to.equal( original.toString() );
				});
			});
		});
	});
});


