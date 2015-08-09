var expect = require('chai').expect;

// Date.prototype.getFullYear()

// The getFullYear() method returns the year of the specified date according to local time.

// Use this method instead of the getYear() method.


// The value returned by getFullYear() is an absolute number.
// For dates between the years 1000 and 9999, getFullYear() returns a four-digit number,
// for example, 1995. Use this function to make sure a year is compliant with years after 2000.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#getFullYear', function(){
			it('returns the year of the specified date according to local time.', function(){
				expect( (new Date('December 25, 1995 23:15:30')).getFullYear() ).to.equal( 1995 );
				var year10 = new Date('December 10, 99 23:15:30');
				expect( year10.getFullYear() ).to.equal( 1999 );
				year10.setFullYear(10);
				expect( year10.getFullYear() ).to.equal( 10 );
			});

			it('returns a four-digit for dates between years 1000 and 9999', function(){
				expect( (new Date('December 25, 9999 23:15:30')).getFullYear() ).to.equal( 9999 );
				expect( (new Date('December 25, 1000 23:15:30')).getFullYear() ).to.equal( 1000 );

			});
		});
	});
});


