var expect = require('chai').expect;

// Date.prototype.setDate(dayValue)

// The setDate() method sets the day of the Date object relative to the beginning of the currently set month, in local date time.
// The value returned by setDate() is the number of milliseconds since 1 January 1970 00:00:00 UTC
// of the resulting date (the Date object is also changed in place).

describe('Date', function(){
	describe('#prototype', function(){
		describe('#setDate', function(){
			it('returns the number of milliseconds since 1 January 1970 00:00:00 UTC of the resulting date which is in local date time', function(){
				var theBigDay = new Date('January 5, 1970 00:00:00 UTC');
				expect( theBigDay.setDate(1) ).to.equal( theBigDay.getTime() );
				expect( theBigDay.setDate(2) ).to.equal( theBigDay.getTime() );
			});

			it('will subtract the difference between the range min and the paramemter and set the date accordingly, if the parameter is less than the range min', function(){
				var lowDate = new Date(1990, 5, 1);
				lowDate.setDate(0);
				expect( lowDate.getDate() ).to.equal( 31 );
				lowDate = new Date(1990, 6, 1);
				lowDate.setDate(0);
				expect( lowDate.getDate() ).to.equal( 30 );
				lowDate.setDate(-5);
				expect( lowDate.getDate() ).to.equal( 26 );
			});

			it('will add the difference between the range max and the parameter and set the date accordingly, if the parameter is greater than the range max', function(){
				var highDate = new Date(1990, 5, 1);
				highDate.setDate(32);
				expect( highDate.getDate() ).to.equal( 2 );
				highDate = new Date(1990, 6, 1);
				highDate.setDate(40);
				expect( highDate.getDate() ).to.equal( 9 );
			});

			describe('use:', function(){
				it('set the date to n days from a given date', function(){
					var dateToPast = new Date(1990, 3, 5);
					var dateToFuture = new Date(1990, 3, 5);
					var nDays = 35;
					var nDaysPast = - ( nDays - dateToPast.getDate() );
					var nDaysFuture = nDays + dateToFuture.getDate();

					dateToFuture.setDate(nDaysFuture);
					dateToPast.setDate(nDaysPast);
					expect( dateToFuture.getDate() ).to.equal( 10 );
					expect( dateToPast.getDate() ).to.equal( 1 );
				});
			});
		});
	});
});




