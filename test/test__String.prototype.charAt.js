var expect = require('chai').expect;

//str.charAt(index)
//The charAt() method returns the specified character from a string.
//
// Characters in a string are indexed from left to right.
// The index of the first character is 0, and the index of
// the last character in a string called stringName is stringName.length - 1.
// If the index you supply is out of range, JavaScript returns an empty string.
describe('String', function() {
	describe('#prototype', function(){
		describe('#charAt', function(){
			it('returns the character at the specified index of the string.', function(){
				var anyString = 'Brave new world';
				expect( '0123456789'.charAt(0)   ).to.equal( "0" );
				expect( '0123456789'.charAt(1)   ).to.equal( "1" );
				expect( '0123456789'.charAt(2)   ).to.equal( "2" );
				expect( '0123456789'.charAt(3)   ).to.equal( "3" );
				expect( '0123456789'.charAt(4)   ).to.equal( "4" );
			});

			it('returns an empty string if the index supplied is out of range', function(){
				expect( 'Brave new world'.charAt(999) ).to.equal( "" );
			});

			describe('use: get whole character', function(){
				var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
				var arrStr = [];
				for (var i = 0, chr; i < str.length; i++) {
				  if ((chr = getWholeChar(str, i)) === false) {
				    continue;
				  }
				  // Adapt this line at the top of each loop, passing in the whole string and
				  // the current iteration and returning a variable to represent the 
				  // individual character

				  arrStr.push(chr);
				  console.log(chr);
				}

				//////
				expect( arrStr ).to.eql( [ 'A', ' ', '你', ' ', 'Z' ] );
				expect( fixedCharAt( str, 2 ) ).to.equal( '你' );
				//fixedCharAt... it's hoisted from below

				function getWholeChar(str, i) {
				  var code = str.charCodeAt(i);

				  if (isNaN(code)) {
				    return ''; // Position not found
				  }
				  if (code < 0xD800 || code > 0xDFFF) {
				    return str.charAt(i);
				  }

				  // High surrogate (could change last hex to 0xDB7F to treat high private
				  // surrogates as single characters)
				  if (0xD800 <= code && code <= 0xDBFF) {
				    if (str.length <= (i + 1)) {
				      throw 'High surrogate without following low surrogate';
				    }
				    var next = str.charCodeAt(i + 1);
				      if (0xDC00 > next || next > 0xDFFF) {
				        throw 'High surrogate without following low surrogate';
				      }
				      return str.charAt(i) + str.charAt(i + 1);
				  }
				  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
				  if (i === 0) {
				    throw 'Low surrogate without preceding high surrogate';
				  }
				  var prev = str.charCodeAt(i - 1);

				  // (could change last hex to 0xDB7F to treat high private
				  // surrogates as single characters)
				  if (0xD800 > prev || prev > 0xDBFF) {
				    throw 'Low surrogate without preceding high surrogate';
				  }
				  // We can pass over low surrogates now as the second component
				  // in a pair which we have already processed
				  return false;
				}

				function fixedCharAt(str, idx) {
				  var ret = '';
				  str += '';
				  var end = str.length;

				  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
				  while ((surrogatePairs.exec(str)) != null) {
				    var li = surrogatePairs.lastIndex;
				    if (li - 2 < idx) {
				      idx++;
				    } else {
				      break;
				    }
				  }

				  if (idx >= end || idx < 0) {
				    return '';
				  }

				  ret += str.charAt(idx);

				  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
				    // Go one further, since one of the "characters" is part of a surrogate pair
				    ret += str.charAt(idx + 1);
				  }
				  return ret;
				}
			});
		});
	});
});

