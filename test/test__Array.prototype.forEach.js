// Javascript Array methods tests including ES6
var expect = require('chai').expect;




function expectElements(element, index, array) {
  expect(element).to.equal(array[index]);
  console.log('a[' + index + '] = ' + element);
}

//The forEach() method executes a provided function once per array element.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#forEach', function(){
			it('executes a provided function once per array element.', function(){
				// Note elision, there is no member at 2 so it isn't visited
				[2, 5, , 9].forEach(expectElements);
				// logs:
				// a[0] = 2
				// a[1] = 5
				// a[3] = 9
			});
		});
	});
});
