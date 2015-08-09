var expect = require('chai').expect;

// Date.prototype.getUTCHours()

// The getUTCHours() method returns the hour for the specified date, according to universal time.
// The value returned by getUTCHours() is an integer between 0 and 23.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCHours', function(){
			it('returns the hour for the specified date, according to universal time, an integer between 0 and 23.', function(){
				expect( (new Date('December 25, 1995 23:15:30 UTC')).getUTCHours() ).to.equal( 23 );
				expect( (new Date('December 25, 1995 0:15:30 UTC')).getUTCHours() ).to.equal( 0 );
				expect( (new Date()).getUTCHours() ).to.be.within(0, 23);
			});
		});
	});
});


