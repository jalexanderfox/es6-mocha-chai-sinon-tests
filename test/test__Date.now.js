var expect = require('chai').expect;

// Date.now()
// The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

// The now() method returns the milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number.

// Polyfill
require('../polyfills/polyfills').getPolyfill('Date.now');

// Because now() is a static method of Date, you always use it as Date.now().

describe('Date', function() {
	describe('#now', function(){
		it('returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC', function(){
			expect( Date.now() ).to.equal( (new Date()).getTime() );
			expect( Date.now() ).to.be.at.least( 1438892790741 );
		});
	});
});
