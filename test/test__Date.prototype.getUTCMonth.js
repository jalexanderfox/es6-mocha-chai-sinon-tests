var expect = require('chai').expect;

// Date.prototype.getUTCMonth()

// The getUTCMonth() returns the month of the specified date according to universal time,
// as a zero-based value (where zero indicates the first month of the year).

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCMonth', function(){
			it('returns the month of the specified date according to universal time.', function(){
				expect( (new Date('December 25, 1995 23:15:30 UTC')).getUTCMonth() ).to.equal( 11 );
				expect( (new Date()).getUTCMonth() ).to.be.within(0, 11);
			});
		});
	});
});


