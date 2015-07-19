// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The join() method joins all elements of an array into a string.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#join', function(){
			it('joins all elements of an array into a string.', function(){
				var a = ['Wind', 'Rain', 'Fire'];
				expect( a.join() ).to.equal('Wind,Rain,Fire');
				expect( a.join(', ') ).to.equal('Wind, Rain, Fire');
				expect( a.join(' + ') ).to.equal('Wind + Rain + Fire');
				expect( a.join('') ).to.equal('WindRainFire');
			});
		});
	});
});
