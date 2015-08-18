var expect = require('chai').expect;

// dateObj.toISOString()

// // Polyfill
require('../polyfills/polyfills').getPolyfill('Date.prototype.toISOString');

// The toISOString() method returns a string in simplified extended ISO format (ISO 8601),
// which is always 24 characters long: YYYY-MM-DDTHH:mm:ss.sssZ.
// The timezone is always zero UTC offset, as denoted by the suffix "Z".

describe('Date', function(){
	describe('#prototype', function(){
		describe('#toISOString', function(){
			it('method returns the date portion of a Date object in human readable form in American English ie. Wed Dec 31 1969', function(){
				var now = new Date();
				expect( now.toISOString() ).to.be.a( 'string' );

				var epoch = new Date();
				epoch.setTime(0);
				console.log(epoch.toISOString());
				expect( epoch.toISOString() ).to.match( /\d\d\d\d\-\d\d\-\d\dT\d\d\:\d\d\:\d\d\.\d\d\dZ/ );
			});
		});
	});
});


