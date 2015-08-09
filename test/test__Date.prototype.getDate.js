var expect = require('chai').expect;

// Date.prototype.getDate()

// The getDate() method returns the day of the month for the specified date according to local time.

// The value returned by getDate() is an integer between 1 and 31.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getDate', function(){
			it('returns the day of the month for the specified date according to local time (integer between 1 and 31).', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getDate() ).to.equal( 25 );
				expect( (new Date()).getDate() ).to.be.within(1, 31);
			});
		});
	});
});


