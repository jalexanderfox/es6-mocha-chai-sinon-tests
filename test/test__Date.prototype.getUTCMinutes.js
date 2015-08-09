var expect = require('chai').expect;

// Date.prototype.getUTCMinutes()

// The getUTCMinutes() method returns the minutes in the specified date according to universal time.
// The value returned by getUTCMinutes() is an integer between 0 and 59.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCMinutes', function(){
			it('returns the milliseconds for the specified date, according to universal time, a number between 0 and 999.', function(){
				expect( (new Date('December 25, 1995 23:15:30 UTC')).getUTCMinutes() ).to.equal( 15 );
				expect( (new Date()).getUTCMinutes() ).to.be.within(0, 59);
			});
		});
	});
});


