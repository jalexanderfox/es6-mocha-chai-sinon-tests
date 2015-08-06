var expect = require('chai').expect;

// The Date.UTC() method accepts the same parameters as the longest form of the constructor,
// and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.

// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.

// Because UTC() is a static method of Date, you always use it as Date.UTC(),
// rather than as a method of a Date object you created.

describe('Date', function() {
	describe('#UTC', function(){
		it('accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time', function(){
			expect( Date.UTC(1970, 0, 1, 0, 0, 0) ).to.equal( 0 );
		});

		describe('differs from the Date constructor in two ways.', function(){
			it('uses universal time instead of the local time.', function(){
				var utc_date_time = Date.UTC(2015, 0, 1);
				var local_date = new Date(2015, 0, 1);

				expect( utc_date_time ).to.equal( getUTCTime(local_date) );
			});

			it('returns a time value as a number instead of creating a Date object.', function(){
				expect( Date.UTC(2015, 0, 1) ).to.equal( 1420070400000 );
				expect( Date.UTC(2015, 0, 1) ).to.be.a( 'number' );
			});
		});

		it('just like the Date constructor, if a parameter you specify is outside of the expected range, the UTC() method updates the other parameters to allow for your number. For example, if you use 15 for month, the year will be incremented by 1 (year + 1), and 3 will be used for the month.', function(){
			expect( Date.UTC(2015, 12, 1) ).to.equal( Date.UTC(2016, 0, 1) );
		});

		it('can be used to create a date using UTC instead of local time', function(){
			var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
			var local_date = new Date(96, 11, 1, 0, 0, 0);
			expect( utcDate ).to.be.a( 'date' );
			expect( utcDate.getTime() ).to.equal( getUTCTime(local_date) );
		});

		//no worries, this gets hoisted
		function getUTCTime(local_date){
			var local_date_time = local_date.getTime();
			var mintues_as_milliseconds = 60000;
			var local_time_offset_in_minutes = local_date.getTimezoneOffset();
			var local_time_offset_in_milliseconds = local_time_offset_in_minutes * mintues_as_milliseconds;
			var local_date_time_less_offset = local_date_time - local_time_offset_in_milliseconds;

			return local_date_time_less_offset;
		}
	});
});
