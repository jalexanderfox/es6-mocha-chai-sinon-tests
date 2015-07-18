var expect = require('chai').expect;
var sinon = require('sinon');

//The toString() method returns a string representing the specified array and its elements.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#toString', function(){
			it('returns a string representing the specified array and its elements.', function(){
				var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
				expect( monthNames.toString() ).to.equal('Jan,Feb,Mar,Apr');
			});
		})

	})
}

);