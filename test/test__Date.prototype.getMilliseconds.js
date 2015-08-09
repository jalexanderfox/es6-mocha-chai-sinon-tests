var expect = require('chai').expect;

// Date.prototype.getMilliseconds()

// The getMilliseconds() method returns the milliseconds in the specified date according to local time.
// The value returned by getMilliseconds() is a number between 0 and 999.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getMilliseconds', function(){
			it('returns the milliseconds for the specified date, according to local time, a number between 0 and 999.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getMilliseconds() ).to.equal( 0 );
				expect( (new Date('December 25, 1995 23:15:30:10')).getMilliseconds() ).to.equal( 10 );

				expect( (new Date()).getMilliseconds() ).to.be.within(0, 999);
			});
		});
	});
});


