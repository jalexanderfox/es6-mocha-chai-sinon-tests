var expect = require('chai').expect;

//str.split([separator[, limit]])
//The split() method splits a String object into an array of strings by separating the string into substrings.
describe('String', function() {
	describe('#prototype', function(){
		describe('#split', function(){
			it('splits a String object into an array of strings by separating the string into substrings.', function(){
				expect( 'index1,index2'.split(',') ).to.have.members( ['index1', 'index2'] );
			});

			it('the separator is treated as a string or a regular expression.', function(){
				expect( 'one,two'.split(',') ).to.eql( 'one,two'.split(/[,]/) );
			});

			it('returns one element consisting of the entire string if separator is omitted', function(){
				expect( 'one'.split() ).to.have.members(['one']);
			});

			it('returns the string converted to an array of characters, if separator is an empty string', function(){
				expect( 'one'.split('') ).to.eql(['o', 'n', 'e']);
			});

			it('splits on every match of separator, but it truncates the returned array to at most   limit   elements.', function(){
				expect( '12345'.split('', 3) ).to.eql(['1', '2', '3']);
			});

			describe('uses', function(){
				it('function to demonstrate the transformation of the string, separator used and the resulting array', function(){

					function splitString(stringToSplit, separator) {
					  var arrayOfStrings = stringToSplit.split(separator);

					  console.log('The original string is: "' + stringToSplit + '"');
					  console.log('The separator is: "' + separator + '"');
					  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));

					  return arrayOfStrings;
					}

					var tempestString = 'Oh brave new world that has such people in it.';
					var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

					var space = ' ';
					var comma = ',';

					expect( splitString(tempestString, space) ).to.eql(['Oh', 'brave', 'new', 'world', 'that', 'has', 'such', 'people', 'in', 'it.']);
					expect( splitString(tempestString) ).to.eql(['Oh brave new world that has such people in it.']);
					expect( splitString(monthString, comma) ).to.eql(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
				});


			});
		});
	});
});

