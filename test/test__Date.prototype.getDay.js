var expect = require('chai').expect;

// Date.prototype.getDay()

// The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday.

// The value returned by getDay() is an integer between 0 and 6.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getDay', function(){
			it('returns an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getDay() ).to.equal( 1 );
				expect( (new Date()).getDay() ).to.be.within(0, 6);
			});
		});
	});
});


