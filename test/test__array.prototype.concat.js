// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#concat', function(){
			it('returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments', function(){
				expect(['test'].concat('new', 1, {hello:"world"})).to.eql(['test', 'new', 1, { hello: "world"}]);
			});
		});

	})
}

);