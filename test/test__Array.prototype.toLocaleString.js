var expect = require('chai').expect;
var sinon = require('sinon');

//The toLocaleString() method returns a string representing the elements of the array.
//The elements are converted to Strings using their toLocaleString methods and
//these Strings are separated by a locale-specific String (such as a comma “,”).
describe('Array', function() {
	describe('#prototype', function(){
		describe('#toLocaleString', function(){
			it('returns a string representing the elements of the array.', function(){
				var number = 1337;
				var date = new Date();
				var myArr = [number, date, 'foo'];

				var str = myArr.toLocaleString();

				console.log(str);
				// logs '1337,6.12.2013 19:37:35,foo'
				expect( str ).to.equal( number.toString()+','+date.toLocaleString()+','+'foo'.toLocaleString() );
				expect( str ).to.equal( '1337,'+date.toLocaleString()+',foo' );
				// if run in a German (de-DE) locale with timezone Europe/Berlin
			});
		});
	});
});
