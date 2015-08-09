var expect = require('chai').expect;

// Date.prototype.getUTCDate()

// The getUTCDate() method returns the day (date) of the month in the specified date according to universal time.

// The value returned by getUTCDate() is an integer between 1 and 31.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCDate', function(){
			it('method returns the day (date) of the month in the specified date according to universal time, an integer between 1 and 31', function(){
				expect( (new Date('December 25, 1995 23:15:30 UTC')).getUTCDate() ).to.equal( 25 );
				expect( (new Date('December 25, 1995 23:15:30')).getUTCDate() ).to.be.within( 24, 26 );
				expect( (new Date()).getUTCDate() ).to.be.within(1, 31);
			});
		});
	});
});


