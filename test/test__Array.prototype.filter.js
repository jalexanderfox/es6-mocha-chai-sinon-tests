// Javascript Array methods tests including ES6
var expect = require('chai').expect;

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

function filterByID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    return false;
  }
}

var arrByID = arr.filter(filterByID);


//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#filter', function(){
			it('creates a new array with all elements that pass the test implemented by the provided function', function(){
				expect( arr ).to.not.equal( arrByID );
				expect( arrByID ).to.eql( [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }] );
			});
		});
	});
});
