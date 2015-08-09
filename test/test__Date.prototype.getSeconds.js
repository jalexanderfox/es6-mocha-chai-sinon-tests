var expect = require('chai').expect;

// Date.prototype.getSeconds()

// The getSeconds() method returns the seconds in the specified date according to local time.

// The value returned by getSeconds() is an integer between 0 and 59.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getSeconds', function(){
			it('returns the seconds in the specified date according to local time, an integer between 0 and 59.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getSeconds() ).to.equal( 30 );
				expect( (new Date()).getSeconds() ).to.be.within(0, 59);
			});
		});
	});
});


