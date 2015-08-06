var expect = require('chai').expect;

// Date
// Creates a JavaScript Date instance that represents a single moment in time.
// Date objects are based on a time value that is the number of milliseconds
// since 1 January, 1970 UTC.

// Parameters

// Note: Where Date is called as a constructor with more than one argument,
// if values are greater than their logical range (e.g. 13 is provided
// as the month value or 70 for the minute value), the adjacent value will be adjusted.
// E.g. new Date(2013, 13, 1) is equivalent to new Date(2014, 1, 1), both create
// a date for 2014-02-01 (note that the month is 0-based). Similarly for other values:
// new Date(2013, 2, 1, 0, 70) is equivalent to new Date(2013, 2, 1, 1, 10) which both
// create a date for 2013-03-01T01:10:00.


// The JavaScript Date object provides uniform behavior across platforms.
// The time value can be passed between systems to represent the same moment
// in time and if used to create a local date object, will reflect the local
// equivalent of the time.

// The JavaScript Date object supports a number of UTC (universal) methods, as well as local time methods.
// UTC, also known as Greenwich Mean Time (GMT), refers to the time as set by the World Time Standard.
// The local time is the time known to the computer where JavaScript is executed.


describe('Date', function(){
	it('JavaScript Date objects can only be instantiated by calling JavaScript Date as a constructor', function(){
		expect( new Date() ).to.be.instanceof( Date );
		var birthday = new Date('December 17, 1995 03:24:00');
		var birthday = new Date('1995-12-17T03:24:00');
		var birthday = new Date(1995, 11, 17);
		var birthday = new Date(1995, 11, 17, 3, 24, 0);

		var unixTimestamp = Date.now(); // in milliseconds
	});

	it('return a string rather than a Date object when calling it as a regular function (i.e. without the new operator)', function(){
		expect( Date() ).to.not.be.instanceof( Date );
		expect( Date() ).to.be.a( 'string' );
	});

	it('constructor creates a JavaScript Date object for the current date and time according to system settings if no arguments are provided', function(){
		expect( new Date().getFullYear() ).to.be.at.least( 2015 );
	});

	it('missing arguments are either set to 1 (if day is missing) or 0 for all others, if at least two arguments are supplied', function(){
		expect( new Date(2015, 2).getDate() ).to.be.at.least( 1 );
		expect( new Date(2015, 2).getHours() ).to.be.at.least( 0 );
		expect( new Date(2015, 2).getMinutes() ).to.be.at.least( 0 );
		expect( new Date(2015, 2).getSeconds() ).to.be.at.least( 0 );
	});

	it('The JavaScript date is based on a time value that is milliseconds since midnight 01 January, 1970 UTC. (Epoch)', function(){
		expect( new Date( Date.UTC(1970, 0, 1) ).getTime() ).to.equal( 0 );
		expect( new Date(0).getTime() ).to.equal(0);
	});

	describe('The JavaScript Date object range is -1e8 days to 1e8 days relative to 01 January, 1970 UTC.', function(){
		it('minimum date', function(){
			var ms = -8.64e15;
			var date_min = new Date( ms );
			expect( date_min.getTime() ).to.equal( ms );
			expect( date_min.getUTCFullYear() ).to.equal( -271821 );
			expect( date_min.getUTCMonth() ).to.equal( 3 );
			expect( date_min.getUTCDate() ).to.equal( 20 );
			expect( date_min.getUTCHours() ).to.equal( 0 );
			expect( date_min.getUTCMinutes() ).to.equal( 0 );
			expect( date_min.getUTCSeconds() ).to.equal( 0 );
			expect( date_min.getUTCMilliseconds() ).to.equal( 0 );
		});

		it('max date', function(){
			var ms = 8.64e15;
			var date_min = new Date( ms );
			expect( date_min.getTime() ).to.equal( ms );
			expect( date_min.getUTCFullYear() ).to.equal( 275760 );
			expect( date_min.getUTCMonth() ).to.equal( 8 );
			expect( date_min.getUTCDate() ).to.equal( 13 );
			expect( date_min.getUTCHours() ).to.equal( 0 );
			expect( date_min.getUTCMinutes() ).to.equal( 0 );
			expect( date_min.getUTCSeconds() ).to.equal( 0 );
			expect( date_min.getUTCMilliseconds() ).to.equal( 0 );
		});

		it("Underflow Min Date", function() {

			// epoch - 1e8 days - 1 ms
			var ms = -8.64e15-1;
			var date_overflow = new Date(ms);

			expect( date_overflow.getTime() ).to.be.NaN;
			expect( date_overflow.getUTCFullYear() ).to.be.NaN;
			expect( date_overflow.getUTCMonth() ).to.be.NaN;
			expect( date_overflow.getUTCDate() ).to.be.NaN;
			expect( date_overflow.getUTCHours() ).to.be.NaN;
			expect( date_overflow.getUTCMinutes() ).to.be.NaN;
			expect( date_overflow.getUTCSeconds() ).to.be.NaN;
			expect( date_overflow.getUTCMilliseconds() ).to.be.NaN;
		});

		it("Overflow Max Date", function() {

			// epoch + 1e8 days + 1 ms
			var ms = 8.64e15+1;
			var date_overflow = new Date(ms);

			expect( date_overflow.getTime() ).to.be.NaN;
			expect( date_overflow.getUTCFullYear() ).to.be.NaN;
			expect( date_overflow.getUTCMonth() ).to.be.NaN;
			expect( date_overflow.getUTCDate() ).to.be.NaN;
			expect( date_overflow.getUTCHours() ).to.be.NaN;
			expect( date_overflow.getUTCMinutes() ).to.be.NaN;
			expect( date_overflow.getUTCSeconds() ).to.be.NaN;
			expect( date_overflow.getUTCMilliseconds() ).to.be.NaN;
		});
	});

	it('A day holds 86,400,000 milliseconds', function(){
		expect( new Date(2015, 1, 2).getTime() - new Date(2015, 1, 1).getTime()).to.equal( 86400000 );
	});

	describe('parameters', function(){
		describe('value', function(){
			it('integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).', function(){

			});
		});

		describe('month', function(){
			it('integer value representing the month, beginning with 0 for January to 11 for December.')
			expect( new Date(2015, 0).getMonth() ).to.equal( 0 );
			expect( new Date(2015, 12).getMonth() ).to.equal( 0 );
		});

		describe('day', function(){
			it('integer value representing the day of the month.', function(){
				expect( new Date(2015, 0, 1).getDate() ).to.equal( 1 );
				expect( new Date(2015, 0, 15).getDate() ).to.equal( 15 );
			});
		});

		describe('hour', function(){
			it('integer value representing the hour of the day.', function(){
				expect( new Date(2015, 0, 1, 12).getHours() ).to.equal( 12 );
			});
		});

		describe('minute', function(){
			it('integer value representing the minute segment of a time.', function(){
				expect( new Date(2015, 0, 1, 0, 30).getMinutes() ).to.equal( 30 );
			});
		});

		describe('second', function(){
			it('integer value representing the second segment of a time.', function(){
				expect( new Date(2015, 0, 1, 0, 0, 45).getSeconds() ).to.equal( 45 );
			});
		});

		describe('millisecond', function(){
			it('integer value representing the millisecond segment of a time.', function(){
				expect( new Date(2015, 0, 1, 0, 0, 0, 10).getMilliseconds() ).to.equal( 10 );
			});
		});

		it('adjusts adjacent value if the values are greater than their logical range (e.g. 13 is provided as month value or 70 for minute value)', function(){
			expect( new Date(2015, 12) ).to.eql( new Date(2016, 0) );
			expect( new Date(2015, 13) ).to.eql( new Date(2016, 1) );
			expect( new Date(2015, 13, 1, 25) ).to.eql( new Date(2016, 1, 2, 1) );
		});
	});
});


