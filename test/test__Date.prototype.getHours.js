var expect = require('chai').expect;

// Date.prototype.getHours()

// The getHours() method returns the hour for the specified date, according to local time.
// The value returned by getHours() is an integer between 0 and 23.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getHours', function(){
			it('returns the hour for the specified date, according to local time, an integer between 0 and 23.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getHours() ).to.equal( 23 );
				expect( (new Date('December 25, 1995 0:15:30')).getHours() ).to.equal( 0 );
				expect( (new Date()).getHours() ).to.be.within(0, 23);
			});
		});
	});
});


