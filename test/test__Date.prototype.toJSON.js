var expect = require('chai').expect;

// dateObj.toJSON()
// The toJSON() method returns a string representation of the Date object.

// Date instances refer to a specific point in time. Calling toJSON() returns a string
// (using toISOString()) representing the Date object's value. This method is generally intended to,
// by default, usefully serialize Date objects during JSON serialization.

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toJSON', function(){
			it('returns a string representation of the Date object, using toISOString().', function(){
				var now = new Date();
				expect( now.toJSON() ).to.be.a( 'string' );

				var epoch = new Date();
				epoch.setTime(0);
				console.log(epoch.toJSON());
				expect( epoch.toJSON() ).to.match( /\d\d\d\d\-\d\d\-\d\dT\d\d\:\d\d\:\d\d\.\d\d\dZ/ );
				expect( epoch.toJSON() ).to.equal( epoch.toISOString() );
			});
		});
	});
});


