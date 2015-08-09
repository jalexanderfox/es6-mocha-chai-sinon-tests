var expect = require('chai').expect;

// Date.prototype.getUTCSeconds()

// The getUTCSeconds() method returns the seconds in the specified date according to universal time.

// The value returned by getUTCSeconds() is an integer between 0 and 59.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCSeconds', function(){
			it('returns the seconds in the specified date according to universal time, an integer between 0 and 59.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getUTCSeconds() ).to.equal( 30 );
				expect( (new Date()).getUTCSeconds() ).to.be.within(0, 59);
			});
		});
	});
});


