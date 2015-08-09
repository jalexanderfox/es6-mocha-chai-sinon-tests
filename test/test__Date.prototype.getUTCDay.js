var expect = require('chai').expect;

// Date.prototype.getUTCDay()

// The getUTCDay() method returns the day of the week for the specified date according to universal time, where 0 represents Sunday.

// The value returned by getUTCDay() is an integer between 0 and 6.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCDay', function(){
			it('returns an integer corresponding to the day of the week according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.', function(){
				expect( (new Date('December 25, 1995 23:15:30 UTC')).getUTCDay() ).to.equal( 1 );
				expect( (new Date('December 25, 1995 23:15:30')).getUTCDay() ).to.be.within( 0, 2 );
				expect( (new Date()).getUTCDay() ).to.be.within(0, 6);
			});
		});
	});
});


