var expect = require('chai').expect;

//Syntax
//
//str.replace(regexp|substr, newSubStr|function[, flags])
//
//Description
//
//The replace() method returns a new string with some or all matches of
//a pattern replaced by a replacement. The pattern can be a string or a RegExp,
//and the replacement can be a string or a function to be called for each match.
describe('String', function() {
	describe('#prototype', function(){
		describe('#link', function(){
			it('returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.', function(){

				function replacer(match, p1, p2, p3, offset, string) {
				  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
				  return [p1, p2, p3].join(' - ');
				}
				var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
				expect( newString ).to.equal('abc - 12345 - #$*%');

				// using global and ignore
				var re = /apples/gi;
				var str = 'Apples are round, and apples are juicy.';
				var newstr = str.replace(re, 'oranges');
				expect( newstr ).to.equal( 'oranges are round, and oranges are juicy.' );

				// define a RegExp in replace parameter
				var str = 'Twas the night before Xmas...';
				var newstr = str.replace(/xmas/i, 'Christmas');
				expect( newstr ).to.equal( 'Twas the night before Christmas...' );

				// Switching words in a string
				var re = /(\w+)\s(\w+)/;
				var str = 'John Smith';
				var newstr = str.replace(re, '$2, $1');
				console.log(newstr);  // Smith, John

				//Using an inline function that modifies the matched characters
				function styleHyphenFormat(propertyName) {
				  function upperToHyphenLower(match) {
				    return '-' + match.toLowerCase();
				  }
				  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
				}

				expect( styleHyphenFormat('borderTop') ).to.equal( 'border-top' );

				// Replacing a Fahrenheit degree with its Celsius equivalent
				function f2c(x) {
				  function convert(str, p1, offset, s) {
				    return ((p1 - 32) * 5/9) + 'C';
				  }
				  var s = String(x);
				  var test = /(\d+(?:\.\d*)?)F\b/g;
				  return s.replace(test, convert);
				}

				expect( f2c('212F') ).to.equal('100C');

				//Use an inline function with a regular expression to avoid for loops
				//Input:

				// A string made out of the characters x, - and _

				// x-x_
				// x---x---x---x---
				// x-xxx-xx-x-
				// x_x_x___x___x___
				// Output:

				// An array of objects. An 'x' denotes an 'on' state, a '-' (hyphen) denotes an 'off' state and an '_' (underscore) denotes the length of an 'on' state.

				// [
				//   { on: true, length: 1 },
				//   { on: false, length: 1 },
				//   { on: true, length: 2 }
				//   ...
				// ]


				var str = 'x-x_';
				var retArr = [];
				str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
				  if (p1) { retArr.push({ on: true, length: p1.length }); }
				  if (p2) { retArr.push({ on: false, length: 1 }); }
				});

				expect( retArr ).to.have.deep.property('[0].length', 1);
				expect( retArr ).to.have.deep.property('[0].on', true);
				expect( retArr ).to.eql(
				[{
			        "length": 1,
			        "on": true
			      },
			      {
			        "length": 1,
			        "on": false
			      },
			      {
			        "length": 2,
			        "on": true
			    }]
			    );

			});
		});
	});
});

