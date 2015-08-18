var expect = require('chai').expect;

// Date.prototype.setTime()
// The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setTime', function(){
			it('sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.', function(){
				var epoch = new Date();
				epoch.setTime(0);
				expect( epoch.getUTCMonth() ).to.equal( 0 );
				expect( epoch.getUTCFullYear() ).to.equal( 1970 );
				expect( epoch.getUTCDate() ).to.equal( 1 );
				expect( epoch.getUTCHours() ).to.equal( 0 );
				expect( epoch.getUTCMinutes() ).to.equal( 0 );
				expect( epoch.getUTCSeconds() ).to.equal( 0 );
				expect( epoch.getUTCMilliseconds() ).to.equal( 0 );
			});
		});
	});
});


