var expect = require('chai').expect;

// Date.prototype.getMinutes()

// The getMinutes() method returns the minutes in the specified date according to local time.
// The value returned by getMinutes() is an integer between 0 and 59.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getMinutes', function(){
			it('returns the milliseconds for the specified date, according to local time, a number between 0 and 999.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getMinutes() ).to.equal( 15 );
				expect( (new Date()).getMinutes() ).to.be.within(0, 59);
			});
		});
	});
});


