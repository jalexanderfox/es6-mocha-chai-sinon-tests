var expect = require('chai').expect;

// Date.prototype.getMonth()

// The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
// The value returned by getMonth() is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getMonth', function(){
			it('method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getMonth() ).to.equal( 11 );
				expect( (new Date()).getMonth() ).to.be.within(0, 11);
			});
		});
	});
});


