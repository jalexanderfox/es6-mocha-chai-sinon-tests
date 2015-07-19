// Javascript Array methods tests including ES6
var expect = require('chai').expect;

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#entries', function(){
			it('returns a new Array Iterator object that contains the key/value pairs for each index in the array', function(){
				expect( eArr.next().value ).to.eql([0, 'a']); // [0, 'a']
				expect( eArr.next().value ).to.eql([1, 'b']); // [1, 'b']
				expect( eArr.next().value ).to.eql([2, 'c']); // [2, 'c']
			});
		});
	});
});
