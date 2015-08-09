var expect = require('chai').expect;

// Date.prototype.getUTCMilliseconds()

// The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time.
// The value returned by getUTCMilliseconds() is a number between 0 and 999.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getUTCMilliseconds', function(){
			it('returns the milliseconds for the specified date, according to universal time, a number between 0 and 999.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getUTCMilliseconds() ).to.equal( 0 );
				expect( (new Date('December 25, 1995 23:15:30:10')).getUTCMilliseconds() ).to.equal( 10 );

				expect( (new Date()).getUTCMilliseconds() ).to.be.within(0, 999);
			});
		});
	});
});


